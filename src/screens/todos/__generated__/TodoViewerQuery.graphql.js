/**
 * @flow
 * @relayHash 8ba07e9626fd1ee193b726f45bf43333
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type TodoPagination_user$ref = any;
export type TodoViewerQueryVariables = {|
  completed?: ?boolean,
  first?: ?number,
  cursor?: ?string,
|};
export type TodoViewerQueryResponse = {|
  +viewer: ?{|
    +id: ?string,
    +theme: ?{|
      +index: ?number,
      +name: ?string,
      +light: ?string,
      +primary: ?string,
      +dark: ?string,
    |},
    +availableThemes: ?$ReadOnlyArray<?{|
      +index: ?number,
      +name: ?string,
      +light: ?string,
      +primary: ?string,
      +dark: ?string,
    |}>,
    +$fragmentRefs: TodoPagination_user$ref,
  |}
|};
export type TodoViewerQuery = {|
  variables: TodoViewerQueryVariables,
  response: TodoViewerQueryResponse,
|};
*/


/*
query TodoViewerQuery(
  $completed: Boolean
  $first: Int
  $cursor: String
) {
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
    ...TodoPagination_user_2zNEi9
  }
}

fragment TodoPagination_user_2zNEi9 on User {
  todos(after: $cursor, first: $first, completed: $completed) {
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
        __typename
      }
      cursor
    }
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "completed",
    "type": "Boolean",
    "defaultValue": null
  },
  {
    "kind": "LocalArgument",
    "name": "first",
    "type": "Int",
    "defaultValue": null
  },
  {
    "kind": "LocalArgument",
    "name": "cursor",
    "type": "String",
    "defaultValue": null
  }
],
v1 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
},
v2 = [
  {
    "kind": "ScalarField",
    "alias": null,
    "name": "index",
    "args": null,
    "storageKey": null
  },
  {
    "kind": "ScalarField",
    "alias": null,
    "name": "name",
    "args": null,
    "storageKey": null
  },
  {
    "kind": "ScalarField",
    "alias": null,
    "name": "light",
    "args": null,
    "storageKey": null
  },
  {
    "kind": "ScalarField",
    "alias": null,
    "name": "primary",
    "args": null,
    "storageKey": null
  },
  {
    "kind": "ScalarField",
    "alias": null,
    "name": "dark",
    "args": null,
    "storageKey": null
  }
],
v3 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "theme",
  "storageKey": null,
  "args": null,
  "concreteType": "userTheme",
  "plural": false,
  "selections": (v2/*: any*/)
},
v4 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "availableThemes",
  "storageKey": null,
  "args": null,
  "concreteType": "userTheme",
  "plural": true,
  "selections": (v2/*: any*/)
},
v5 = {
  "kind": "Variable",
  "name": "completed",
  "variableName": "completed"
},
v6 = {
  "kind": "Variable",
  "name": "first",
  "variableName": "first"
},
v7 = [
  {
    "kind": "Variable",
    "name": "after",
    "variableName": "cursor"
  },
  (v5/*: any*/),
  (v6/*: any*/)
];
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "TodoViewerQuery",
    "type": "RootQuery",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "viewer",
        "storageKey": null,
        "args": null,
        "concreteType": "User",
        "plural": false,
        "selections": [
          (v1/*: any*/),
          (v3/*: any*/),
          (v4/*: any*/),
          {
            "kind": "FragmentSpread",
            "name": "TodoPagination_user",
            "args": [
              (v5/*: any*/),
              {
                "kind": "Variable",
                "name": "cursor",
                "variableName": "cursor"
              },
              (v6/*: any*/)
            ]
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "TodoViewerQuery",
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "viewer",
        "storageKey": null,
        "args": null,
        "concreteType": "User",
        "plural": false,
        "selections": [
          (v1/*: any*/),
          (v3/*: any*/),
          (v4/*: any*/),
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "todos",
            "storageKey": null,
            "args": (v7/*: any*/),
            "concreteType": "TodoConnection",
            "plural": false,
            "selections": [
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "pageInfo",
                "storageKey": null,
                "args": null,
                "concreteType": "PageInfo",
                "plural": false,
                "selections": [
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "hasNextPage",
                    "args": null,
                    "storageKey": null
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "hasPreviousPage",
                    "args": null,
                    "storageKey": null
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "startCursor",
                    "args": null,
                    "storageKey": null
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "endCursor",
                    "args": null,
                    "storageKey": null
                  }
                ]
              },
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "edges",
                "storageKey": null,
                "args": null,
                "concreteType": "TodoEdge",
                "plural": true,
                "selections": [
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "node",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "Todo",
                    "plural": false,
                    "selections": [
                      (v1/*: any*/),
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "name": "title",
                        "args": null,
                        "storageKey": null
                      },
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "name": "completed",
                        "args": null,
                        "storageKey": null
                      },
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "name": "__typename",
                        "args": null,
                        "storageKey": null
                      }
                    ]
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "cursor",
                    "args": null,
                    "storageKey": null
                  }
                ]
              }
            ]
          },
          {
            "kind": "LinkedHandle",
            "alias": null,
            "name": "todos",
            "args": (v7/*: any*/),
            "handle": "connection",
            "key": "TodoPagination_todos",
            "filters": []
          }
        ]
      }
    ]
  },
  "params": {
    "operationKind": "query",
    "name": "TodoViewerQuery",
    "id": null,
    "text": "query TodoViewerQuery(\n  $completed: Boolean\n  $first: Int\n  $cursor: String\n) {\n  viewer {\n    id\n    theme {\n      index\n      name\n      light\n      primary\n      dark\n    }\n    availableThemes {\n      index\n      name\n      light\n      primary\n      dark\n    }\n    ...TodoPagination_user_2zNEi9\n  }\n}\n\nfragment TodoPagination_user_2zNEi9 on User {\n  todos(after: $cursor, first: $first, completed: $completed) {\n    pageInfo {\n      hasNextPage\n      hasPreviousPage\n      startCursor\n      endCursor\n    }\n    edges {\n      node {\n        id\n        title\n        completed\n        __typename\n      }\n      cursor\n    }\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '2c68fd16499f3ed4a9eaff95435545b0';
module.exports = node;
