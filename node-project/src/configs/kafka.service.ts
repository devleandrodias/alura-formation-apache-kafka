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

  async consumer({ consumerConfig, subscription, eachMessage }: KafkaConsumer) {
    const consumer = kafka.consumer(consumerConfig);

    await consumer.connect();
    await consumer.subscribe(subscription);
    await consumer.run({ eachMessage });
  }
}
