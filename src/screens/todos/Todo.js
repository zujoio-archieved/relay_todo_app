import React, { useRef } from 'react'
import { View, Text, Button, TouchableOpacity } from 'react-native'
import { ConnectionHandler } from 'relay-runtime'
import { graphql, useMutation } from 'relay-hooks'
import Swipeable from 'react-native-swipeable';
import { useThemeContext } from '../../themeContextDef';

const Todo = (props) => {
    const { theme } = useThemeContext()

    console.log({ theme })

    const [editMutate, { loading: editTodoLoading }] = useMutation(
        graphql`
        mutation TodoEditMutation($input:editTodoInput!) {
            editTodo(input:$input) {
                status
                message
                clientMutationId
            }
        }`
    )

    const swiperRef = useRef(null)

    const [deleteMutate, { loading: deleteTodoLoading }] = useMutation(
        graphql`
        mutation TodoDeleteMutation($input:deleteTodoInput!) {
         deleteTodo (input:$input) {
             status
             message
             clientMutationId
         }
        }
        `
    )

    const editTodoMutation = (id, completed) => {
        const sharedUpdater = store => {
            store.get(id).setValue(completed, "completed")
        }
        editMutate({
            variables: {
                input: {
                    id,
                    completed
                }
            },
            optimisticUpdater: sharedUpdater,
            updater: store => {
                const status = store.getRootField("editTodo").getValue("status")
                if (status === "SUCCESS") {
                    sharedUpdater(store)
                }
            }
        })
    }

    const deleteTodoMutation = id => {
        const sharedUpdater = store => {
            const viewerProxy = store.get(props.viewerId)
            const todos = ConnectionHandler.getConnection(viewerProxy, "TodoPagination_todos")
            ConnectionHandler.deleteNode(todos, id)

        }
        deleteMutate({
            variables: { input: { id } },
            optimisticUpdater: sharedUpdater,
            updater: store => {
                const status = store.getRootField("deleteTodo").getValue("status")
                if (status === "SUCCESS") {
                    sharedUpdater(store)
                }
            }
        })
    }

    return (
        <View style={{ marginVertical: 7, borderColor: theme.dark, borderWidth: 1, borderRadius: 10 }}>
            <Swipeable
                ref={swiperRef}
                leftContent={
                    <Text style={{ fontSize: 16, textAlignVertical: "center", textAlign: "right", backgroundColor: theme.dark, color: "white", height: 40, paddingRight: 10 }}>{
                        props.item.node.completed
                            ? "Make todo Incompleted"
                            : "Make Todo completed"
                    }
                    </Text>
                }
                onLeftActionRelease={() => {
                    editTodoMutation(props.item.node.id, !props.item.node.completed)
                }}
                rightButtons={[
                    <TouchableOpacity
                        onPress={() => {
                            swiperRef.current.recenter()
                            // console.log("ON PRESS", )
                            deleteTodoMutation(props.item.node.id)
                        }}
                    >
                        <View style={{ height: 40 }}>

                            <Text style={{ width: 100, height: 40, backgroundColor: "red", color: "white", textAlign: "center", textAlignVertical: "center", fontSize: 16 }}>Delete</Text>
                        </View>
                    </TouchableOpacity>
                ]}
                leftButtonWidth={100}
                rightButtonWidth={100}
            >
                <View style={{ height: 40, }}>
                    <Text
                        style={{
                            borderRadius: 10,
                            height: 40,
                            marginHorizontal: 10,
                            paddingLeft: 10,
                            color: theme.dark,
                            backgroundColor: theme.light,
                            fontSize: 25,
                            textAlign: "left",
                            textAlignVertical: "center",
                            textDecorationLine: props.item.node.completed ? "line-through" : "none"
                        }}
                    >
                        {props.item.node.title}
                    </Text>
                </View>
            </Swipeable>
        </View>
    )
}

export default Todo
