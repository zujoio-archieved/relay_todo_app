import { graphql, requestSubscription } from 'react-relay'

const subscription = graphql`
subscription CompletedTodosDeletedSubscription($viewerId:String) {
    completedTodosDeleted(viewerId:$viewerId) {
        message
        deletedIds
    }
}`




const subscribe = (environment, viewerId) => {
    requestSubscription(
        environment,
        {
            subscription,
            variables: { viewerId }
        })
}

export default { subscribe }
