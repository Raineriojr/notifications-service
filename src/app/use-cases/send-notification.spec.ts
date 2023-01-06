import { InMemoryNotificationRepository } from "@test/repositories/in-memory-notifications-repository";
import { SendNotification } from "./send-notification"

describe('Send notification', () => {
  it('should be able to send a notification', async () => {
    const notificationsRepository = new InMemoryNotificationRepository();
    const sendNotification = new SendNotification(notificationsRepository);

    await sendNotification.execute({
      category: 'social',
      content: 'Isso é uma notificação',
      recipientId: 'recipientId-example'
    })

    expect(notificationsRepository.notifications).toHaveLength(1);
  })
})