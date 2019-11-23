/**
 * @flow
 * @relayHash 93eddb6d9ee53ff794a03eaf699f8733
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type TodoEditedSubscriptionVariables = {|
  viewerId?: ?string
|};
export type TodoEditedSubscriptionResponse = {|
  +todoEdited: ?{|
    +todoEdge: ?{|
      +cursor: string,
      +node: ?{|
        +id: ?string,
        +title: ?string,
        +completed: ?boolean,
      |},
    |}
  |}
|};
export type TodoEditedSubscription = {|
  variables: TodoEditedSubscriptionVariables,
  response: TodoEditedSubscriptionResponse,
|};
*/


/*
subscription TodoEditedSubscription(
  $viewerId: String
) {
  todoEdited(viewerId: $viewerId) {
    todoEdge {
      cursor
      node {
        id
        title
        completed
      }
    }
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "viewerId",
    "type": "String",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "todoEdited",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "viewerId",
        "variableName": "viewerId"
      }
    ],
    "concreteType": "todoEdited",
    "plural": false,
    "selections": [
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
      }
    ]
  }
];
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "TodoEditedSubscription",
    "type": "RootSubscription",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "TodoEditedSubscription",
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "params": {
    "operationKind": "subscription",
    "name": "TodoEditedSubscription",
    "id": null,
    "text": "subscription TodoEditedSubscription(\n  $viewerId: String\n) {\n  todoEdited(viewerId: $viewerId) {\n    todoEdge {\n      cursor\n      node {\n        id\n        title\n        completed\n      }\n    }\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'b0d2516fd840beaed0e16dbca2c8547d';
module.exports = node;
