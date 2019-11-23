/**
 * @flow
 * @relayHash e7f79fd99d7bff14ba52b452049ce2d1
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type TodoDeletedSubscriptionVariables = {|
  viewerId?: ?string
|};
export type TodoDeletedSubscriptionResponse = {|
  +todoDeleted: ?{|
    +deletedId: ?string
  |}
|};
export type TodoDeletedSubscription = {|
  variables: TodoDeletedSubscriptionVariables,
  response: TodoDeletedSubscriptionResponse,
|};
*/


/*
subscription TodoDeletedSubscription(
  $viewerId: String
) {
  todoDeleted(viewerId: $viewerId) {
    deletedId
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
    "name": "todoDeleted",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "viewerId",
        "variableName": "viewerId"
      }
    ],
    "concreteType": "todoDeleted",
    "plural": false,
    "selections": [
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "deletedId",
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
    "name": "TodoDeletedSubscription",
    "type": "RootSubscription",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "TodoDeletedSubscription",
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "params": {
    "operationKind": "subscription",
    "name": "TodoDeletedSubscription",
    "id": null,
    "text": "subscription TodoDeletedSubscription(\n  $viewerId: String\n) {\n  todoDeleted(viewerId: $viewerId) {\n    deletedId\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '17710e49bfae8edc7a971638e1911d6c';
module.exports = node;
