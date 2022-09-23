import { Client, Collection } from "discord.js";
import handler from '../src/handler/index.mjs';
import dotenv from 'dotenv';
dotenv.config(); 

const client = new Client({
	intents: 98819,
});
	
	// Global Variables
	client.commands = new Collection();
	client.slashCommands = new Collection();
	
	// Initialize the project
	handler(client);

	client.on('ready', () => {
        console.log("Bot is online");    
    })

	client.login(process.env.DISCORD_TOKEN);

