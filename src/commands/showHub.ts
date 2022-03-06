import { Command, BaseCommand } from 'ioc:factory/Core/Command';
import { CommandInteraction } from 'discord.js';

@Command({
  scope: 'GUILDS',
  options: {
    name: 'show-hub',
    description: 'show-hub description',
    options: [],
  },
})
export default class ShowHub extends BaseCommand {
  public async run(interaction: CommandInteraction): Promise<void> {
    // Your code here
  }
}