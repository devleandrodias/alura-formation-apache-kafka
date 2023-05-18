import { KafkaTopics } from "../configs/kafka.topics.js";
import { KafkaService } from "../configs/kafka.service.js";

async function run() {
  const kafkaService = new KafkaService();

  await kafkaService.consumer(
    "fraud-detector-service",
    KafkaTopics.ECOMMERCE_NEW_ORDER,
    async ({ topic, partition, message }) => {
      console.log("---------------------------------------------");
      console.log("Processing new order, checking for a fraud...");
      console.log({ topic, partition });
      console.log({ value: message.value.toString() });
    }
  );
}

run();
