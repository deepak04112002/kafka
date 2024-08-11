const { kafka } = require("./client");

async function init() {
  const consumer = kafka.consumer({ groupId: "user-1" });
  await consumer.connect();

  await consumer.subscribe({ topics: ["rider-updates"], fromBeginning: true });

  await consumer.run({
    eachMessage: async ({ topic, partition, message, heartbeat, pause }) => {
      const groupId = "user-1";
      console.log(
        `${groupId}: [${topic}]: PART:${partition}:`,
        message.value.toString()
      );
    },
  });
  console.log("deepak");
  //   await consumer.disconnect();
}

init();
