# Kafka Crash Course

## Overview

This project demonstrates how to set up and use Apache Kafka with Docker and Node.js. It includes examples of Kafka producer, consumer, and admin functionalities.

## Prerequisites

- **Node.js**: [Download Node.js](https://nodejs.org/)
- **Docker**: [Download Docker](https://www.docker.com/products/docker-desktop)
- **VSCode**: [Download VSCode](https://code.visualstudio.com/)

## Docker Setup

1. **Start Zookeeper Container**

   ```bash
   docker run -p PORTNO:PORTNO zookeeper

   ```

2. **Start Kafka Container**

   ```bash
   docker run -p 9092:9092 \
   -e KAFKA_ZOOKEEPER_CONNECT=<PRIVATE_IP>:2181 \
   -e KAFKA_ADVERTISED_LISTENERS=PLAINTEXT://<PRIVATE_IP>:9092 \
   -e KAFKA_OFFSETS_TOPIC_REPLICATION_FACTOR=1 \
   confluentinc/cp-kafka
   ```

## Node Setup

1. **Run the Kafka Admin Script**

   ```bash
   node admin.js
   ```

2. **Run the Kafka Producer**

   ```bash
   node producer.js
   ```

3. **Run the Kafka Consumer**

   ```bash
   node consumer.js
   ```

## Example Output

1. **node admin.js**

   ```bash
   Admin connecting...
   Admin Connection Success...
   Creating Topic [rider-updates]
   Topic Created Success [rider-updates]
   Disconnecting Admin..
   ```

2. **node producer.js**

   ```bash
   connecting Producer
   producer connected
   producer disconnected
   ```

3. **node consumer.js group1**

   ```bash
   group1: [rider-updates]: PART:0: {"name":"tony","location":"south"}
   group1: [rider-updates]: PART:1: {"name":"tony","location":"north"}
   ```
