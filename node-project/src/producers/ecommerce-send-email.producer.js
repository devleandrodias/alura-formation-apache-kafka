import { randomUUID } from "node:crypto";

import { TOPICS } from "../topics.js";

import { KafkaService } from "../services/KafkaService.js";

async function run() {
  const kafkaService = new KafkaService();

  const key = randomUUID();
  const value = "Thanks! We are processing your order!";

  await kafkaService.producer(TOPICS.ECOMMERCE_SEND_EMAIL, key, value);
}

for (let index = 0; index < 10; index++) {
  await run();
}
