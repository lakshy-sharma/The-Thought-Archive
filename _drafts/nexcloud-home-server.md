---
layout: post
title: "Creating a Nextcloud home server using Raspberry pi (4B) and External Storage."
date: 2021-07-07
author: "Lakshy Sharma"
---

<div style="text-align: center"><img align="center" width="400" height="266" src="/The-Thought-Archive/assets/media/Nextcloud.png"></div>
<br><br>
In this tutorial I will explain how we can create a self hosted Nextcloud server at home by using a basic Raspberry pi.<br>
When we use any online cloud server we are in essence storing our data on someone else's computer, usually these computers belong to a big company like google,amazon or microsoft. We can also create a similar system by using a computer (raspberry pi) and installing nextcloud server on it, but before we proceed I need to make a few points clear.
<!--display-->

1. The server must always stay powered on so that you have 24/7 access.
2. The server must have enough space to store the data hence you should buy a external usb hard drive.
3. There should be a power backup to keep server running in case of power cuts. (Optional)
4. A home router to route the server traffic.

If you are determined to setup a home server then you may skip the below part, but if you are still in doubt maybe the following section will help you in deciding.

## Pros and Cons of having a Home server.

|Benefits             |Downsides            |
|---------------------|---------------------|
| Guarantee of Privacy. | Initial Setup Hassle. | 
| Completely free of cost. | Needs maintenance. |
| Gives you enterprise grade security. | Requires investment in hardware. |
| Storage can be Expanded as needed.| Costs electricity bills but cost is not too much. |

After reading above The tutorial is big and will start from the right basics so make sure you do this on a sunday. Here is a list of all the basic hardware requirements you should meet before starting on the track.

**Hardware Requirements.**
1. A Raspberry pi 4B. (Suggested RAM 4 GB )
    - 1 microHDMi cable for using it with a monitor.
    - 1 32 to 128 GB microSD card for setting up the OS of pi.
    - A Monitor that is compatible with HDMI cables.
    - A USB wireless keyboard.
    - 1 Raspberry pi power cord and adapter.
    - 1 Raspberry pi case with case fan. (Optional but highly recommended.)
2. A Router with Internet connection and port forwarding.
3. A External Hard drive preferably above 1TB based on user requirements.
    - USB Cable to connect the drive to pi.

Phew! thats a lot of requirements but finally we are good to start setting up everything.

## Step 1 : Setting up the Raspberry PI and External Drive.

Our aim in this section is to setup our server which will be responsible for hosting the website and storing all the data.<br>

The Raspberry PI 4B we bought is perfect computer for such a small scale application, because it is cheap to buy and the final setup along with the external drive can fit in a small box. To setup the Raspberry pi you need to follow these steps.

### Setting up the OS.

Here we will configure the OS of Raspberry pi.

1. Download [Ubuntu Server](https://ubuntu.com/download/raspberry-pi) for raspberry pi. (At the time I am writing the article latest LTS version is 20.04.2)
    * Make sure you download 64bit version.
2. Once you download the img.xz file you need to decompress it using your archive manager and extract the .img file this is the OS we will install in the PI.
3. Download and open the [Raspberry PI Imager](https://www.raspberrypi.org/blog/raspberry-pi-imager-imaging-utility/) and go to choose OS.
    * Once selected you need to select Other OS and then browse for the .img file you extracted.
4. Once OS is selected attach you SD card to computer via a connector and opt for that SD card in Choose SD Card menu.
5. Once we have selected the everything it is time to write the image.

### Configuring the Drive Connection.

We will now configure the drive to automatically mount on boot in a specific folder.


## Step 2 : Downloading and setting up Nextcloud.

In this section we aim to install nextcloud and setup permissions so it can access our external drive.


## Step 3: Domain name registration.

In this step we will register for a free domain name and use it to access our website via internet.

## Step 4 : Setting up your Home Router.

We will now configure our router and link it with the domain name.

## Step 5 : Configuring Nextcloud.

In this step we aim to configure our cloud and create an admin account to manage the cloud.

### Optional Step : Configuring HTTPS with Lets Encrypt.

In this section our aim is to enable https on our website so you can securely connect to the server via internet.

## Step 6 : Further setup.

Creating user accounts and managing the server and linking your android app with the server.

## Security Checks and Good Habits.

This section gives you a basic overview of good security practices for the Nextcloud instance you created.<br>
I agree not all hackers on internet will start attacking you the moment you setup a home server, it is better safe than sorry.<br>

### Nextcloud Security.
 
1. Do not share your Nextcloud server address with everyone on internet.
2. Enable bruteforce detection and take swift actions when some IP is found bruteforcing your setup.
    - This is important as Nextcloud can be only attacked by bruteforcing.
3. Ensure only limited people have admin rights. Multiple tiers of admins are always a healthy choice.
4. Isolate server from internet (Do not enable ssh port forwarding). 
5. If you have enough space enable encryption.
6. Make sure server stays hidden in home physically.
7. Make strict password policies and enforce them.
    - No password smaller than 15 letters and must be made from phrases not words.
    - Enable builtin password lookup to disallow breached passwords.
    - Start password rotation every 6 months.
8. Setup a cron job to update the server software regularly.

### Router Security.
1. Make sure UPNP is blocked unless some service needs it explicitly.
2. Make sure no useless ports are forwarded.
3. Make sure you use a VLAN if router supports it.
4. Make sure SPI firewall and DoS protection provided by your router firmware creator is enabled.
    - In case you use OpenWRT make sure you configure firewalls correctly.
5. Separate Guest and Server network if you have frequent guests.
6. Make sure router has arp binding enabled to avoid arp spoofing attacks on server by your neighbors.

*Alvida*

Note: If you believe you have found a technical mistake in my blog post please contact me via email.

Attributions:

1. Nextcloud logo used does not belong to me and was taken from wikimedia commons.