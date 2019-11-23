import { ConnectionHandler } from 'relay-runtime'
import { graphql, requestSubscription } from 'react-relay'

const subscription = graphql`
subscription TodoCreatedSubscription($viewerId:String) {
    todoCreated(viewerId:$viewerId) {
        todoEdge {
            cursor
            node {
                id
                title
                completed
            }
        }
    }
}`

const subscribe = (environment, viewerId) => {
    requestSubscription(environment, {
        subscription,
        variables: {
            viewerId
        },
        updater: store => {
            const rootField = store.getRootField("todoCreated")
            const newEdge = rootField.getLinkedRecord("todoEdge")

            const id = newEdge.getLinkedRecord("node").getValue("id")

            // console.log({ id })

            const viewerProxy = store.get(viewerId)

            const todos = ConnectionHandler.getConnection(viewerProxy, "TodoPagination_todos")

            const todoExists = todos.getLinkedRecords("edges").find(edge => {
                return edge.getLinkedRecord("node").getValue("id") === id
            })

            if (!todoExists) {
                ConnectionHandler.insertEdgeBefore(todos, newEdge)
            }
        }
    })
}

export default { subscribe }
