import { randomUUID } from "node:crypto";

import { kafka } from "../configs/kafka.config.js";

import { TOPICS } from "../topics.js";

async function run() {
  const producer = kafka.producer();

  await producer.connect();

  const key = randomUUID();

  const response = await producer.send({
    topic: TOPICS.ECOMMERCE_NEW_ORDER,
    messages: [{ key, value: `${key}12563,54856,7856378` }],
  });

  response.map((r) => {
    console.info(`Success: ${r.topicName} ::: partition ${r.partition}`);
  });

  await producer.disconnect();
}

for (let index = 0; index < 100; index++) {
  await run();
}
