import { Command, BaseCommand } from 'ioc:factory/Core/Command';
import { CommandInteraction } from 'discord.js';

@Command({
  scope: 'GUILDS',
  options: {
    name: 'notify-hub',
    description: 'notify-hub description',
    options: [],
  },
})
export default class NotifyHub extends BaseCommand {
  public async run(interaction: CommandInteraction): Promise<void> {
    // Your code here
  }
}