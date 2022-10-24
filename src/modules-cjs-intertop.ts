// ----------- Common JS Intertop
const fs = require('fs');
// ===> namespace import
import * as fs from 'fs';
// -----------

////////////////////////////////////////////////////////
// @filename: fruits.ts
//This module can only be referenced with ECMAScript imports/exports by turning on the 'esModuleInterop' flag and referencing its default export.
function createBanana() {
  return { name: 'banana', color: 'yellow', mass: 183 };
}

// equivalent to CJS `module.exports = createBanana`
export = createBanana;
////////////////////////////////////////////////////////
// @filename: smoothie.ts

import * as createBanana from './fruits';

// ---- 2 -----
import createBanana = require('./fruits');
const banana = createBanana();

// Importing non-ts things
// when you use bundlers

//
import inm from './file.png';
/**
 * we need module declarations for
 * importing all that
 */
