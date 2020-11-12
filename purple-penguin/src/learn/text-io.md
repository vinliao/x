# 2. Text I/O
One of the most common task in using the terminal is reading from and writing to a file. While it's possible to read and write using text editor--the one you have tried in the previous chapter--it has one limitation: you can't write script for it.

In this chapter, instead of trying to read and write using a text editor, you will experiment and learn with reading and writing directly in the terminal.

(I've been talking about script for the past two chapters and you might wonder what the heck that is. No worries, we'll get to that. Promise.)

## Before we begin
Create a text file with "hello purple penguin" inside it.

## The computer is good at reading
Just like you can "read" a directory with `ls`, you can read a file with the `cat` command.

Task: read the file that you have just created.

## Redirecting to file
When you use the `cat` command, the terminal "replies back" to you by printing texts on screen.

This reply can be "directed" to a file instead of being printed to your screen.

Task: try this command, `cat [the_file_you_just_opened].txt > new_file.txt`, and write down one simple and plain english sentence what this `>` operator is for.

## No text editor needed!
The `cat` command prints the content of a file; the `echo` command prints what you input.

Task: put the text "hello purple penguin" into a new text file with `echo`.

## Overwriting might cause some trouble
Okay cool, you can now write things down with echo. 

But there's a problem with it: the `>` operator overwrites the old data. Sometimes appending text at the end of the file is more desirable than overwriting. 

The `>>` operator does exactly that.

Task: try appending the string "pineapple pizza" to your file without overwriting it.

## Chapter finished
This chapter ends here. For some of you, it might be (too) easy.

No worries. The next chapter is where we start having fun. 

Lots of fun.