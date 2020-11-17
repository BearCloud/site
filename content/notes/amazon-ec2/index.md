---
title: Uploading BearChat to Amazon EC2
date: 2020-11-19
---

This document will walk you through the process of setting up an Amazon EC2 instance and uploading your BearChat project without any previous configuration. This guide will only be concerned with setting up

### Setting up your EC2 instance

If you already have an EC2 instance set up, you may partially or completely skip this section.

1. Go to the AWS console. If you are logged into your AWS account, you can access it directly [here](https://console.aws.amazon.com/console/home).

2. Search "EC2" in the search bar and click on the "EC2" option in the dropdown. This should take you to the EC2 dashboard.

3. On the right, click on "Instances" to view your instances. Then, click on the "Launch instances" to launch a new EC2 instance. Select Amazon Linux, then accept all default options.

4. Launch your instance. You will be prompted to download and save a `.pem` file. This holds the credentials needed to connect to your EC2 instance. Keep this in a safe place.

5. After you launch your instance, go back to the instances page and click on your newly created EC2 instance. Take note of this instance's **VPC ID**.

### SSHing into your EC2 instance

Please follow the guide from the AWS docs: https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/AccessingInstances.html

If you having trouble connecting, make sure you are using the correct private key and logging in as the user `ec2-user` instead of `root`. If you are using PuTTY (Windows only), make sure you convert your `.pem` file to a `.ppk` file.

### Installing Docker, docker-compose, and git

Amazon Linux uses `yum`. Instructions are adapted from [here](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/docker-basics.html). Run the following commands to install Docker:

```
sudo yum update -y
sudo amazon-linux-extras install docker
sudo service docker start
```

Then relog (log out and log in), and verify that Docker is running by using the following command:

```
docker info
```

In order to install docker-compose:

```
sudo curl -L https://github.com/docker/compose/releases/latest/download/docker-compose-$(uname -s)-$(uname -m) -o /usr/local/bin/docker-compose
sudo chmod +x /usr/local/bin/docker-compose
```

Verify success with:

```
docker-compose version
```

In order to install git:

```
sudo yum install -y git
```

### Uploading BearChat

Run `git clone` with your BearChat Github repository in a directory of your choosing.

Due to `.gitignore`, some files (such as `.env` files) will not be uploaded. In this case, you can use `scp` in order to copy those files to your EC2 instance. Basic usage is:

```
scp local_file_name username@to_host:/remote/directory/
```
