const { Kafka } = require("kafkajs");
require('dotenv').config();

const kafka = new Kafka({
  clientId: "my-app",
  brokers: [`${process.env.IP_ADD}:9092`],
});

module.exports = { kafka };
