# ReBot - Rule-Based Discord Bot

ReBot is a Discord bot that allows you to create rules for bot responses, reacting to text messages written by users in your server. This repository contains the source code and instructions to deploy and run ReBot on your own server, enabling you to enhance user interaction and engagement with customized bot responses.

## Installation

Follow these steps to set up and run ReBot on your server:

1. Clone the repository:

`git clone https://github.com/DanielDrabik/ReBot.git`

2. Change to the ReBot directory:

`cd ReBot`

3. Create a copy of the `.env.example` file and rename it to `.env`:

`cp .env.example .env`

4. Open the `.env` file and fill in the required information, such as your bot token and any other necessary settings.

5. Run the Docker Compose command to build and start the bot:

`docker-compose up -d`


That's it! Your ReBot instance should now be up and running, connected to your Discord server. Enjoy the features and functionalities that ReBot has to offer.

## Support

If you have any questions, issues or suggestions, please [open an issue](https://github.com/DanielDrabik/ReBot/issues) in the repository, and we will do our best to help you.
