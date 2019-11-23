import { ConnectionHandler } from 'relay-runtime'
import { graphql, requestSubscription } from 'react-relay'

const subscription = graphql`
subscription TodoDeletedSubscription($viewerId:String) {
    todoDeleted(viewerId:$viewerId) {
        deletedId
    }
}`

const subscribe = (environment, viewerId) => {
    requestSubscription(environment, {
        variables: { viewerId },
        subscription,
        updater: store => {
            const rootField = store.getRootField("todoDeleted")
            const deletedId = rootField.getValue("deletedId")
            const viewerProxy = store.get(viewerId)
            const todos = ConnectionHandler.getConnection(viewerProxy, "TodoPagination_todos")
            ConnectionHandler.deleteNode(todos, deletedId);
        }
    })
}

export default { subscribe }
