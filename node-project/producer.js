export async function producerMessage(kafka) {
  const producer = kafka.producer();

  await producer.connect();

  const response = await producer.send({
    topic: "ECOMMERCE_NEW_ORDER_NODE",
    messages: [{ value: "12563,54856,7856378" }],
  });

  response.map((r) => {
    console.info(
      `Success: ${r.topicName} ::: partition ${r.partition} /offset ${r.offset} /timestamp ${r.timestamp}`
    );
  });

  await producer.disconnect();
}
