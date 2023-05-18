import { EKafkaTopics } from "../configs/kafka.topics";
import { KafkaService } from "../configs/kafka.service";

async function run() {
  const kafkaService = new KafkaService();

  await kafkaService.consumer({
    consumerConfig: {
      groupId: "email-service",
    },
    subscription: {
      topics: [EKafkaTopics.ECOMMERCE_SEND_EMAIL],
    },
    eachMessage: async ({ topic, partition, message }) => {
      console.log("---------------------------------------------");
      console.log("Sending email...");
      console.log({ topic, partition });
      console.log({ value: message?.value?.toString() });
    },
  });
}

run();
