/**
 * @flow
 * @relayHash 9ca2d9649e8bfd9c32097088b9f12084
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type changeThemeInput = {|
  index?: ?number,
  clientMutationId?: ?string,
|};
export type TodoContainerChangeThemeMutationVariables = {|
  input: changeThemeInput
|};
export type TodoContainerChangeThemeMutationResponse = {|
  +changeTheme: ?{|
    +theme: ?{|
      +index: ?number,
      +name: ?string,
      +primary: ?string,
      +dark: ?string,
      +light: ?string,
    |}
  |}
|};
export type TodoContainerChangeThemeMutation = {|
  variables: TodoContainerChangeThemeMutationVariables,
  response: TodoContainerChangeThemeMutationResponse,
|};
*/


/*
mutation TodoContainerChangeThemeMutation(
  $input: changeThemeInput!
) {
  changeTheme(input: $input) {
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
    "name": "input",
    "type": "changeThemeInput!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "changeTheme",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input"
      }
    ],
    "concreteType": "changeThemePayload",
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
    "name": "TodoContainerChangeThemeMutation",
    "type": "RootMutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "TodoContainerChangeThemeMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "params": {
    "operationKind": "mutation",
    "name": "TodoContainerChangeThemeMutation",
    "id": null,
    "text": "mutation TodoContainerChangeThemeMutation(\n  $input: changeThemeInput!\n) {\n  changeTheme(input: $input) {\n    theme {\n      index\n      name\n      primary\n      dark\n      light\n    }\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '2c16d1687034b8e7057d897f857b3cee';
module.exports = node;
