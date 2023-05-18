import "dotenv/config";

import env from "env-var";

export const envs = {
  kafkaBroker: env.get("KAFKA_BROKER").required().asString(),
  kafkaClientId: env.get("KAFKA_CLIENT_ID").required().asString(),
};
