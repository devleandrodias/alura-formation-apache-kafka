# Alura Formation - Apache Kafka

## Dependencies

- docker (https://docs.docker.com)
- kafka (https://kafka.apache.org/downloads)
- kafka-ui (https://github.com/provectus/kafka-ui)
- zookeeper (https://zookeeper.apache.org)

## Stating Zookeeper server

> sh bin/zookeeper-server-start.sh config/zookeeper.properties

## Stating Kafka server

> sh bin/kafka-server-start.sh config/server.properties

## Starting Kafka UI

> docker-compose up -d

## Creating a new topic

> sh bin/kafka-topics.sh --create --bootstrap-server localhost:9092 --replication-factor 1 --partitions 1 --topic ECOMMERCE_NEW_ORDER

## Deleting a topic

> sh bin/kafka-topics.sh --bootstrap-server localhost:9092 --topic ECOMMERCE_NEW_ORDER --delete

## Describing a topic

> sh bin/kafka-topics.sh --describe --bootstrap-server localhost:9092

## Reparting a topic

> sh bin/kafka-topics.sh --alter --bootstrap-server localhost:9092 --topic ECOMMERCE_NEW_ORDER --partitions 3

## Listing topics

> sh bin/kafka-topics.sh --list --bootstrap-server localhost:9092

## View consumers group

> sh bin/kafka-consumer-groups.sh --bootstrap-server localhost:9092 --all-groups --describe

## Create messages on producer

> sh bin/kafka-console-producer.sh --broker-list localhost:9092 --topic ECOMMERCE_NEW_ORDER

## Consume messsages on consumer

> sh bin/kafka-console-consumer.sh --bootstrap-server localhost:9092 --topic ECOMMERCE_NEW_ORDER --from-beginning
