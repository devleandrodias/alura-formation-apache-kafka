import { kafka } from "../configs/kafka.config.js";

import { TOPICS } from "../topics.js";

async function run() {
  const producer = kafka.producer();

  await producer.connect();

  const responses = await producer.send({
    topic: TOPICS.ECOMMERCE_SEND_EMAIL,
    messages: [{ value: "Thanks! We are processing your order!" }],
  });

  responses.map((r) => {
    console.info(
      `Success: ${r.topicName} ::: partition ${r.partition} /offset ${r.offset} /timestamp ${r.timestamp}`
    );
  });

  await producer.disconnect();
}

run();
