import { kafka } from "../configs/kafka.config";

async function run() {
  const consumer = kafka.consumer({
    groupId: "log-service",
  });

  await consumer.connect();

  await consumer.subscribe({
    topics: [new RegExp(/^ECOMMERCE.*/)],
    fromBeginning: true,
  });

  await consumer.run({
    eachMessage: async ({ topic, partition, message }) => {
      console.log("---------------------------------------------");
      console.log(`Logging from topic [${topic}] - [${partition}]`);
      console.log({ value: message?.value?.toString() });
    },
  });
}

run();
