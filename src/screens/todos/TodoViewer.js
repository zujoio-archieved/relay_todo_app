import React from 'react'
import { View, Text, ActivityIndicator } from 'react-native'
import { useQuery, graphql } from 'relay-hooks'
import TodoPagination from './TodoPagination';
import { ThemeContext } from '../../themeContextDef';
import TodoCreatedSubscription from './subscriptions/TodoCreatedSubscription';
import TodoEditedSubscription from './subscriptions/TodoEditedSubscription';
import TodoDeletedSubscription from './subscriptions/TodoDeletedSubscription';
import CompletedTodosDeletedSubscription from './subscriptions/CompletedTodosDeletedSubscription';
import ThemeChangedSubscription from './subscriptions/ThemeChangedSubscription';
import { useEnvironmentContext } from '../../environmentContextDef';

const TodoViewer = () => {
  const { environment } = useEnvironmentContext()

  const TodoViewerQuery = graphql`
    query TodoViewerQuery($completed: Boolean, $first: Int, $cursor: String) {
      viewer {
        id
        theme {
          index
          name
          light 
          primary
          dark
        }
        availableThemes {
          index
          name
          light 
          primary
          dark
        }
        ...TodoPagination_user
          @arguments(completed: $completed, first: $first, cursor: $cursor)
      }
    }
  `
  // const TodoViewerQuery = graphql`
  // query TodoViewerQuery {
  //     viewer {
  //         id
  //         email
  //         firstName
  //         lastName
  //     }
  // }`


  // const { props, error, retry, cached } = useQuery({
  //     query: TodoViewerQuery,
  //     cacheConfig: {
  //         force: true
  //     }
  // });

  const { props, error, retry, cached } = useQuery({
    query: TodoViewerQuery,
    variables: {
      first: 10,
      cursor: null,
      completed: null
    }
  });

  if (props && props.viewer) {
    // TodoCreatedSubscription.subscribe(environment, props.viewer.id)
    TodoEditedSubscription.subscribe(environment, props.viewer.id)
    TodoDeletedSubscription.subscribe(environment, props.viewer.id)
    CompletedTodosDeletedSubscription.subscribe(environment, props.viewer.id)
    ThemeChangedSubscription.subscribe(environment, props.viewer.id)


    return (
      <ThemeContext.Provider
        value={{
          theme: props.viewer.theme,
          availableThemes: props.viewer.availableThemes
        }}>
        <TodoPagination TodoViewerQuery={TodoViewerQuery} viewer={props.viewer} />
      </ThemeContext.Provider>
    )
  } else {
    return <View><ActivityIndicator /></View>
  }

  // return props && props.viewer
  //   ? (
  //   )
  //   :
}

export default TodoViewer
