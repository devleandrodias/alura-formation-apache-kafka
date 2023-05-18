import { KafkaTopics } from "../configs/kafka.topics.js";
import { KafkaService } from "../configs/kafka.service.js";

async function run() {
  const kafkaService = new KafkaService();

  await kafkaService.consumer(
    "email-service",
    KafkaTopics.ECOMMERCE_SEND_EMAIL,
    async ({ topic, partition, message }) => {
      console.log("---------------------------------------------");
      console.log("Sending email...");
      console.log({ topic, partition });
      console.log({ value: message.value.toString() });
    }
  );
}

run();
