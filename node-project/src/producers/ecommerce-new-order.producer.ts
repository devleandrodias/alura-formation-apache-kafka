import { Message } from "kafkajs";
import { randomUUID } from "node:crypto";

import { EKafkaTopics } from "../configs/kafka.topics";
import { KafkaService } from "../configs/kafka.service";

import { Order } from "../entities/Order";

async function run() {
  const kafkaService = new KafkaService();

  for (let index = 0; index < 10; index++) {
    const userId = randomUUID();
    const orderId = randomUUID();

    const order: Order = new Order(userId, orderId, Math.random() * 1000 + 1);
    const messages: Message[] = [{ key: userId, value: JSON.stringify(order) }];

    await kafkaService.producer({
      messages,
      topic: EKafkaTopics.ECOMMERCE_NEW_ORDER,
    });
  }
}

run();
