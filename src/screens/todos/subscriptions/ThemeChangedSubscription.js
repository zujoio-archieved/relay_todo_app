import { graphql, requestSubscription } from 'react-relay'

const subscription = graphql`
subscription ThemeChangedSubscription($viewerId:String) {
    themeChanged(viewerId:$viewerId) {
        theme {
            index
            name
            primary
            dark
            light
        }
    }
}
`

const subscribe = (environment, viewerId) => {
    requestSubscription(environment, {
        variables: { viewerId },
        subscription,
        updater: store => {
            const theme = store.getRootField("themeChanged").getLinkedRecord("theme")
            const viewerProxy = store.get(viewerId)
            viewerProxy && theme && viewerProxy.setLinkedRecord(theme, "theme")
        }
    })
}

export default { subscribe }
