/**
 * @flow
 * @relayHash 951f100da8927eed3f55da2b6464e3ca
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type CompletedTodosDeletedSubscriptionVariables = {|
  viewerId?: ?string
|};
export type CompletedTodosDeletedSubscriptionResponse = {|
  +completedTodosDeleted: ?{|
    +message: ?string,
    +deletedIds: ?$ReadOnlyArray<?string>,
  |}
|};
export type CompletedTodosDeletedSubscription = {|
  variables: CompletedTodosDeletedSubscriptionVariables,
  response: CompletedTodosDeletedSubscriptionResponse,
|};
*/


/*
subscription CompletedTodosDeletedSubscription(
  $viewerId: String
) {
  completedTodosDeleted(viewerId: $viewerId) {
    message
    deletedIds
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
    "name": "completedTodosDeleted",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "viewerId",
        "variableName": "viewerId"
      }
    ],
    "concreteType": "completedTodosDeleted",
    "plural": false,
    "selections": [
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "message",
        "args": null,
        "storageKey": null
      },
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "deletedIds",
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
    "name": "CompletedTodosDeletedSubscription",
    "type": "RootSubscription",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "CompletedTodosDeletedSubscription",
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "params": {
    "operationKind": "subscription",
    "name": "CompletedTodosDeletedSubscription",
    "id": null,
    "text": "subscription CompletedTodosDeletedSubscription(\n  $viewerId: String\n) {\n  completedTodosDeleted(viewerId: $viewerId) {\n    message\n    deletedIds\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '4e18cff3576f5d280d57d73d6a71fd4a';
module.exports = node;
