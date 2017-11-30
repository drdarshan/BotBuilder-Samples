## Overview

## Prerequisites and setup
 1. Install [Docker Community Edition](https://store.docker.com/search?offering=community&type=edition) for your platform.
 1. Install the [Bot Framework Emulator](https://github.com/Microsoft/BotFramework-Emulator/releases) for your platform. 
    * Please [install and setup NGrok](https://github.com/Microsoft/BotFramework-Emulator/wiki/Tunneling-(ngrok)) as part of your emulator installation.
    * When setting up NGrok, please ensure that you *uncheck* the box to bypass it for localhost as shown in the image below:
      ![Emulator screenshot](/images/emulator-2.png)
    

## Running Samples
To see the list of available samples in the Docker container, run: 
  docker run -it --rm -p 3978:3978 microsoft/botframework-samples-node
  
To run a particular sample, for example ``core-SendAttachment`` run:
  docker run -it --rm -p 3978:3978 microsoft/botframework-samples-node core-SendAttachment
      
The bot will now be launched inside the Docker container.
  
Connect the emulator to the bot using the url: http://localhost:3978/api/messages 

### Additional options
  1. To set an application name and application key for the bot, pass them in via environment variables as follows:
     docker run -it --rm -p 3978:3978 -e MICROSOFT_APP_ID=<app_id> -e MICROSOFT_APP_KEY=<app_key> microsoft/botframework-samples-node <sample_name>
  1. Some bots need keys for connecting to Cognitive Services. 
  
## Technical details
The Dockerfile used to generate the image is located at (/Node/docker/Dockerfile).To create the image from source, clone the Git repo using:
```
git clone https://github.com/Microsoft/BotBuilder-Samples.git
```
then, navigate to the Node samples folder:
```
cd BotBuilder-Samples/Node
```
and run:
```
docker build -t botbuilder-samples-node -f docker/Dockerfile .
```
