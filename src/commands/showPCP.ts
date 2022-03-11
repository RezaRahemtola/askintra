import { Command, BaseCommand } from 'ioc:factory/Core/Command';
import { CommandInteraction } from 'discord.js';

@Command({
  scope: 'GUILDS',
  options: {
    name: 'show-pcp',
    description: 'show-pcp description',
    options: [],
  },
})
export default class ShowPCP extends BaseCommand {
  public async run(interaction: CommandInteraction): Promise<void> {
    // Your code here
  }
}