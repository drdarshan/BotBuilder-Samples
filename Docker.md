## Overview
This document shows you how to setup and run the sample bots from our pre-packaged Docker container and interact with them via the [Bot Framework Emulator](https://github.com/Microsoft/BotFramework-Emulator).

## Prerequisites and setup
 1. Install [Docker Community Edition](https://store.docker.com/search?offering=community&type=edition) for your platform.
 1. Install the [Bot Framework Emulator](https://github.com/Microsoft/BotFramework-Emulator/releases) for your platform. 
    * Please [install and setup NGrok](https://github.com/Microsoft/BotFramework-Emulator/wiki/Tunneling-(ngrok)) as part of your emulator installation.
    * When setting up NGrok, please ensure that you *uncheck* the box to bypass it for localhost as shown in the image below:
      ![Emulator screenshot](/images/emulator-2.png)
    

## Running samples
To see the list of available samples in the Docker container run:
```
docker run -it --rm -p 3978:3978 microsoft/botframework-samples-node
```
To run a particular sample, for instance `core-SendAttachment` run:
```
docker run -it --rm -p 3978:3978 microsoft/botframework-samples-node core-SendAttachment
```   
This will launch the bot inside the Docker container.
  
Connect the emulator to the bot using the endpoint url: http://localhost:3978/api/messages. Leave the `Microsoft App ID` and `Microsoft App Password` fields blank. You can now start interacting with the bot. 

To stop the bot, simply hit Control-C in the Docker window.

### Additional options
To set an application name and application key for the bot, pass them in via environment variables as follows:
```
docker run -it --rm -p 3978:3978 -e MICROSOFT_APP_ID=<app_id> -e MICROSOFT_APP_KEY=<app_key> microsoft/botframework-samples-node <sample_name>
```
Some bots need API keys for connecting to various Cognitive Services. You must pass the keys for these services via environment variables. For example, to run the ``intelligence-ImageCaption`` bot which relies on the [computer vision service](https://azure.microsoft.com/en-us/services/cognitive-services/computer-vision/) to do captioning, you can provide your key to the computer vision APIs using:
```
docker run -it --rm -p 3978:3978 -e MICROSOFT_VISION_API_KEY=<vision API key> microsoft/botframework-samples-node intelligence-ImageCaption
```
The environment variables used to pass keys required for each of the samples based on Cognitive Services are summarized in the following table. Please refer to each example for more details on obtaining the required API keys.

|Sample | Environment variable |
|:-------|:---------------------|
|[intelligence-LUIS](Node/intelligence-LUIS)|BING_SPELL_CHECK_API_KEY|
|[intelligence-ImageCaption](Node/intelligence-ImageCaption)|MICROSOFT_VISION_API_KEY|
|[intelligence-SpeechToText](Node/intelligence-SpeechToText)|SPEECH_API_KEY|
|[intelligence-SimilarProducts](Node/intelligence-SimilarProducts)|BING_SEARCH_API_KEY|
|[intelligence-Zummer](Node/intelligence-Zummer)| BING_SEARCH_API_KEY |
|[blog-LUISActionBinding](Node/blog-LUISActionBinding)|APIXU_API_KEY|
|[sample-payments](Node/sample-payments)|PAYMENTS_STRIPE_API_KEY|


## Technical details
The Dockerfile used to generate the image is located [here](/Node/docker/Dockerfile).To create the image from source, clone the Git repo using:
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
