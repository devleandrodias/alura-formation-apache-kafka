import { EKafkaTopics } from "../configs/kafka.topics";
import { KafkaService } from "../configs/kafka.service";

import { Order } from "../entities/Order";

async function run() {
  const kafkaService = new KafkaService();

  await kafkaService.consumer<Order>({
    consumerConfig: { groupId: "fraud-detector-service" },
    subscription: { topics: [EKafkaTopics.ECOMMERCE_NEW_ORDER] },
  });
}

run();
