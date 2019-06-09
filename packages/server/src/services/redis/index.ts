import redis, { RedisClient } from 'redis';
import { promisify } from 'util';

class Client {
  private readonly client: RedisClient;
  private readonly commands: {
    expire: (key: string, expireInSeconds: number) => Promise<number>;
    get: (key: string) => Promise<string>;
    llen: (key: string) => Promise<number>;
    lrange: (key: string, start: number, stop: number) => Promise<string[]>;
    rpush: (key: string, values: any[]) => Promise<number>;
    setex: (key: string, seconds: number, value: string) => Promise<'OK'>;
  };

  constructor() {
    const client = redis.createClient({
      host: 'redis',
      port: 6379,
      enable_offline_queue: false,
    });
    client.on('error', error => console.error(`Redis client error: ${error}`));

    this.commands = {
      expire: promisify(client.expire).bind(client),
      get: promisify(client.get).bind(client),
      llen: promisify(client.llen).bind(client),
      lrange: promisify(client.lrange).bind(client),
      rpush: promisify(client.rpush).bind(client),
      setex: promisify(client.setex).bind(client),
    };

    this.client = client;
  }

  public get<T>(key: string): Promise<T> {
    return this.commands.get(key).then(result => JSON.parse(result));
  }

  public llen(key: string): Promise<number> {
    return this.commands.llen(key);
  }

  public lrange<T>(
    key: string,
    start: number = 0,
    stop: number = -1,
  ): Promise<T[]> {
    return this.commands.lrange(key, start, stop).then(result => {
      return result.map(text => JSON.parse(text));
    });
  }

  public setex(key: string, seconds: number, value: any) {
    return this.commands.setex(key, seconds, JSON.stringify(value));
  }

  public expire(key: string, expireInSeconds: number = 0) {
    return this.commands.expire(key, expireInSeconds);
  }

  public rpush(key: string, values: any[]) {
    return this.commands.rpush(key, values.map(item => JSON.stringify(item)));
  }

  public end() {
    this.client.end(true);
  }
}

export const redisClientInstance = new Client();
