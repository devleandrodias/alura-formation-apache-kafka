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

  async consumer({ topic, groupId, eachMessage }: KafkaConsumer) {
    const consumer = kafka.consumer({ groupId });

    await consumer.connect();
    await consumer.subscribe({ topic, fromBeginning: true });
    await consumer.run({ eachMessage });
  }
}
