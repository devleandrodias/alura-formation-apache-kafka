import {
  Message,
  ConsumerConfig,
  EachMessagePayload,
  ConsumerSubscribeTopics,
} from "kafkajs";

export type KafkaProducer = {
  topic: string;
  messages: Message[];
};

export type KafkaConsumer = {
  consumerConfig: ConsumerConfig;
  subscription: ConsumerSubscribeTopics;
  eachMessage: (payload: EachMessagePayload) => Promise<void>;
};
