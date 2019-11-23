import React from 'react'
import { View, Text, ActivityIndicator, FlatList } from 'react-native'
import { graphql, usePagination, useMutation } from 'relay-hooks'
import Todo from './Todo';
import AddTodo from './AddTodo';
import TodoContainer from './TodoContainer';

const TodoPagination = (props) => {
    const fragmentSpec = graphql`
    fragment TodoPagination_user on User
    @argumentDefinitions(
        completed: { type: "Boolean" }
        first: { type: "Int", defaultValue: 10 }
        cursor: { type: "String" }
    ) {
        todos( after: $cursor, first: $first, completed:$completed)
        @connection(
            key: "TodoPagination_todos"
            filters: []
        ) {
            pageInfo {
                hasNextPage
                hasPreviousPage
                startCursor
                endCursor
            }
            edges {
                node {
                    id
                    title
                    completed
                }
            }
        }
    }`;

    const connectionConfig = {
        getVariables(props, { cursor }, fragmentVariables, options) {
            return {
                cursor,
                completed: fragmentVariables.completed,
                first: fragmentVariables.first
            };
        },
        query: props.TodoViewerQuery
    };

    const [viewer, { hasMore, isLoading, loadMore }] = usePagination(
        fragmentSpec,
        props.viewer
    );

    const _loadMore = () => {
        if (!hasMore() || isLoading()) {
            return;
        }

        loadMore(
            connectionConfig,
            1, // Fetch the next 10 feed items
            error => {
                if (error) {
                    console.log(error);
                }
            },
        );
    };

    const completedTodos = []
    const inCompletedTodos = []
    viewer.todos.edges.forEach(edge => {
        if (edge.node.completed) {
            completedTodos.push(edge)
        } else {
            inCompletedTodos.push(edge)
        }
    })

    return (
        <View style={{ flex: 1 }}>
            {/* <AddTodo viewerId={props.viewer.id} /> */}
            <TodoContainer
                completedTodos={completedTodos}
                inCompletedTodos={inCompletedTodos}
                allTodos={viewer.todos.edges}
                viewerId={props.viewer.id}
                _loadMore={_loadMore}
                hasMore={hasMore}
            />
        </View>
    )
}

export default TodoPagination
