package cache

import (
	"context"
	"time"

	"github.com/redis/go-redis/v9"
	"github.com/tiss-or-id/api/internal/config"
)

type RedisClient struct {
	client *redis.Client
}

func Connect(cfg config.RedisConfig) (*RedisClient, error) {
	client := redis.NewClient(&redis.Options{
		Addr:     cfg.Address,
		Password: cfg.Password,
		DB:       cfg.Database,
	})

	ctx, cancel := context.WithTimeout(context.Background(), 3*time.Second)
	defer cancel()

	if err := client.Ping(ctx).Err(); err != nil {
		return nil, err
	}

	return &RedisClient{client: client}, nil
}

func (redisClient *RedisClient) Increment(ctx context.Context, key string, ttl time.Duration) (int64, error) {
	count, err := redisClient.client.Incr(ctx, key).Result()
	if err != nil {
		return 0, err
	}

	if count == 1 {
		if err := redisClient.client.Expire(ctx, key, ttl).Err(); err != nil {
			return 0, err
		}
	}

	return count, nil
}

func (redisClient *RedisClient) Close() error {
	return redisClient.client.Close()
}
