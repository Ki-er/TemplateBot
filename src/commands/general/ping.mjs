"use strict";

import { Message, Client, MessageEmbed } from "discord.js";

export default {
    name: "ping",
    aliases: ['p'],
    /**
     *
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */
    run: async (client, message, args) => {
        let days = Math.floor(client.uptime / 86400000);
        let hours = Math.floor(client.uptime / 3600000) % 24;
        let minutes = Math.floor(client.uptime / 60000) % 60;
        let seconds = Math.floor(client.uptime / 1000) % 60;

        const embed = new MessageEmbed()
        .setColor('GREEN')
        .setFooter({ text: `Called By: ${message.author.tag}`}) 
        .setTimestamp()
        .setTitle("Pong!")
        .setDescription(`${client.ws.ping} ping to host`)
        .addField('Uptime', ` ${days}days ${hours}hrs ${minutes}min ${seconds}sec`, true)	    

        message.channel.send({ embeds: [embed] })


    },
};
