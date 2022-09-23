"use strict";

export default function(client) {
    client.on("interactionCreate", async (interaction) => {
        // Slash Command Handling
        if (interaction.isCommand()) {
            const cmd = client.slashCommands.get(interaction.commandName);
            if (!cmd)
                return interaction.reply({ content: "An error has ocurred " });
    
            const args = [];
    
            for (let option of interaction.options.data) {
                if (option.type === "SUB_COMMAND") {
                    if (option.name) args.push(option.name);
                    option.options?.forEach((x) => {
                        if (x.value) args.push(x.value);
                    });
                } else if (option.value) args.push(option.value);
            }
            interaction.member = interaction.guild.members.cache.get(interaction.user.id);
    
            cmd.run(client, interaction, args);
        }
    
        // Context Menu Handling
        if (interaction.isContextMenu()) {
            await interaction.deferReply({ ephemeral: false });
            const command = client.slashCommands.get(interaction.commandName);
            if (command) command.run(client, interaction);
        }
        
        // Button Handling
        if (interaction.isButton()) {

        }
    
        // Select Menu Handling
        if(interaction.isSelectMenu()) {


        }
    
        // Modal Handling
        if(interaction.isModalSubmit()) {

        }
        
    
    });
}

