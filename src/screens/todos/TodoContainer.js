import React, { useState } from 'react'
import { View, Text, Picker } from 'react-native'
import { useMutation } from 'relay-hooks'
import TodoList from './TodoList'
import { useThemeContext } from '../../themeContextDef'
import AddTodo from './AddTodo'

const TodoContainer = (props) => {
    const {
        completedTodos,
        inCompletedTodos,
        allTodos
    } = props

    const display = { ALL: "ALL", COMPLETED: "COMPLETED", INCOMPLETED: "INCOMPLETED" }
    const [displayer, setDisplayer] = useState(display.ALL)

    const { theme, availableThemes } = useThemeContext()

    const [mutate, { loading }] = useMutation(
        graphql`
        mutation TodoContainerChangeThemeMutation($input:changeThemeInput!) {
            changeTheme(input:$input) {
                theme {
                    index
                    name
                    primary
                    dark
                    light
                }
            }
        }`
    )

    return (
        <View style={{ flex: 1, backgroundColor: theme.light, }}>
            <View style={{ height: 80, flexDirection: "row", alignItems: "center", paddingHorizontal: 10 }}>
                <Text
                    style={{
                        // marginLeft: 10,
                        fontSize: 40,
                        color: theme.dark,
                        flex: 1,
                        textAlignVertical: "center"
                    }}
                >
                    todos
                </Text>
                <Picker
                    onValueChange={index => {
                        const theme = availableThemes[index]
                        mutate({
                            variables: { input: { index: theme.index } },
                            optimisticUpdater: store => {
                                const viewerProxy = store.get(props.viewerId)
                                const proxyTheme = viewerProxy.getLinkedRecord("theme")
                                proxyTheme.setValue(theme.index, "index")
                                proxyTheme.setValue(theme.name, "name")
                                proxyTheme.setValue(theme.light, "light")
                                proxyTheme.setValue(theme.primary, "primary")
                                proxyTheme.setValue(theme.dark, "dark")
                            },
                            updater: store => {
                                const changeTheme = store.getRootField("changeTheme")
                                const viewerProxy = store.get(props.viewerId)
                                if (viewerProxy && changeTheme) {
                                    viewerProxy.setLinkedRecord(changeTheme.getLinkedRecord("theme"), "theme")
                                }
                                console.log({ viewerProxy, changeTheme })
                            }
                        })
                    }}
                    selectedValue={theme.index}
                    style={{
                        backgroundColor: theme.dark,
                        width: 100,
                    }}
                >
                    {availableThemes.map(theme => {
                        return (
                            <Picker.Item label={theme.name} value={theme.index} />
                        )
                    })}
                </Picker>
            </View>

            <AddTodo viewerId={props.viewerId} />

            <Picker
                mode="dropdown"
                style={{ backgroundColor: theme.primary, width: 150, marginLeft: 10 }}
                selectedValue={displayer}
                onValueChange={setDisplayer}
            // itemStyle={{
            //     color: theme.light
            // }}
            >
                <Picker.Item label={"All"} value={display.ALL} />
                <Picker.Item label={"Completed"} value={display.COMPLETED} />
                <Picker.Item label={"Incompleted"} value={display.INCOMPLETED} />
            </Picker>
            <TodoList
                edges={
                    displayer === display.ALL
                        ? allTodos
                        : displayer === display.COMPLETED
                            ? completedTodos : inCompletedTodos
                }
                viewerId={props.viewerId}
                _loadMore={props._loadMore}
                hasMore={props.hasMore}
            />
        </View>
    )
}

export default TodoContainer
