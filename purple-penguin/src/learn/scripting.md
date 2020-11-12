# 3. Scripting
As promised, you'll explore scripts in this chapter.

"But... what the heck is a script?" you might ask. Script is a program that runs multiple commands consecutively.

Let's take an example: if I want to tell a my computer to copy a file and append a text into it, I'll write a script which says this.

"Hello Mr. Computer, please run `cp ~/.somehiddenfolder/nice_text.txt ~/myfolder` then run `echo "appended text" >> ~/myfolder/nice_text.txt`. Thank you very much."

Whenever I want to copy a file and append text into it, I can simply call that script instead of having to re-write all these commands again. 

And the power of scripting lies in the fact that you can use any command you want, as much as you want. You can do all sorts of crazy things even only with the basic commands learned in the previous two chapters.

Let's go straight to it, shall we?

## man... yes introduce man here because things are getting complicated
When you buy a piece of electronic, there's usually a user's manual inside.

It turns out the commands in linux also has its manual. All the commands you have learned in the first two chapters has its own manual, and you can access it with the `man` command.

Task: try `man ls` and see what happens. You can also look up the manual for other command(s) that you have learned if you wish.

## simple txt
Telling a computer to execute a command is easy: you just type it in a terminal. But how do you tell a computer to execute a file that contains commands?

Well, perhaps you can try putting those commands in a .txt file.

Task: create a .txt file and write two `echo` commands separated by an enter. "Why `echo`?" you might ask. Simplicity reason. You can write any other commands if you wish, but it's best to keep things simple for now.

## "Computer, run this!"
Here's a problem: if you try to run that .txt file, the computer will open a text editor instead of treating it as a set of commands to be executed.

So how do you tell a computer to execute the content of this .txt file?

It turns out there is something you can add at the very top of the file that makes this possible, and that thing is `#!`, which is usually called shebang. 

By adding a shebang at the very top of the file, the computer will treat it as something to be executed rather than read.

But wait... there's one missing piece. Blah blah blah

Task: make the .txt file executable with bash.

Hint: if you are really lost, here's a simple example looks like: blahblahblah

## add some chmod
Now that you have an executable, try running it.

You can do so by running `./[your_file_name].txt`

Hooraayy--no? Of course no. There's still one step left.

<!-- ## alias? yes. alias. add some alias here -->

## Solidification
Now that you have created a dummy script. Time for some real action.

Task: create a script that does abc.

Massive bonus point if you use no hint. The more you do it yourself (and stumble along the way), the more you learn.

## Your own problem (optional) rewrite this.
Let me share with you an example of a script I did. 

One of the things I do repeatedly is to move a freshly downloaded `.epub` files into a dropbox folder. Everytime I downloaded an `.epub`, I would have to manually move it... until I scripted it.

Now all I have to do is to fire up a terminal and run one command, and move all `.epub` files to my dropbox folder.

There is no task in this section.

I just want to invite you to sit back and observe your computer usage: do you have task(s) that you repeatedly do? Something that bores you to tears?

If a specific problem comes to mind, perhaps you might want to use what you have learned and discovered to script it.

But if nothing comes to mind, no worries. You can go to the next chapter if you wish.

## Chapter finished
If you have arrived here, you are a young terminal wizard now.

You can do lots of cool things with the things you have learned in the previous three chapters.

But perhaps you are hungry for more. If that's the case, then move on to the next chapter.