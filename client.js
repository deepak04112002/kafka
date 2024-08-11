const { Kafka } = require("kafkajs");


const kafka = new Kafka({
  clientId: "my-app",
  brokers: ["192.168.0.204:9092"],
});

module.exports = {kafka};
