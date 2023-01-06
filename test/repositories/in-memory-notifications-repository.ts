import { Notification } from "src/app/entities/notification";
import { NotificationRepository } from "src/app/repositories/notifications-repository";

export class InMemoryNotificationRepository implements NotificationRepository {
  public notifications: Notification[] = [];

  async findById(notificationId: string): Promise<Notification> {
    const notification = this.notifications.find(
      item => item.id === notificationId
    )

    if (!notification) {
      return null
    }

    return notification;
  }

  async countManyByRecipientId(recipientId: string): Promise<number> {
    return this.notifications.filter(notification => notification.recipientId === recipientId).length
  }

  async findManyByRecipientId(recipientId: string): Promise<Notification[]> {
    return this.notifications.filter(notifications => notifications.recipientId === recipientId)
  }

  async create(notification: Notification) {
    this.notifications.push(notification)
  }

  async save(notification: Notification): Promise<void> {
    const notificationindex = this.notifications.findIndex(
      item => item.id === notification.id 
    )

    if(notificationindex >= 0){
      this.notifications[notificationindex] === notification;
    }
  }
} 