# Alura Formation - Apache Kafka

## Docker configurations

- bitnami/kafka:2.8.1
- bitnami/zookeeper:3.8.1

> docker-compose up -d

## Creating a new topic

> sh bin/kafka-topics.sh --create --bootrstrap-server localhost:9092 --replication-factor 1 --partitions 1 --topic LOJA_NOVO_PEDIDO

## Listing topics

> sh bin/kafka-topics.sh --list --boostratp-server localhost:9092

## Create messages on producer

> sh bin/kafka-console-producer.sh --broker-list localhost:9092 --topic LOJA_NOVO_PEDIDO

## Consume messsages on consumer

> sh bin/kafka-console.consumer.sh --boostratp-server localhost:9092 --topic LOJA_NOVO_PEDIDO --from-beginning
