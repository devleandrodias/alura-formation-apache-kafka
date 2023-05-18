import { Message, ConsumerConfig, ConsumerSubscribeTopics } from "kafkajs";

export type KafkaProducer = {
  topic: string;
  messages: Message[];
};

export type KafkaConsumer = {
  consumerConfig: ConsumerConfig;
  subscription: ConsumerSubscribeTopics;
};
