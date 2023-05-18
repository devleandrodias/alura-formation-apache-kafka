import { randomUUID } from "node:crypto";

import { KafkaTopics } from "../configs/kafka.topics.js";
import { KafkaService } from "../configs/kafka.service.js";

async function run() {
  const kafkaService = new KafkaService();

  const key = randomUUID();
  const value = `${key}12563,54856,7856378`;

  await kafkaService.producer(KafkaTopics.ECOMMERCE_NEW_ORDER, key, value);
}

for (let index = 0; index < 100; index++) {
  await run();
}
