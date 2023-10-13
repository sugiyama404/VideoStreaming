# For development phase
FROM golang:1.19-buster as development
WORKDIR /app

ENV HOST dbserver
ENV DBNAME todoproject
ENV USERNAME goMySql1
ENV PASSWORD goMySql1

COPY ./app /app

RUN apt-get update \
    && apt-get install -y \
    protobuf-compiler=3.6.1.3-2+deb10u1 unzip=6.0-23+deb10u3 \
    --no-install-recommends \
    && apt-get clean \
    && rm -rf /var/lib/apt/lists/*

RUN go mod download

RUN go install google.golang.org/protobuf/cmd/protoc-gen-go@v1.28
RUN go install google.golang.org/grpc/cmd/protoc-gen-go-grpc@v1.2

# build phase
FROM golang:1.19-buster as builder

ENV CGO_ENABLED=0
ENV GOOS=linux
ENV GOARCH=amd64
WORKDIR /app

COPY go.mod ./
COPY go.sum ./
RUN go mod download

COPY ./app .

RUN go build -o main ./cmd/...

# Adding the grpc_health_probe
RUN GRPC_HEALTH_PROBE_VERSION=v0.3.2 && \
    wget -qO/bin/grpc_health_probe https://github.com/grpc-ecosystem/grpc-health-probe/releases/download/${GRPC_HEALTH_PROBE_VERSION}/grpc_health_probe-linux-amd64 && \
    chmod +x /bin/grpc_health_probe

# deploy phase
FROM gcr.io/distroless/static-debian11:nonroot
WORKDIR /

COPY --from=builder /app/main /main
COPY --from=builder /bin/grpc_health_probe /grpc_health_probe
USER nonroot
EXPOSE 8080

CMD [ "/main" ]
