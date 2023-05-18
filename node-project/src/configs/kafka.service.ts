import { EachMessagePayload } from "kafkajs";

import { kafka } from "./kafka.config";

export class KafkaService {
  async producer(topic: string, key: string, value: string) {
    const producer = kafka.producer();

    await producer.connect();

    const response = await producer.send({ topic, messages: [{ key, value }] });

    response.map((r) => {
      console.info(`Success: ${r.topicName} ::: partition ${r.partition}`);
    });

    await producer.disconnect();
  }

  async consumer(
    groupId: string,
    topic: string,
    eachMessage: (payload: EachMessagePayload) => Promise<void>
  ) {
    const consumer = kafka.consumer({ groupId });

    await consumer.connect();

    await consumer.subscribe({ topic, fromBeginning: true });

    await consumer.run({ eachMessage });
  }
}
