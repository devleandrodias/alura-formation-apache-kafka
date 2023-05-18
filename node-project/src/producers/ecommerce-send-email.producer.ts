import { Message } from "kafkajs";
import { randomUUID } from "node:crypto";

import { EKafkaTopics } from "../configs/kafka.topics";
import { KafkaService } from "../configs/kafka.service";

async function run() {
  const kafkaService = new KafkaService();

  for (let index = 0; index < 10; index++) {
    const key = randomUUID();
    const value = "Thanks! We are processing your order!";
    const messages: Message[] = [{ key, value }];

    await kafkaService.producer({
      topic: EKafkaTopics.ECOMMERCE_SEND_EMAIL,
      messages,
    });
  }
}

run();
