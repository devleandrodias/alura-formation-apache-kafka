import { kafka } from "../configs/kafka.config.js";

export class KafkaService {
  async producer(topic, key, value) {
    const producer = kafka.producer();

    await producer.connect();

    const response = await producer.send({ topic, messages: [{ key, value }] });

    response.map((r) => {
      console.info(`Success: ${r.topicName} ::: partition ${r.partition}`);
    });

    await producer.disconnect();
  }

  async consumer(groupId, topic, eachMessage) {
    const consumer = kafka.consumer({ groupId });

    await consumer.connect();

    await consumer.subscribe({ topic, fromBeginning: true });

    await consumer.run({ eachMessage });
  }
}
