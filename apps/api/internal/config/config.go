package config

import "os"

type Config struct {
	Server   ServerConfig
	Database DatabaseConfig
	Redis    RedisConfig
	JWT      JWTConfig
}

type ServerConfig struct {
	Port string
	Env  string
}

type DatabaseConfig struct {
	Host     string
	Port     string
	Name     string
	User     string
	Password string
	SSLMode  string
}

type RedisConfig struct {
	Address  string
	Password string
	Database int
}

type JWTConfig struct {
	Secret        string
	RefreshSecret string
	ExpiryHours   int
}

func Load() *Config {
	return &Config{
		Server: ServerConfig{
			Port: getEnv("API_PORT", "8080"),
			Env:  getEnv("APP_ENV", "development"),
		},
		Database: DatabaseConfig{
			Host:     getEnv("POSTGRES_HOST", "localhost"),
			Port:     getEnv("POSTGRES_PORT", "5432"),
			Name:     getEnv("POSTGRES_DB", "tiss_db"),
			User:     getEnv("POSTGRES_USER", "tiss_user"),
			Password: getEnv("POSTGRES_PASSWORD", ""),
			SSLMode:  getEnv("POSTGRES_SSLMODE", "disable"),
		},
		Redis: RedisConfig{
			Address:  getEnv("REDIS_ADDRESS", "localhost:6379"),
			Password: getEnv("REDIS_PASSWORD", ""),
			Database: 0,
		},
		JWT: JWTConfig{
			Secret:        getEnv("JWT_SECRET", ""),
			RefreshSecret: getEnv("JWT_REFRESH_SECRET", ""),
			ExpiryHours:   24,
		},
	}
}

func getEnv(key, fallback string) string {
	if v := os.Getenv(key); v != "" {
		return v
	}
	return fallback
}
