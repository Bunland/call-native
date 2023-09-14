pub export fn sum(a: i32, b:i32) i32 {
    return a + b;
}

pub export fn sub(a: i32, b: i32) i32 {
    return a - b;
}

pub export fn mul(a:i32, b:i32) i32 {
    return a * b;
}

pub export fn div(a:i32, b:i32) i32 {
    return @divTrunc(a, b);
}