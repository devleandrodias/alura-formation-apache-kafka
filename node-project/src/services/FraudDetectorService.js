import { kafka } from "../configs/kafka.config.js";

async function run() {
  const consumer = kafka.consumer({
    groupId: "fraud-detector-service",
  });

  await consumer.connect();

  await consumer.subscribe({
    topic: "ECOMMERCE_NEW_ORDER_NODE",
    fromBeginning: true,
  });

  await consumer.run({
    eachMessage: async ({ topic, partition, message }) => {
      console.log("---------------------------------------------");
      console.log("Processing new order, checking for a fraud...");
      console.log({ topic, partition });
      console.log({ value: message.value.toString() });
    },
  });
}

run();
