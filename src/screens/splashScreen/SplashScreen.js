import React from 'react'
import { View, Dimensions, ActivityIndicator } from 'react-native'
import { graphql, useQuery } from 'relay-hooks'
import { ROUTES_CONSTANTS } from '../../AppNavigation';
import { LocalStorage } from '../../utils/localstorage';

const SplashScreen = (screenProps) => {
    // console.log("SplashScreen")

    const { height, width } = Dimensions.get("window")

    const SplashScreenQuery = graphql`
    query SplashScreenQuery {
        viewer {
            id
            email
        }
    }`


    const { props, error, retry, cached } = useQuery({
        query: SplashScreenQuery,
        cacheConfig: {
            force: true
        }
    });


    console.log({ props })

    if (props && props.viewer) {
        if (props.viewer.email) {
            screenProps.navigation.navigate(ROUTES_CONSTANTS.TODOS)
        } else {
            screenProps.navigation.navigate(ROUTES_CONSTANTS.SIGN_IN)
        }
    }

    return (
        <View style={{ height, width, justifyContent: "center", alignItems: "center" }}>
            <ActivityIndicator />
        </View>
    )
}

export default SplashScreen
