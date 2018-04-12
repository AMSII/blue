# Terminal - An Introduction

## Lesson Here: https://bit.ly/2IOvLqu

### Learning Objectives
- Open apps and navigate your computer via terminal
- Summarize basic file system structure
- Explain the difference between relative and absolute pathing

##### Why this is important

Most users are accustomed to interacting with computers using GUI's (Graphical User Interfaces), however all computer interactions can be accessed through the command line/terminal. 

Many developers/tech people utilize the command line everyday to interact with applications efficiently and directly so it's essential to master the very basic terminal commands along with a sound grasp on basic file system.

##### How we will learn this

- Practice with CLI (Command Line Interface) commands
- Discuss pathing

### What is a shell?

Shell is simply a type of command line program, which contains a very simple, text-based user interface enabling us to access all of an operating system's services. It is, very simply, a program that accepts text as input and translates that text into the appropriate functions that you want your computer to run

### Terminal

- Launch the command prompt off terminal.
	- ⌘ (Command) + Space
	- "*Terminal*"
	- `Enter`

- When terminal launches, it will innately start off your computer's root directory (whatever the computer is named off of).

### do *NOW*

Copy (Command-C) this line below, and then paste it into your terminal.  Then, press RETURN.

```
ln -s /Applications/Sublime\ Text.app/Contents/SharedSupport/bin/subl /usr/local/bin/sublime
```

### What is root?

The *root directory* is the first or top-most directory in a hierarchy. It can be likened to the trunk of a tree, as the starting point where all branches originate from.

<img src="images/term2.png">

If you want to know if you're in your root directory, type...

`pwd`.  It should say `/users/` then your username.

If you need to navigate to your root directory...

`cd ~`  

### CLI Commands

- Check where you are on your command line
`pwd` : print working directory

- Let's open another tab inside our terminal
`⌘-T`

- Close current tab
`⌘-W`

- Let's execute a process from our terminal. Let's use the ping utility.

For example...

`ping 127.0.0.1`

```
Q: What is ping?
```

[What is ping?](https://en.wikipedia.org/wiki/Ping_(networking_utility))

-----

- Note that ping continues to run, we can stop the execution of a process off our current tab...
`Ctrl-C`

- Let's quit terminal
`⌘-Q`

-----

#### Basic Commands

• `pwd` = "Print Working Directory" <br>
• `cd` = "Change directory"<br>
• `ls` = list contents of directory<br>
• `ls -la` = Detailed list of contents<br>
• `mkdir` = Create directory (Folder)<br>
• `touch` = Create file<br>
- `rm` to delete a file <br>
- `rm -r` to remove a directory <br>


##### Follow the steps:

Try to see what's happening as you type through these commands:

- Open terminal
- `cd ~` 
- `pwd` to confirm you're in your root.
- `ls` to see the contents of where you're currently located
- `cd documents` to change the directory to the "Documents" folder 
- `pwd` to confirm your location
- `mkdir test_folder` to create a new folder inside of "Documents" called "test_folder"

-----

##### Exercise 

- Using just terminal and the command line, do the following.
- Feel free to use the reference below.

[CLI Cheatsheet](http://www.git-tower.com/blog/command-line-cheat-sheet/)

- Open Terminal
- `pwd` to confirm you're in your root
- If you're not in your root, `cd ~` to get there.
- Change directory to `/Desktop`
- Make a new directory on your desktop called `sample_directory`
- `cd` into that directory
- Make a new file called sample_text using the following command `touch sample_text.txt`
- Make another directory called `inside_folder`
- CD into the newly created `inside_folder`
- CD out of this folder up one level using `cd ../`
- CD up another level by using `cd ../` again
- Which directory are you now in? Confirm using `pwd`

### Pathing

Pathing refers to method in which files/folders are recognized within a file system structure.

### Absolute Pathing

Imagine this file structure.

```
root
-----------------
	> desktop
		----------------
		> project_one
			> index.html
			> images
				> image1.jpg
				> image2.jpg
			> css
				> styles.css
			> js
				> scripts.js
		-----------------
		> papers
			> essay.docx
			> poem1.docx
	-----------------
	> music
	-----------------
	> documents
	-----------------
```

An absolute path is defined as the specific location of a file or folder from the `root` directory. 

The absolute path for my `project_one` folder would be `cd /users/alee27/desktop/project_one`


- Think of absolute pathing as the EXACT "address" for a file/folder.
- One advantage is that it can be accessed from anywhere since I am explicitly stating the exact location of the file/folder.

What would be the absolute path for the `images` folder?

### Relative Pathing

A relative path is a reference to a file or folder **relative** to the current position, or the present working directory (`pwd`).

It's like giving directions to Central Park without mentioning a specific address. Once you go outside the building, take a left and go up 10 blocks.


Using the same file structure from above...

```
root
-----------------
	> desktop
		----------------
		> project_one
			> index.html
			> images
				> image1.jpg
				> image2.jpg
			> css
				> styles.css
			> js
				> scripts.js
		-----------------
		> papers
			> essay.docx
			> poem1.docx
	-----------------
	> music
	-----------------
	> documents
	-----------------
```

Using "Relative Pathing", we could reach the "Desktop" directory by merely typing...

`cd desktop`

This only works if we're starting from your `root` directory.  How would you make sure you're there?

##### Brief Recap

`cd desktop` is the same as `cd /users/alee27/desktop`.  As you can tell, typing one version is a lot easier than typing the other.

-----

