import { randomUUID } from "node:crypto";

import { EKafkaTopics } from "../configs/kafka.topics";
import { KafkaService } from "../configs/kafka.service";

async function run() {
  const kafkaService = new KafkaService();

  for (let index = 0; index < 10; index++) {
    const key = randomUUID();
    const value = `${key}12563,54856,7856378`;
    await kafkaService.producer(EKafkaTopics.ECOMMERCE_NEW_ORDER, key, value);
  }
}

run();
