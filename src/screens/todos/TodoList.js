import React from 'react'
import { FlatList, View, Text, ActivityIndicator, Dimensions } from 'react-native'
import Todo from './Todo'
import { useThemeContext } from '../../themeContextDef'

const TodoList = (props) => {
    const { theme } = useThemeContext()
    const { width } = Dimensions.get("window")

    const _renderItem = ({ item }) => {
        return <Todo viewerId={props.viewerId} item={item} />
    }

    return (
        <View style={{ alignSelf: "center", flex: 1, marginBottom: 10, paddingVertical: 10, borderWidth: 2, borderColor: theme.dark, borderRadius: 7, width: width * 0.98, marginTop: 10 }}>
            <FlatList
                style={{ width: width * 0.95, alignSelf: "center", }}
                data={props.edges}
                renderItem={_renderItem}
                onEndReached={props._loadMore}
                ListFooterComponent={props.hasMore() ? <View><ActivityIndicator /></View> : null}
            />
        </View>
    )
}

export default TodoList
