import { KafkaService } from "../configs/kafka.service";

async function run() {
  const kafkaService = new KafkaService();

  kafkaService.consumer<string>({
    consumerConfig: { groupId: "log-service" },
    subscription: { topics: [new RegExp(/^ECOMMERCE.*/)] },
  });
}

run();
