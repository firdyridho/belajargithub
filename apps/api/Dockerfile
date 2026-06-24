FROM golang:1.23-alpine AS builder

WORKDIR /app
COPY go.mod go.sum ./
RUN go mod download

COPY . .
RUN CGO_ENABLED=0 GOOS=linux go build -ldflags="-w -s" -o bin/server ./cmd/api

FROM gcr.io/distroless/static-debian12 AS runner
WORKDIR /app
COPY --from=builder /app/bin/server .
EXPOSE 8080
ENTRYPOINT ["./server"]
