import { Kafka } from "kafkajs";

import { producerMessage } from "./producer.js";

const kafka = new Kafka({
  clientId: "my-app",
  brokers: ["127.0.0.1:9092"],
});

async function main() {
  // const consumer = kafka.consumer({ groupId: "test-group" });

  // await consumer.connect();

  // await consumer.subscribe({
  //   topic: "ECOMMERCE_NEW_ORDER_NODE",
  //   fromBeginning: true,
  // });

  // await consumer.run({
  //   eachMessage: async ({ topic, partition, message }) => {
  //     console.log({
  //       value: message.value.toString(),
  //     });
  //   },
  // });

  await producerMessage(kafka);
}

main();
