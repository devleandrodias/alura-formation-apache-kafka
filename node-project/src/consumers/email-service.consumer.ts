import { EKafkaTopics } from "../configs/kafka.topics";
import { KafkaService } from "../configs/kafka.service";

import { Email } from "../entities/Email";

async function run() {
  const kafkaService = new KafkaService();

  await kafkaService.consumer<Email>({
    consumerConfig: { groupId: "email-service" },
    subscription: { topics: [EKafkaTopics.ECOMMERCE_SEND_EMAIL] },
  });
}

run();
