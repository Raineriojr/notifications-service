import { NotificationRepository } from "../repositories/notifications-repository";
import { Injectable } from "@nestjs/common";
import { NotificationNotFound } from "./errors/notification-not-found-error";

interface CancelNotificationRequest {
  notificationId: string;
}

type CancelNotificationResponse = void

@Injectable()
export class CancelNotification {
  constructor(private notificationRepository: NotificationRepository) { }

  async execute(request: CancelNotificationRequest): Promise<CancelNotificationResponse> {
    const { notificationId } = request;

    const notification = await this.notificationRepository.findById(
      notificationId,
    )

    if(!notification){
      throw new NotificationNotFound();
    }

    notification.cancel();
    
    this.notificationRepository.save(notification);
  }
}