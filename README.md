# ReBot - Rule-Based Discord Bot

ReBot is a Discord bot that allows you to create rules for bot responses, reacting to text messages written by users in your server. This repository contains the source code and instructions to deploy and run ReBot on your own server, enabling you to enhance user interaction and engagement with customized bot responses.

## Usage
ReBot allows you to assign responses to user messages based on either "Simple" or "Exact" rules.

### Simple Replies
"Simple" replies are triggered when a user's message contains the text assigned to the response. ReBot ignores case and adjacency of other letters. For example, if the trigger is "PLAY", the bot will respond to the message "Replay" with the response assigned to that trigger.

To add a "Simple" trigger, use the command:

`/rb_add_simple trigger_text response_text`

### Exact Replies
"Exact" replies are triggered only when a user's message exactly matches the saved trigger. Case sensitivity matters. For example, if the trigger is "Hello", the bot will respond only to the message "Hello".

To add an "Exact" trigger, use the command:

`/rb_add_exact trigger_text response_text`

### Listing Triggers
To display the registered triggers, use the appropriate commands:

`/rb_list_simple`

or 

`/rb_list_exact`

### Removing Triggers
To remove an existing trigger, use the appropriate commands:

`/rb_remove_simple trigger_text`

or

`/rb_remove_exact trigger_text`

## Installation

Follow these steps to set up and run ReBot on your server:

1. Clone the repository:

`git clone https://github.com/DanielDrabik/ReBot.git`

2. Change to the ReBot directory:

`cd ReBot`

3. Create a copy of the `.env.example` file and rename it to `.env`:

`cp .env.example .env`

4. Open the `.env` file and fill in the required information, such as your bot token channel id and bot id.

5. Run the Docker Compose command to build and start the bot:

`docker-compose build`

`docker-compose up -d`


That's it! Your ReBot instance should now be up and running, connected to your Discord server. Enjoy the features and functionalities that ReBot has to offer.

## Support

If you have any questions, issues or suggestions, please [open an issue](https://github.com/DanielDrabik/ReBot/issues) in the repository, and we will do our best to help you.
