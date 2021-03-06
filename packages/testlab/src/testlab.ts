// Copyright IBM Corp. 2013,2017. All Rights Reserved.
// Node module: @loopback/testlab
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT

/// <reference path="../should-as-function.d.ts" />

const shouldAsFunction: Internal = require('should/as-function');
import sinon = require('sinon');
import supertest = require('supertest');

shouldAsFunction.use((should, assertion) => {
  assertion.addChain('to');
});

export const expect = shouldAsFunction;
export {sinon};
export {supertest};
