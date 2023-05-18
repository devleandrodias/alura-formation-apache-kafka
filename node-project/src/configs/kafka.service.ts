import { EachMessagePayload } from "kafkajs";
import { kafka } from "./kafka.config";
import { KafkaConsumer, KafkaProducer } from "./kafka.types";

export class KafkaService {
  async producer({ topic, messages }: KafkaProducer) {
    const producer = kafka.producer();

    await producer.connect();

    const response = await producer.send({ topic, messages });

    response.map((r) => {
      console.info(`Success: ${r.topicName} ::: partition ${r.partition}`);
    });

    await producer.disconnect();
  }

  async consumer<T>({ consumerConfig, subscription }: KafkaConsumer) {
    const consumer = kafka.consumer(consumerConfig);

    await consumer.connect();

    await consumer.subscribe(subscription);

    await consumer.run({
      eachMessage: async ({
        topic,
        message,
        partition,
      }: EachMessagePayload): Promise<void> => {
        const response = JSON.parse(message.value?.toString() || "") as T;

        console.log("---------------------------------------------");
        console.log(
          `Receiving message - TOPIC: [${topic}] / Partition [${partition}]`
        );
        console.log(response);
      },
    });
  }
}
