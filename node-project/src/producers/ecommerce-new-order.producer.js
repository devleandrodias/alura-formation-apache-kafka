import { kafka } from "../configs/kafka.config.js";

import { TOPICS } from "../topics.js";

async function run() {
  const producer = kafka.producer();

  await producer.connect();

  const response = await producer.send({
    topic: TOPICS.ECOMMERCE_NEW_ORDER,
    messages: [{ value: "12563,54856,7856378" }],
  });

  response.map((r) => {
    console.info(
      `Success: ${r.topicName} ::: partition ${r.partition} /offset ${r.offset} /timestamp ${r.timestamp}`
    );
  });

  await producer.disconnect();
}

run();
