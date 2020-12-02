---
title: Setting up BearChat's frontend
date: 2020-11-30
---

Previously, we set up BearChat's backend onto EC2. We will now deploy the frontend.

Sign into AWS here: https://www.awseducate.com/signin/SiteLogin

### Setting up your EC2 instance

Please consult the "Setting up your EC2 instance" section of [Uploading BearChat to Amazon EC2](/notes/amazon-ec2). If you already have an EC2 instance set up, you may partially or completely skip this section.

### Installing Node

You cannot install node directly on EC2. Instead, you must install Node Version Manager (nvm) and then install node. Run the following commands:

```
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.37.2/install.sh | bash
. ~/.nvm/nvm.sh
nvm install node
```

Then run the following command to check your Node version. At the time of this writing, Node 15.3.0 is the latest version.

```
node -e "console.log('Running Node.js ' + process.version)"
```

Then `cd` to go into the frontend directory and then run the command `npm install`. This will install the frontend dependencies. This may take a while.

### Changing backend configuration

In every microservice, we set the `Access-Control-Allow-Origin` header to `localhost:3000` in order to test locally. Since we are deploying to production, change this to `<Your EC2 IP address>:<Your EC2 port number>` instead.

### Connecting

Go to your browser and connect to `<Your EC2 IP address>:<Your EC2 port number>`. You should be able to play with the project that you've worked on this entire semester!
