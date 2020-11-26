#include <stdio.h>

int main(){
    int arr[3];
    arr[0] = 1;
    arr[1] = 999;
    
    // wow sizeof actually returns the total bit of the array!
    // by dividing it with the total bit of one element,
    // it will return the total array length
    printf("%d\n", sizeof arr);
    printf("%d\n", arr[0]);

    for(int i = 0; i < sizeof arr / sizeof arr[0]; i++){
        printf("The value is %d\n", arr[i]);
    }
    return 0;
}