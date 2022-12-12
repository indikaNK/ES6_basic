"use strict";
let myset = new Set();
myset.add(1);
myset.add(2);
myset.add(3);
myset.add(1);
myset.add('hi');
let ob1 = {};
let ob2 = {};
myset.add(ob1);
myset.add(ob2);
console.log(myset);
console.log(myset.size);
myset.delete('hi');
console.log(myset.size);
// let newset = new Set([1,2,3,4,5]).add(6).add(7).add('hello');
console.log(newset.size);
newset.delete(7);
console.log(newset.size);
//weak set
console.log("weak set");
let set = new WeakSet();
let key = {};
set.add(key);
console.log(set.has(key)); // true
//key = null  //size become 0
