use rand::prelude::random;

fn add(x: i32, y: i32) -> i32 {
    x + y
}

fn add_random(x: i32) -> i32 {
    let y: i32 = random();
    x + y
}

fn strange_add(x: i32, y:i32) -> i32 {
    if x + 3 <= 10 {
        x + y
    } else {
        x + 3
    }
}

fn five() -> i32 {
    let five = 5;
    five
}

fn main() {
    println!("Hello, world!");
    println!("Result of add: {}", add(five(), five()));
    println!("Five is {}", five());
    println!("Strange add {}", strange_add(3, 55));
    println!("Random add {}", add_random(5));
}