import pika
import datetime

def main():
    print("Hello, send")
    connection = pika.BlockingConnection(pika.ConnectionParameters('localhost'))
    channel = connection.channel()
    channel.queue_declare(queue='hello')
    for  i in range(10):
        message_str = "msg[{}]: hello, world. It is now {}".format(i, datetime.datetime.now())
        channel.basic_publish(exchange='',
                              routing_key='hello',
                              body=message_str)
        print(" [x] Sent '{}'".format(message_str))
    connection.close()

if __name__ == '__main__':
    main()