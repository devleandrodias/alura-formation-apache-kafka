import { Message } from "kafkajs";
import { randomUUID } from "node:crypto";

import { EKafkaTopics } from "../configs/kafka.topics";
import { KafkaService } from "../configs/kafka.service";
import { Email } from "../entities/Email";

async function run() {
  const kafkaService = new KafkaService();

  for (let index = 0; index < 10; index++) {
    const userId = randomUUID();

    const email: Email = new Email(
      "Order in processing",
      "Thanks! We are processing your order!"
    );

    const messages: Message[] = [{ key: userId, value: JSON.stringify(email) }];

    await kafkaService.producer({
      messages,
      topic: EKafkaTopics.ECOMMERCE_SEND_EMAIL,
    });
  }
}

run();
