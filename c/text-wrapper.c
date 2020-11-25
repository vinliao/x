#include <stdio.h>
#include <stdlib.h>

// protonmail doesn't have the ability to wrap lines
// I want to wrap my lines in 72 chars

// and create a make file to "install" it in /usr/local/bin

// input: stdin of raw text
// output: text
// end result: progaramName fileName spits the formatted output 

int main(int argc, char *argv[]){
    int counter = 0;
    int deviation = 10;
    int maxLength = 75;
    char ch;

    if(argc > 1){
        // text input
        FILE *fp;

        // argv[1] is filename from argument
        fp = fopen(argv[1], "r");

        if(fp == NULL){
            printf("File not found.\n");
            exit(1);
        }

        while((ch = fgetc(fp)) != EOF){
            printf("%c", ch);
            counter++;

            if(counter >= maxLength - deviation && ch == ' '){
                printf("\n");
                counter = 0;
            } else if (ch == '\n') {
                counter = 0;
            }
        }

        fclose(fp);
        return 0;
    } else {
        // read from stdin
        while((ch = getchar()) != EOF){
            printf("%c", ch);
            counter++;

            if(counter >= maxLength - deviation && ch == ' '){
                printf("\n");
                counter = 0;
            } else if (ch == '\n') {
                counter = 0;
            }
        }

    }
}