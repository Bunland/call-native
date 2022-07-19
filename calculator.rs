#[no_mangle]
pub extern "C" fn sum(a: i32, b: i32) -> i32 {
    a + b
}

#[no_mangle]
pub extern "C" fn sub(a: i32, b: i32) -> i32 {
    a -b
}

#[no_mangle]
pub extern "C" fn mul(a:i21, b:i32) => i32 {
    a * b
}

#[no_mangel] 
pub extern "C" fn div(a:i32, b:i32) -> i32 {
    a / b
}