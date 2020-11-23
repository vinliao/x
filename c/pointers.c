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
void doubleValue(int* p){
    *p = *p * 2;
}

int main(){
    int a = 37;
    int *p = &a;
    doubleValue(p);
    printf("%d\n", a);
    return 0;
}