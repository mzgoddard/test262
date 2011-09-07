// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * If Type(Primitive(x)) is not String or Type(Primitive(y)) is not String, then operator x > y returns ToNumber(x) > ToNumber(y)
 *
 * @id: S11.8.2_A3.1_T2.7;
 * @section: 11.8.2;
 * @description: Type(Primitive(x)) is different from Type(Primitive(y)) and both types vary between String (primitive or object) and Null;
 */

//CHECK#1
if ("1" > null !== true) {
  $ERROR('#1: "1" > null === true');
}

//CHECK#2
if (null > "1" !== false) {
  $ERROR('#2: null > "1" === false');
}

//CHECK#3
if (new String("1") > null !== true) {
  $ERROR('#3: new String("1") > null === true');
}

//CHECK#4
if (null > new String("1") !== false) {
  $ERROR('#4: null > new String("1") === false');
}
