import { randomUUID } from "node:crypto";

import { KafkaTopics } from "../configs/kafka.topics.js";
import { KafkaService } from "../configs/kafka.service.js";

async function run() {
  const kafkaService = new KafkaService();

  const key = randomUUID();
  const value = "Thanks! We are processing your order!";

  await kafkaService.producer(KafkaTopics.ECOMMERCE_SEND_EMAIL, key, value);
}

for (let index = 0; index < 10; index++) {
  await run();
}
