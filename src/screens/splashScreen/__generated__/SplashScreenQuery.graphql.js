/**
 * @flow
 * @relayHash c2df24c4280ccf28fa4398ee51f96a01
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type SplashScreenQueryVariables = {||};
export type SplashScreenQueryResponse = {|
  +viewer: ?{|
    +id: ?string,
    +email: ?string,
  |}
|};
export type SplashScreenQuery = {|
  variables: SplashScreenQueryVariables,
  response: SplashScreenQueryResponse,
|};
*/


/*
query SplashScreenQuery {
  viewer {
    id
    email
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "viewer",
    "storageKey": null,
    "args": null,
    "concreteType": "User",
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
        "name": "email",
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
    "name": "SplashScreenQuery",
    "type": "RootQuery",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": (v0/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "SplashScreenQuery",
    "argumentDefinitions": [],
    "selections": (v0/*: any*/)
  },
  "params": {
    "operationKind": "query",
    "name": "SplashScreenQuery",
    "id": null,
    "text": "query SplashScreenQuery {\n  viewer {\n    id\n    email\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '17d10e16e3a5ea54efbee9ddcd8328c6';
module.exports = node;
