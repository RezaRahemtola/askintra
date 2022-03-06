import { Command, BaseCommand } from 'ioc:factory/Core/Command';
import { CommandInteraction } from 'discord.js';

@Command({
  scope: 'GUILDS',
  options: {
    name: 'notify-pcp',
    description: 'notify-pcp description',
    options: [],
  },
})
export default class NotifyPCP extends BaseCommand {
  public async run(interaction: CommandInteraction): Promise<void> {
    // Your code here
  }
}