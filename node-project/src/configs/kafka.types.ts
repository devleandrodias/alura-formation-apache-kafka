import { EachMessagePayload, Message } from "kafkajs";

export type KafkaProducer = {
  topic: string;
  messages: Message[];
};

export type KafkaConsumer = {
  groupId: string;
  topic: string;
  eachMessage: (payload: EachMessagePayload) => Promise<void>;
};
