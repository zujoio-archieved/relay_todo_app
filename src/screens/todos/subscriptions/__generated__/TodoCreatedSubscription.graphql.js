/**
 * @flow
 * @relayHash 46a011d3e6b814e93b971fb7483d0b33
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type TodoCreatedSubscriptionVariables = {|
  viewerId?: ?string
|};
export type TodoCreatedSubscriptionResponse = {|
  +todoCreated: ?{|
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
export type TodoCreatedSubscription = {|
  variables: TodoCreatedSubscriptionVariables,
  response: TodoCreatedSubscriptionResponse,
|};
*/


/*
subscription TodoCreatedSubscription(
  $viewerId: String
) {
  todoCreated(viewerId: $viewerId) {
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
    "name": "todoCreated",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "viewerId",
        "variableName": "viewerId"
      }
    ],
    "concreteType": "todoCreated",
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
    "name": "TodoCreatedSubscription",
    "type": "RootSubscription",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "TodoCreatedSubscription",
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "params": {
    "operationKind": "subscription",
    "name": "TodoCreatedSubscription",
    "id": null,
    "text": "subscription TodoCreatedSubscription(\n  $viewerId: String\n) {\n  todoCreated(viewerId: $viewerId) {\n    todoEdge {\n      cursor\n      node {\n        id\n        title\n        completed\n      }\n    }\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '81d29728ed5d6d20a810e451cf6c945d';
module.exports = node;
