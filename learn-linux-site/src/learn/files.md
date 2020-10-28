# 1. Basic file navigation

As a computer user, you might already know how to navigate files and folders in your computer. Copy, paste, move, delete, create, and all that jazz. 

Now it's time to do it in terminal.

## Jump and look around
Explore your computer's directories with terminal. 

Use the `cd` command to change directory and `ls` to list things in a directory.

Task: list all the files of your home directory.

## Your helpful companion
There is one faithful friend that will help you on your linux journey: the `man` command.

Typing `man some_command_name` will give you the instruction manual for some_command_name

Task: list all the hidden files in your home directory. Reading the instruction manual for `ls` might help.

## Some folder creation action, baby
Not only the terminal can be used to jump folders, it can create one.

The command is `mkdir`

Task: create a folder called "red-apple" on your home directory.

## Beware of the unseen
In unix system, any file or folder that starts with a dot (".") is hidden.

Do you notice that when you list the hidden files and folders just now, there are files with a dot in front of it? Yes, it's the dot that makes it hidden.

Task: `cd` into the folder you've just created. Create two hidden folders where one is hidden and one is not.

Bonus point if you can do it in one command.

## Empty folder is no fun
Time to create files. 

The `touch` command can be used to create files.

Task: create a txt file called in the normal folder (not the hidden one) and a hidden txt file in inside the hidden folder.

Bonus point if you can do it in one command.

## Time to write
Okay, now that the files are there, time to write some stuff in it.

You can write things down using a text editor called nano. It's built-in in most (if not all) linux distribution. Use the `nano` command to use nano.

There are few other popular text editor not mentioned here: vim and emacs. You can read around the internet on what those things are. Just a warning: vim is not beginner friendly.

Remember, there is no rule. You can use any text editor you want so long as the task is finished.

Task: write a "hello world!" text one of your txt you have just created.

## Making some movement
Of course, learning about files isn't complete without copy, paste, and move.

You can use the `cp` command to copy and `mv` to move. Remember, the `man` comand is your best friend.

Task 1: copy the txt file you have just written outside to "red-apple" folder.

// maybe insert some tree here

Task 2: move that freshly copied txt file to the hidden folder.

// maybe also insert some tree here

## And finally, delete
You have learned the basics of file and folder navigation, and the folder is (kinda) useless now.

Task: delete red-apple.

Bonus point if you can do it in one command.