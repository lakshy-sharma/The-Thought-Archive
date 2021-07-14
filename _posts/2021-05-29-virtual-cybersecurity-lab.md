---
layout: post
title: "Creating a Virtual Cybersecurity Lab using Virtual Box"
date: 2021-05-29
author: "Lakshy Sharma"
---
<div style="text-align: center"><img width="150" height="150" src="/The-Thought-Archive/assets/media/Virtualbox-logo.png"></div>
<br><br>
For people who practice cybersecurity, it is often hard to find a place where we can practice our skills safely.<br>
In this article I will describe how to setup a virtual cybersecurity lab that is completely isolated from outside world using Virtual Box. You can use this lab to simulate a virtual network and practice without having any fear of actually disrupting real networks. The networks we will create can also be used for malware analysis and understanding how malware spreads on a real network without having to worry about damaging real world computers.<br>
<!--display-->
Points to Note:
1. Follow the links provided as you go, this will help you understand what is going on.
2. You must understand no software is perfect and hyper-visors can also be prone to attacks, before experimenting with a live malware make sure your version of software is immune. I have no responsibility in case something goes down (gets damaged). 

## Virtual Box.

The virtual box is a hyper-visor software which allows us to create virtual computers inside our real machines, the virtual machines created can be configured to be completely isolated from real world and can be used as secure sandboxes for experiments. Such isolated virtual machines can be used for malware analysis and can even be used for creating servers that are perfectly isolated from rest of the machine.<br>
In our case we will be using this software for creating 2 virtual computers inside our main computer and then we will be linking them together to create a virtual network of computers, a network that is completely isolated from real world.<br>

## Internal Networks.

Virtual box provides us a feature called 'The Internal Network', it is a feature that allows us to create a network of virtual computers inside the real machine which is completely isolated from the real world. These networks will only connect the virtual computers that we create and will be completely disconnected from outer world thus, making them a very safe place to practice cybersecurity skills and performing forensic analysis of malware samples.

## System Requirements.
- OS: Windows/Linux (I do not know if MacOS supports this software.)
- RAM: 8GB Recommended minimum, the more the better.
- Software: Oracle Virtual Box, Kali Linux image, Kioptrix Image.
- Internet Connection for Downloading softwares and OS. (Approx 4.5 GB)

Once we have completed all the requirements we can move ahead to creating our own cybersecurity lab.

## Step 1 : Downloading Virtual Box.

Go to the [Oracle Virtual Box Website](https://www.virtualbox.org/wiki/Downloads) and download the virtual box software which matches your host machine requirements.<br>
1. For Windows machines - Download 64bit.exe file.
2. For Ubuntu linux  machines - Download 64bit.deb file
3. For Fedora linux machines - Download 64bit.rpm file
_If you use some other OS I do not think you need my help here._

## Step 2 : Downloading Kali Linux and Kioptrix.

In the cybersecurity lab we need an attack machine which will be kali linux and we need a machine to use as a target which wil be a vulnerable server.<br>

### Attack Machines Download.

Download the [Kali Linux](https://www.offensive-security.com/kali-linux-vm-vmware-virtualbox-image-download/#1572305786534-030ce714-cc3b) OS image, you can follow the link and download the .ova file for virtual box, be careful NOT to download VM Ware images (usually in .7z format).<br>

### Vulnerable Server Download.

The website [Vulnhub](https://www.vulnhub.com/) has many vulnerable machines that you can download for practice and [Kioptrix](https://www.vulnhub.com/entry/kioptrix-level-1-1,22/) is the one we are looking for, you can visit the links provided and download using torrent or mirror (as you prefer).<br>

## Step 3 : Setting up Internal Network.

Once we have downloaded everything we are ready to go ahead and set up the lab.<br>
To make sure the lab is disconnected from the internet we will make use of the Virtual Box feature named [Internal Networks](https://docs.oracle.com/en/virtualization/virtualbox/6.0/user/network_internal.html).<br><br>

Before we move ahead I would strongly recommend a read on network basics.<br><br>

* We are going to setup an internal network which will dynamically assign IP address to the machines connected.
* To setup such a network which can dynamically assign IPs to machines we need to assign a "dhcp server" which has the responsibility to automatically assign IP addresses to different machines that will connect to our network. 
* What we are aiming to accomplish in below section is best described in 2 points.:
    - Creating a virtual network and assigning it a name.
    - Creating a dhcp server for the network using a command known as vboxmanage, this command is used to manage the virtual box settings.<br>

### Linux Users.

Open your linux terminal and type the following command.

    vboxmanage dhcpserver add --netname vlab --ip 10.10.10.1 --netmask 255.255.255.0 --lowerip 10.10.10.2 --upperip 10.10.10.250 --enable

The explanation to code.<br>
- vboxmanage - Command to control virtual box settings.
- dhcpserver add - Command to create a dhcpserver.
- --netname - Parameter to assign name to our Internal Network in this case the name given is "vlab" which you can change as per your needs.
- --ip - Assign an IP to our dhcp server here our choice is 10.10.10.1.
- --netmask - Give the netmask of the network, this is usually used to control how many ip addresses can be assigned in a network.
- --lowerip - Give the lower ip limit that our dhcp server can assign.
- --upperip - Give the upper ip limit that our dhcp server can assign (must be lesser than what your netmask allows, our netmask allows 256 IPs and 250 is a safe choice.).
- --enable - Enable our network and server.

### Windows Users

Open your command prompt and type th following command.

    vboxmanage dhcpserver add --netname vlab --ip 10.10.10.1 --netmask 255.255.255.0 --lowerip 10.10.10.2 --upperip 10.10.10.250 --enable

The explanation has been provided above.<br>

## Step 4 : Importing Machines and Setting Them Up.

In this section we will be setting up our attack and target machines.

### Setting up Kali Linux. (Attack Machine)

1. Open Virtual Box.
2. Go to : File -> Import Appliance
3. Select empty field named file and use the side button to browse and choose the OS you want to import.
4. Browse for your kali linux.ova file you downloaded and select it.
5. The system shows you recommended settings which you can change.
    * Change CPU cores to 3 and RAM to 2500MB.
6. Start the import by clicking on import button on lower left.
7. Once Kali linux linux is imported I suggest you should further adjust a few settings to access the internal network and isolate the machine. You can use some of my preferences for isolating and setting up the machine..
    * Go to audio and usb controller settings and disable Audio and USB Controllers. (For isolating machine physically)
    * Go to Network Settings and Change the Wireless adapter from 'NAT' to Internal Network and name of network must be 'vlab'.
        - Here you can change this setting back to NAT whenever you want to access the open internet.
6. Now come back and start the kali linux machine.

The machine should start up and once it is loaded you can put in the default user and password (kali,kali) for logging into the kali linux.<br>
Once you are logged in open the terminal by using Ctrl+Alt+T and type the command : 'ip a'.<br>

From the command output you will be able to notice the Ethernet setting represented by eth0, it shows what IP has been assigned to you by the dhcpserver.<br>

You can also check if internet is available to opening firefox and trying to access google, it *MUST* give an error as page not reachable. This error means you are disconnected from internet.

### Setting up Kioptrix. (Vulnerable Machine)

1. Open Virtual Box.
2. Go to : Machine -> New Machine.
3. Write the name of machine 'Kioptrix Level 1'
4. The operating System is Linux and Version is Linux 2.4(64 bit) which you must select from the dropdown box.
5. Press Next and select the amount of RAM to be allotted to this machine (recommended is 512 MB)
6. On Next Screen Select "Do Not Add a Virtual Hard Disk" and click on create.

Once the machine has been created we need to change a few settings and add our OS to make it bootable.

1. Select Kioptrix Machine and enter the settings.
2. Disable Audio and USB controllers. (This is important if you do not do this machine will give kernel panics.)
3. Select Network tab and use the internal network with name vlab.
    * Go to advanced network settings and change the adapter from whatever it is currently to PCnet-PCI II.
4. Once setup is completed add your bootable drive.
    * Unrar the rar file download and it must contain a .vmdk file this your OS image.
    * Go to Storage Tab and in the heading Controller:IDE add a hard drive (The icon is square please be careful as a mistake will make machine unusable.)
    * Select the hard drive icon and browse system for selecting the Kioptrix.vmdk file that you extracted.
5. Once the setup is done start your machine.

If every setting was done properly the machine should automatically connect to the internal network once startup is complete.<br>
As Kioptrix is a machine you are supposed to hack I cannot give you the passwords but we have a method of checking whether the machine is online.

**How to find your machine?**

Open terminal in Kali Linux and type 'sudo arp-scan -l' it will list all machines that responded to arp packets in your network. (10.0.10.1 is your dhcpserver) the other machine is Kioptrix.<br><br>
Just to double check you can scan for the OS version of machine you are targeting using Nmap. The command to perform this action is given as:

    sudo nmap -O --osscan-guess 10.10.10.x 

Here x is IP address you found in arp scan. If the result gives Linux 2.2/2.4 as a result you know it is kioptrix (To know why read the documentation of machine).<br><br>

## Recommended Security Measures.
1. Disable all USB connections from machines to avoid access to usb drives.
2. Do not use shared folders in case the machine is being used for malware analysis.
3. Disable audio ports.

I hope you found this article helpful and informative.

*Alvida.*

Note: If you believe you have found a technical mistake in my blog post please contact me via email.

Attributions:

1. Virtualbox logo : Oracle Corporation, GPLv2 <https://www.gnu.org/licenses/old-licenses/gpl-2.0.html>, via Wikimedia Commons