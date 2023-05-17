import { TOPICS } from "../topics.js";

import { KafkaService } from "./KafkaService.js";

async function run() {
  const kafkaService = new KafkaService();

  await kafkaService.consumer(
    "email-service",
    TOPICS.ECOMMERCE_SEND_EMAIL,
    async ({ topic, partition, message }) => {
      console.log("---------------------------------------------");
      console.log("Sending email...");
      console.log({ topic, partition });
      console.log({ value: message.value.toString() });
    }
  );
}

run();
