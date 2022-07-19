# Bun-FFI-Rust-and-Zig
A calculator made with "Rust" and "Zig", consumed with Bun.js


To compile with Zig:

> zig build-lib calculator.zig -dynamic -OReleaseFast

To compile with Rust;

> rustc --crate-type cdylib calculator.rs
