import { dlopen, suffix, FFIType } from "bun:ffi";

const filename: string = `libnumbers.${suffix}`;
const location: URL = new URL(filename, import.meta.url);

const { symbols } = dlopen(location.pathname, {
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
  divide: {
    args: [FFIType.i32, FFIType.i32],
    returns: FFIType.i32,
  },
});

// m = maths
const m = symbols;
export { m }