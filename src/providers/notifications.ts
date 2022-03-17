import Notification from 'App/database/entities/notification';
import { User } from 'discord.js';
import { Like } from 'typeorm';

export function keywordsListToString(keywordList: string[]): string {
  return keywordList.join(' ');
}

export function keywordsStringToList(keywordString: string): string[] {
  return keywordString.split(' ');
}

export async function getAllNotifications(): Promise<Notification[]> {
  const notificationRepository = await Notification.getRepository();

  return await notificationRepository.find();
}

export async function getUserNotifications({ id: userId }: User): Promise<Notification[]> {
  const notificationRepository = await Notification.getRepository();

  return await notificationRepository.find({ userId });
}

export async function getAllNotificationsWithKeyword(keyword: string): Promise<Notification[]> {
  const notificationRepository = await Notification.getRepository();

  return await notificationRepository.find({ keywords: Like(`%${keyword}%`) });
}

export async function createNewNotification({ id: userId }: User, keywordList: string[]): Promise<Notification | undefined> {
  const notificationRepository = await Notification.getRepository();
  const keywords = keywordsListToString(keywordList);
  const notification = notificationRepository.create({ userId, keywords });

  return await notificationRepository.save(notification);
}

export async function deleteNotificationIfOwn(id: number, { id: userId }: User): Promise<Notification | undefined> {
  const notificationRepository = await Notification.getRepository();
  const toDelete = await notificationRepository.findOne({ id, userId });

  if (toDelete) {
    return await notificationRepository.softRemove(toDelete);
  }
  return undefined;
}

export async function consumeNotificationsForKeyword(keyword: string, consumer: (notification: Notification) => void): Promise<Notification[]> {
  const notificationRepository = await Notification.getRepository();
  const notifications = await notificationRepository.find({ keywords: Like(`%${keyword}%`) });

  for (const notification of notifications) {
    consumer(notification);
    await notificationRepository.softRemove(notification);
  }
  return notifications;
}