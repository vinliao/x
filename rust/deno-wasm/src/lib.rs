#[no_mangle]
pub extern fn square(x: u32) -> u32 {
    x * x
}

#[no_mangle]
pub extern fn triple(x: u32) -> u32 {
    x * 3
}