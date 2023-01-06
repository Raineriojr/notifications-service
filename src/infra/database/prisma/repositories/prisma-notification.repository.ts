import { Injectable } from "@nestjs/common";
import { Notification } from "@app/entities/notification";
import { NotificationRepository } from "@app/repositories/notifications-repository";
import { PrismaService } from "../prisma.service";
import { PrismaNotificationMapper } from "../mappers/prisma-notification-mapper";

@Injectable()
export class PrismaNotificationRepository implements NotificationRepository {
  constructor(private prismaService: PrismaService) { }

  async countManyByRecipientId(recipientId: string): Promise<number> {
    const count = await this.prismaService.notification.count({
      where: {
        recipientId,
      }
    })

    return count;
  }

  async findManyByRecipientId(recipientId: string): Promise<Notification[]> {
    const notifications = await this.prismaService.notification.findMany({
      where: {
        recipientId: recipientId
      }
    })

    return notifications.map(notification => {
      return PrismaNotificationMapper.toDomain(notification)
    })
  }


  async findById(notificationId: string): Promise<Notification> {
    const notification = await this.prismaService.notification.findUnique({
      where: {
        id: notificationId
      }
    })

    if (!notification) {
      return null
    }

    return PrismaNotificationMapper.toDomain(notification);
  }

  async create(notification: Notification): Promise<void> {
    const raw = PrismaNotificationMapper.toPrisma(notification);

    await this.prismaService.notification.create({
      data: raw,
    })
  }

  async save(notificationId: Notification): Promise<void> {
    const raw = PrismaNotificationMapper.toPrisma(notificationId);

    await this.prismaService.notification.update({
      where: {
        id: raw.id,
      },
      data: raw
    })
  }

}
