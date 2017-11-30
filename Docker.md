## Overview
This document describes 

## Prerequisites
 1. Install the Docker Community Edition client for your [platform](https://store.docker.com/search?offering=community&type=edition)
 1. Install the Bot Framework Emulator for your platform. Please ensure you install and setup NGrok as part of your emulator installation.

## Running Samples
  1. To see the list of available samples in the Docker container, run 
  ```sh
  docker run -it --rm -p 3978:3978 microsoft/botframework-samples-node
  ```
  1. To run a particular sample, for example ``core-SendAttachment`` run:
  ```
  docker run -it --rm -p 3978:3978 microsoft/botframework-samples-node core-SendAttachment
  ```
  This will launch the bot inside the Docker container. 
  
  1. Connect the emulator to the bot using the url: http://localhost:3978/api/messages 

### Additional options
  1. To set an application name and application key for the bot, pass them in via environment variables as follows:
  ```
  docker run -it --rm -p 3978:3978 -e MICROSOFT_APP_ID=<app_id> -e MICROSOFT_APP_KEY=<app_key> microsoft/botframework-samples-node <sample_name>
  ```
  1. Some bots need keys for connecting to Cognitive Services. 
  
## Technical Details
The ``DockerFile`` used to generate the image is located at [./Node/docker/Dockerfile].
