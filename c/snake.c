#include <stdio.h>
#include <stdlib.h>
#include <time.h>

// steps
// 1. create n*n board
// 2. place food randomly on board
// 3. have a snake with len 2 that is placed randomly
// 4. every second, it ticks and the snake moves
// 5. yada yada yada

int main(){
	int choosenMenu = 0;
	printf("Welcome to The Snake Game\n");

	// I don't know why && works but not ||
	while (choosenMenu != 1 && choosenMenu != 2){
		printf("\n");
		printf("Press 1 to start\n");
		printf("Press 2 to quit\n");
		printf("Your choice: ");
		scanf("%d", &choosenMenu); // placed in address?
	}

	if (choosenMenu == 1) {
		// this is where the meat is
		const int BOARD_SIZE = 10;
		int board[BOARD_SIZE][BOARD_SIZE];

		// board starts with 0
		// 0 = empty space
		// 1 = snake
		// 2 = food
		for(int i = 0; i < BOARD_SIZE; i++){
			for(int j = 0; j < BOARD_SIZE; j++){
				board[i][j] = 0;
			}
		}

		// place food randomly, but snake at near bottom left
		// snake at first moves to right direction
		// it seems like time(0) outputs unix time
		srand(time(0));
		int randomFoodX = rand() % BOARD_SIZE;
		int randomFoodY = rand() % BOARD_SIZE;
		int snakeStartX = 2;
		int snakeStartY = 2;
		board[randomFoodX][randomFoodY] = 2;
		board[snakeStartX][snakeStartY] = 1;

		bool lose = false;
		while(!lose){
			// print board
			// make one move depending on the direction
			printf("infinite loop!\n")
		}

	} else if (choosenMenu == 2 ) {
		printf("\n");
		printf("-----\n");
		printf("See you again!\n");
		printf("-----\n");
		return 0;
	} else {
		printf("Shoot, there's an error in the code!");
		exit(1);
	}
	return 0;
}
