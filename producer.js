const {kafka} = require("./client.js");

async function init() {
  const producer = kafka.producer();
  console.log("connecting Producer");
  await producer.connect();
  console.log("producer connected");

  await producer.send({
    topic: "rider-updates",
    messages: [
      {
        partition: 0,
        key: "location-update",
        value: JSON.stringify({ name: "Tony-Stark", loc: "EAST" }),
      },
    ],
  });
  console.log("producer disconnected")
  await producer.disconnect();
}

init();
