import React, { useState } from 'react'
import { View, Text, TextInput } from 'react-native'
import { graphql, useMutation } from 'relay-hooks'
import { ConnectionHandler } from 'relay-runtime'
import uuid from "uuid"

const AddTodo = (props) => {
    const [title, setTitle] = useState("")

    const [mutate, { loading }] = useMutation(graphql`
    mutation AddTodoMutation($input:createTodoInput!) {
        createTodo(input:$input) {
            status
            message
            todoEdge {
                cursor
                node {
                    id
                    title
                    completed
                }
            }
            clientMutationId
            
        }
    }
    `)

    const addTodo = () => {
        if (title.length !== 0) {
            const sharedUpdater = (store, viewerId, newEdge) => {
                const viewerProxy = store.get(viewerId)
                const todos = ConnectionHandler.getConnection(viewerProxy, "TodoPagination_todos")
                ConnectionHandler.insertEdgeBefore(todos, newEdge)
            }

            let tempID = 0

            mutate({
                variables: {
                    input: {
                        title,
                        clientMutationId: `${tempID++}`,
                    }
                },
                optimisticUpdater: store => {
                    const id = 'client:newTodo:' + tempID++;
                    const node = store.create(id, 'Todo');
                    node.setValue(title, "title")
                    node.setValue(false, "completed")
                    node.setValue(id, "id")

                    const newEdge = store.create('client:newEdge:' + tempID++, "TodoEdge")
                    newEdge.setLinkedRecord(node, 'node');

                    sharedUpdater(store, props.viewerId, newEdge);

                },
                updater: store => {
                    const createTodo = store.getRootField("createTodo")
                    const status = createTodo.getValue("status")
                    if (status === "SUCCESS") {
                        const newEdge = createTodo.getLinkedRecord("todoEdge")
                        sharedUpdater(store, props.viewerId, newEdge)
                    }
                },
                onCompleted: () => {
                    setTitle("")
                }
            })
        }
    }

    return (
        <View>
            <TextInput
                placeholder="Add Todo"
                value={title}
                onChangeText={setTitle}
                onSubmitEditing={addTodo}
                returnKeyType={"done"}
                editable={!loading}
            />
        </View>
    )
}

export default AddTodo
