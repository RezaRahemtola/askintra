import { Command, BaseCommand } from 'ioc:factory/Core/Command';
import { CommandInteraction } from 'discord.js';

@Command({
  scope: 'GUILDS',
  options: {
    name: 'planning',
    description: 'planning description',
    options: [],
  },
})
export default class ShowPlanning extends BaseCommand {
  public async run(interaction: CommandInteraction): Promise<void> {
    // Your code here
  }
}