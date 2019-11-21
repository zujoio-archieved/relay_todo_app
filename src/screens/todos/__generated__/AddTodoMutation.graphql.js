/**
 * @flow
 * @relayHash b2cbfa1ab3a93b41aa0cfc486a736a64
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type createTodoInput = {|
  title?: ?string,
  clientMutationId?: ?string,
|};
export type AddTodoMutationVariables = {|
  input: createTodoInput
|};
export type AddTodoMutationResponse = {|
  +createTodo: ?{|
    +status: ?string,
    +message: ?string,
    +todoEdge: ?{|
      +cursor: string,
      +node: ?{|
        +id: ?string,
        +title: ?string,
        +completed: ?boolean,
      |},
    |},
    +clientMutationId: ?string,
  |}
|};
export type AddTodoMutation = {|
  variables: AddTodoMutationVariables,
  response: AddTodoMutationResponse,
|};
*/


/*
mutation AddTodoMutation(
  $input: createTodoInput!
) {
  createTodo(input: $input) {
    status
    message
    todoEdge {
      cursor
      node {
        id
        title
        completed
      }
    }
    clientMutationId
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "input",
    "type": "createTodoInput!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "createTodo",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input"
      }
    ],
    "concreteType": "createTodoPayload",
    "plural": false,
    "selections": [
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "status",
        "args": null,
        "storageKey": null
      },
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "message",
        "args": null,
        "storageKey": null
      },
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "todoEdge",
        "storageKey": null,
        "args": null,
        "concreteType": "TodoEdge",
        "plural": false,
        "selections": [
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "cursor",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "node",
            "storageKey": null,
            "args": null,
            "concreteType": "Todo",
            "plural": false,
            "selections": [
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "id",
                "args": null,
                "storageKey": null
              },
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
              }
            ]
          }
        ]
      },
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "clientMutationId",
        "args": null,
        "storageKey": null
      }
    ]
  }
];
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "AddTodoMutation",
    "type": "RootMutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "AddTodoMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "params": {
    "operationKind": "mutation",
    "name": "AddTodoMutation",
    "id": null,
    "text": "mutation AddTodoMutation(\n  $input: createTodoInput!\n) {\n  createTodo(input: $input) {\n    status\n    message\n    todoEdge {\n      cursor\n      node {\n        id\n        title\n        completed\n      }\n    }\n    clientMutationId\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'e5549d1931c474a57549a503a9718501';
module.exports = node;
