import { KafkaService } from "../configs/kafka.service";

async function run() {
  const kafkaService = new KafkaService();

  kafkaService.consumer({
    consumerConfig: {
      groupId: "log-service",
    },
    subscription: {
      topics: [new RegExp(/^ECOMMERCE.*/)],
    },
    eachMessage: async ({ topic, partition, message }) => {
      console.log("---------------------------------------------");
      console.log(`Logging from topic [${topic}] - [${partition}]`);
      console.log({ value: message?.value?.toString() });
    },
  });
}

run();
