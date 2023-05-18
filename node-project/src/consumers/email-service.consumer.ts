import { EKafkaTopics } from "../configs/kafka.topics";
import { KafkaService } from "../configs/kafka.service";

async function run() {
  const kafkaService = new KafkaService();

  await kafkaService.consumer(
    "email-service",
    EKafkaTopics.ECOMMERCE_SEND_EMAIL,
    async ({ topic, partition, message }) => {
      console.log("---------------------------------------------");
      console.log("Sending email...");
      console.log({ topic, partition });
      console.log({ value: message?.value?.toString() });
    }
  );
}

run();
