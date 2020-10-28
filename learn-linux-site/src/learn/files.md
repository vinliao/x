# 1. File navigation

As a computer user, you might already know how to navigate files and folders in your computer. Copy, paste, move, delete, create, and all that jazz. 

Now it's time to do it in terminal.

"Why bother doing it in terminal if I can do it in my file explorer?" you might ask. Doing things in terminal gives you a new superpower: you can create programs/scripts to create, read, delete, update, copy, paste, move files in your computer.

(Plus, doing things in terminal makes you look cool.)

Let's jump right in.

## Jump and look around
Explore your computer's directories with terminal. 

Use the `cd` command to change directory and `ls` to list things in a directory.

Task: list all the files of your home directory.

## Your helpful companion
There is one faithful friend that will help you on your linux journey: the `man` command.

Typing `man some_command_name` will give you the instruction manual for some_command_name

Task: list all the hidden files in your home directory. Reading the output of `man ls` might help.

## Some folder creation action, baby
Not only the terminal can be used to jump folders, it can create one.

The command is `mkdir`

Task: create a folder called "red-apple" on your home directory.

## Beware of the unseen
In unix system, any file or folder that starts with a dot (".") is hidden.

Did you notice that when there was files with a dot in front of it when you listed the hidden files and folders? Those files and folders are hidden because of it.

Task: `cd` into red-apple. Create two hidden folders where one is hidden and one is not.

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

## Copy pasta
Of course, learning about files isn't complete without copy and paste.

You can use the `cp` command to copy.

Task: copy the txt file you have just written outside to red-apple folder.

// maybe insert folder tree here

## Time to create some movement
The move operation, which is done using the `mv` command, is probably the most confusing. This command is not only used for moving files, but for renaming! Remember, the `man` command is your best friend.

Task: move that freshly copied txt file to the hidden folder and rename it so that it's hidden.

// maybe insert folder tree here

## Bulk movement
You know the `ctrl+a` + `ctrl+c` + `ctrl+v` command in file explorer right? That's really handy, and now you have to do it using the terminal.

Task: In the home directory, create another folder (the same place you created red-apple). Copy (or move, if you wish) all the content inside red-apple--the normal and hidden folder--to this newly created folder.

Huge bonus point if you can do it in one command.

// maybe insert folder tree here

## Throw it to the trash
You have learned the basics of file and folder navigation, time to clean up.

The `rm` command can be used to delete files and folders.

Task: delete red-apple and the newly created folder.

## Chapter finished
Now that you have arrived here, you have the basic ability to manipulate and manage files and folders. The more you use it, the more it becomes second nature.

And perhaps there will come a point where you prefer to use terminal than the file explorer.