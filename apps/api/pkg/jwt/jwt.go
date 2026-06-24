package jwt

import (
	"time"

	gojwt "github.com/golang-jwt/jwt/v5"
)

type Claims struct {
	UserID   string `json:"user_id"`
	Role     string `json:"role"`
	Division string `json:"division"`
	Guild    string `json:"guild"`
	gojwt.RegisteredClaims
}

func Generate(userID, role, division, guild, secret string, expiry time.Duration) (string, error) {
	claims := Claims{
		UserID:   userID,
		Role:     role,
		Division: division,
		Guild:    guild,
		RegisteredClaims: gojwt.RegisteredClaims{
			ExpiresAt: gojwt.NewNumericDate(time.Now().Add(expiry)),
			IssuedAt:  gojwt.NewNumericDate(time.Now()),
		},
	}
	return gojwt.NewWithClaims(gojwt.SigningMethodHS256, claims).SignedString([]byte(secret))
}

func Parse(tokenStr, secret string) (*Claims, error) {
	claims := &Claims{}
	_, err := gojwt.ParseWithClaims(tokenStr, claims, func(t *gojwt.Token) (any, error) {
		return []byte(secret), nil
	})
	return claims, err
}
