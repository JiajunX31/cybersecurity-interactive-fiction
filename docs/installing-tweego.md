# Installing Tweego

## Windows

On most versions of Windows, you can use [this installer](https://github.com/ChapelR/tweego-installer/releases) to set up Tweego instead of installing it manually. If you cannot use said installer or prefer to set it up manually, carry on with these instructions.

Installing Tweego globally is probably your best bet.  You can also install it locally, which has some benefits.  I won't cover the latter right now, but it may be added in the future.

These instructions are for Windows 10.  Windows 7 follows a similar process, but you'll need to add to the path variable manually.  This guide may help you get started on other operating systems, too.

### Step 1: Download Tweego

![alt text](https://i.imgur.com/VhjWCad.png)

You can grab both Tweego and a collection of Twine 2 formats from [Tweego's site](http://www.motoslave.net/tweego/).  You may need to update some of the story formats in the collection.  Regardless, download both and unzip them.

### Step 2: Find a home for Tweego

You can put Tweego anywhere, but the simplest places that are closest to your main drive's root are probably best.  I usually put my stuff right on C.

![alt text](https://i.imgur.com/zExCubX.png)

I create a folder called `tweego`, then place the tweego binary and the `story-formats` folder inside it.

![alt text](https://i.imgur.com/BEMfQaw.png)

Just to be safe about it, make sure that the inside of the `story-formats` folder looks something like this.

![alt text](https://i.imgur.com/8skfhb4.png)

### Step 3: Adding Tweego to you PATH

Next we'll need to add Tweego to out PATH environment variable.  You'll need to go to the `System` section of your control panel.  You can search for it.  In the picture below, it's the second option.

![alt text](https://i.imgur.com/BWA8QDF.png)

Go to `advanced system settings`.

![alt text](https://i.imgur.com/kjGOVGb.png)

Click `environment variables` on the bottom right.

![alt text](https://i.imgur.com/jmOwmFa.png)

Under `system variables` at the bottom, find `Path`.  Highlight it and press `edit`.

![alt text](https://i.imgur.com/HTS76WV.png)

On the resulting screen, click `new` on the top right.

![alt text](https://i.imgur.com/6C69SoU.png)

Type in the path to the folder containing tweego.  If you did this like I did, you'll type in `C:\tweego\`.

![alt text](https://i.imgur.com/7rDJ22z.png)

Click OK when you're done, but don't close the Environment Variables window yet!

### Step 4: Add the TWEEGO_PATH variable

This step is optional but recommended.  You may as well do it while you're here to prevent potential headaches later.

Back in the Environment Variables window, click `New`.

![alt text](https://i.imgur.com/LnZ3chF.png)

Set the variable name to `TWEEGO_PATH` and the value to the path that leads to your `story-formats` folder.  If you set it up the same way I did, that path will be `C:\tweego\story-formats`

![alt text](https://i.imgur.com/vJrHaLe.png)

### Step 5: Testing Tweego

Open a command prompt and type `tweego`.  If the command is unrecognized, something was messed up, otherwise, an explanation of tweego should print out.  Type in `tweego --list-formats` to make sure you've installed all the formats correctly and set up `TWEEGO_PATH` correctly.  It should display all the formats you have in your `story-formats` directory.

## MacOS

Although this approach was tested on a Mac, it should work on other *nix operating systems as well.

The recommended way to install Tweego on MacOS is building from source.  This is a bit more involved than the Windows installation, but it's not too bad.  

First, you need to have [go](https://go.dev) installed on your computer. And then you can follow the instructions provided by [tweego](https://github.com/tmedwards/tweego) to build from source. 

To make `tweego` accessible from anywhere, you need to add the path to the `tweego` binary to your `PATH` environment variable. You can do this by adding the following line to your `~/.bashrc` or `./zshrc` file dependeing on which shell you are using:

```bash
echo 'export PATH=$PATH:/path/to/tweego' >> ~/.bashrc && source ~/.bashrc # for bash
echo 'export PATH=$PATH:/path/to/tweego' >> ~/.zshrc && source ~/.zshrc # for zsh
```

Now you have the tweego compiler, you may need to manually download some story formats from [here](https://github.com/ChapelR/tweego-installer/releases). You can choose either format of the compressed file as long as you can unzip it.

![alt text](https://i.imgur.com/25gpDfT.png)

Once you unzip the file, you are able to extract the story formats from `tweego-installer-x.x.x/pack/story-formats`

![alt text](https://i.imgur.com/8MMZpHa.png)

![alt text](https://imgur.com/aS1zLQu.png)

You can copy the `story-formats` folder and paste it in the under the `tweego` directory.

To test if `tweego` is installed correctly and you have valid story formats, you can run `tweego --list-formats` in your terminal. If you see a list of story formats as the following, then you are good to go.

```bash
$ tweego --list-formats

Available formats:
  ID                     Name (Version) [Details]
  --------------------   ------------------------------
  chapbook-1             Chapbook (1.0.0)
  harlowe-1              Harlowe (1.2.4)
  harlowe-2              Harlowe (2.1.0)
  harlowe-3              Harlowe (3.1.0)
  paperthin-1            Paperthin (1.0.0) [proofing]
  snowman-1              Snowman (1.4.0)
  snowman-2              Snowman (2.0.2)
  sugarcube-1            SugarCube (1.0.35)
  sugarcube-2            SugarCube (2.35.0)
```
