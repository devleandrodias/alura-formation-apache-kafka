import { kafka } from "../configs/kafka.config.js";

import { TOPICS } from "../topics.js";

async function run() {
  const consumer = kafka.consumer({
    groupId: "email-service",
  });

  await consumer.connect();

  await consumer.subscribe({
    topic: TOPICS.ECOMMERCE_SEND_EMAIL,
    fromBeginning: true,
  });

  await consumer.run({
    eachMessage: async ({ topic, partition, message }) => {
      console.log("---------------------------------------------");
      console.log("Sending email...");
      console.log({ topic, partition });
      console.log({ value: message.value.toString() });
    },
  });
}

run();
