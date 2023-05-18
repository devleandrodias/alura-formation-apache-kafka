import { EKafkaTopics } from "../configs/kafka.topics";
import { KafkaService } from "../configs/kafka.service";

async function run() {
  const kafkaService = new KafkaService();

  await kafkaService.consumer({
    groupId: "fraud-detector-service",
    topic: EKafkaTopics.ECOMMERCE_NEW_ORDER,
    eachMessage: async ({ topic, partition, message }) => {
      console.log("---------------------------------------------");
      console.log("Processing new order, checking for a fraud...");
      console.log({ topic, partition });
      console.log({ value: message?.value?.toString() });
    },
  });
}

run();
