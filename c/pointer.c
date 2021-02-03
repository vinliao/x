#include <stdio.h>

void pointer(int a){
    // a is like a person
    // and the pointer *p is like
    // the home which a lives

    int *p = &a;
    printf("Old value: %d\n", *p);
    printf("The address of old value: %d\n", p);
    // this code is like changing the content
    // of the address.
    // p is the house; *p is the content of the house
    *p = 303;
    printf("New value: %d\n", *p);
    printf("Address of new value: %d\n", p);
}

// this is not the immutable kind where everything is "const"
// but what is **The Function** of pointer? It seems like
// I haven't yet figured out the usefulness of it

// Edit: I still haven't understood the usefulness of indirectly
// touching the variables with pointer instead of just doing
// the operation on the variable itself.
void doubleValue(){
    void doubleValueWithPointer(int* p){
        *p = *p * 2;
    }

    int a = 37;
    doubleValueWithPointer(&a);
    printf("%d\n", a);

    // doing things without pointer
    int doubleValueNoPointer(int x){
        return x * 2;
    }

    int b = 85;
    b = doubleValueNoPointer(b);
    printf("%d\n", b);
}

// the value of an array is the memory of the first index of that array
void arrayIsPointer(){
    int arr[5] = { 5 , 10, 15, 20, 25 };
    for(int i = 0; i < 5; i++){
        printf("%d has the value of %d\n", arr + i, *(arr + i));
    }
}

// a little experiment to see whether memory changes when things happen
void changedMemory(){
    // with pointer
    printf("Example with a with pointer\n");
    int a = 5;
    int *aPoint = &a;
    printf("Memory is       %d\n", aPoint);

    *aPoint += 5; 

    printf("Memory is still %d\n", aPoint);
    printf("Value is now    %d\n", a);

    // without pointer
    printf("Example with b without pointer\n");
    int b = 5;
    printf("Memory is       %d\n", &b);

    b++;

    // eh I thought this &b would change...
    printf("Memory is still %d\n", &b);
    printf("Value of b is   %d\n", b);

    // different variable
    printf("Example with c without pointer\n");
    int c = 5;
    printf("Memory is       %d\n", &c);

    int d = c + 3;

    // wow &d is 4 bytes away from &c!
    printf("Memory is       %d\n", &d);
    printf("Value of d is   %d\n", d);
}

// not only a variable can be used to store a memory of a value,
// it can be used to store the memory that holds memory!

// I haven't quite understand the double asterisk here though
void storeAnotherMemory(){
    int a = 5;
    int *p = &a;
    int **q = &p;
    int ***r = &q;

    printf("%d\n", p);
    printf("%d\n", *p);

    printf("%d\n", q);
    printf("%d\n", *q);
    printf("%d\n", **q);

    printf("%d\n", r);
    printf("%d\n", *r);
    printf("%d\n", **r);
    printf("%d\n", ***r);
}

void circularPointing(){
    int a;
    int *p = &a;
    int **q = &p;
    // haha this doesn't work, not sure why I'm even doing this
    // a = &q;
}

void whatVariableIs(){
    int a = 5;

    // this is what a variable is
    // so variables are highler level abstraction of raw pointer

    // Let's suppose the addres of a is 123456 in memory
    // when this program uses a, what it actually say is
    // "please give me the value of address 123456."
    // if this is really true, then... everything is a pointer!
    printf("%d\n", *(&a));
}

int main(){

    doubleValue();
    return 0;
}