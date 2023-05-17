import { kafka } from "../configs/kafka.config.js";

export class KafkaService {
  producer() {}

  async consumer(groupId, topic, eachMessage) {
    const consumer = kafka.consumer({ groupId });

    await consumer.connect();

    await consumer.subscribe({ topic, fromBeginning: true });

    await consumer.run({ eachMessage });
  }
}
