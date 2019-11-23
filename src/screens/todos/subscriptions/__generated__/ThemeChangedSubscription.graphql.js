/**
 * @flow
 * @relayHash 4089bded6a175f18f5455f426842908c
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type ThemeChangedSubscriptionVariables = {|
  viewerId?: ?string
|};
export type ThemeChangedSubscriptionResponse = {|
  +themeChanged: ?{|
    +theme: ?{|
      +index: ?number,
      +name: ?string,
      +primary: ?string,
      +dark: ?string,
      +light: ?string,
    |}
  |}
|};
export type ThemeChangedSubscription = {|
  variables: ThemeChangedSubscriptionVariables,
  response: ThemeChangedSubscriptionResponse,
|};
*/


/*
subscription ThemeChangedSubscription(
  $viewerId: String
) {
  themeChanged(viewerId: $viewerId) {
    theme {
      index
      name
      primary
      dark
      light
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
    "name": "themeChanged",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "viewerId",
        "variableName": "viewerId"
      }
    ],
    "concreteType": "themeChanged",
    "plural": false,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "theme",
        "storageKey": null,
        "args": null,
        "concreteType": "userTheme",
        "plural": false,
        "selections": [
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
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "light",
            "args": null,
            "storageKey": null
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
    "name": "ThemeChangedSubscription",
    "type": "RootSubscription",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "ThemeChangedSubscription",
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "params": {
    "operationKind": "subscription",
    "name": "ThemeChangedSubscription",
    "id": null,
    "text": "subscription ThemeChangedSubscription(\n  $viewerId: String\n) {\n  themeChanged(viewerId: $viewerId) {\n    theme {\n      index\n      name\n      primary\n      dark\n      light\n    }\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '94925d6c5141d97fe579f0c5c0f6aba0';
module.exports = node;
