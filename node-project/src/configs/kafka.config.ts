import { Kafka } from "kafkajs";

import { envs } from "./envs.config";

export const kafka = new Kafka({
  brokers: [envs.kafkaBroker],
  clientId: envs.kafkaClientId,
});
