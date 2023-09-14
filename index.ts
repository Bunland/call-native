import { dlopen, FFIType, suffix } from "bun:ffi";

const path = `./libcalculator.${suffix}`;

const lib = dlopen(path, {
  sum: {
    args: [FFIType.i32, FFIType.i32],
    returns: FFIType.i32,
  },
  sub: {
    args: [FFIType.i32, FFIType.i32],
    returns: FFIType.i32,
  },
  mul: {
    args: [FFIType.i32, FFIType.i32],
    returns: FFIType.i32,
  },
  div: {
    args: [FFIType.i32, FFIType.i32],
    returns: FFIType.i32
  }
});

console.log(lib.symbols.sum(10, 2));
console.log(lib.symbols.sub(10, 2));
console.log(lib.symbols.mul(7, 2));
console.log(lib.symbols.div(10, 2));

//