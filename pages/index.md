---
layout: page
title: simple site
tagline: Easy websites with GitHub Pages
description: Minimal tutorial on making a simple website with GitHub Pages
---

# CAPyLE installation guide

## University of Sheffield Desktops

### Software requirements
Make sure you have Anaconda x.y.z - Python 3.x installed on your computer, and even if you do, it might be best to install the latest version available from the software centre. Check your version of Python & anaconda with:
```
$ python --version
```

Potentially troublesome versions:
* Python 3.4.3 :: Anaconda 2.2.0
  * In this version some modules are compiled in the wrong order, and CAPyLE cannot run. To fix this run:
  ```
  $ pip install --upgrade pip && pip install --upgrade matplotlib
  ```
* Python 3.5.1 :: Anaconda 4.1.1
  * All modules compiled correctly and so CAPyLE should be runnable.
  * Sometimes requires a re-install from the software center - the broken installation will not be able to import modules correctly. To test if this is the case start an interactive prompt with
  `$ ipython`
  Then execute the command
  `import numpy as np`
  , which in a working installation will take about 0.5s, in a broken installation this will take much longer.
  * The conda package manager and pip package manager are not working in this installation, but you should not need to use them in this installation.

### Downloading CAPyLE

CAPyLE may be downloaded in two ways:

1. Downloading .zip
  The zip file may be downloaded from [MOLE](http://vle.shef.ac.uk) (or [github](https://github.com/pjworsley/capyle)) and must be unzipped into you U: drive. (It is also recommended that you download the .zip into your U: drive)

2. Cloning from [github](https://github.com/pjworsley/capyle)
  CiCS desktops can be extremely temperamental when it comes to unzipping files, and if you are stuggling to unzip or wish to use git, follow the instructions below:
  1. Install git from the software centre if not already installed
  2. Open git bash from the start menu
  3. Execute `git clone https://github.com/pjworsley/capyle [destination-folder]` where the destination folder is in your U: drive

### Running CAPyLE
1. Open command prompt for Anaconda from the start menu
2. Navigate to where you unzipped/cloned CAPyLE (on windows machines use the `U:` command to switch to the U drive then continue to use `cd` as normal)
3. Execute CAPyLE by either:
  4. `python main.py`
  5. `run.bat` or `run.sh` (Windows or Unix respectively)

___
___
## Installing CAPyLE on your own computer
It is extremely likely that the performance of this software will improve greatly if the software is installed on your own personal computer. This project has been designed to be cross platform, and has been tested on Windows/macOS/Linux. Below are the requirements and steps.

### Software requirements

#### Python 3.4 or above & the required packages
* For minimal hassle it is reccomended to install the latest version of [anaconda](https://www.continuum.io/downloads) for Python 3. This is a distribution of python with a large number of libraries installed, including those that are required for CAPyLE.

* If you would prefer to not install anaconda and instead configure your own Python installation:
  * Download [Python 3 from here](http://www.python.com/downloads) _or_ if you are using a Unix-like system then you may prefer to use a package manager (homebrew for macOS and apt/yum/dnf/pacman/... for Linux), making sure to install Python 3.4 or above.
  * Install the required libraries using `pip install [package-name]`:
    * numpy
    * matplotlib
    * pickle

### Downloading CAPyLE
CAPyLE may be downloaded in two ways:

1. Downloading .zip
  The zip file may be downloaded from [MOLE](http://vle.shef.ac.uk) (or [github](https://github.com/pjworsley/capyle)) and unzipped into a directory of your choice

2. Cloning from [github](https://github.com/pjworsley/capyle)
  1. Install git if not already installed
  3. Execute `git clone https://github.com/pjworsley/capyle [destination-folder]`

### Running CAPyLE:
1. Open your preferred terminal and navigate to the directory where you unzipped/cloned CAPyLE
3. Execute CAPyLE by either:
  4. `python main.py`
  5. `run.bat` or `run.sh` (Windows or Unix respectively)
