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
FROM golang:1.19-buster as build

ENV CGO_ENABLED=0
ENV GOOS=linux
ENV GOARCH=amd64
WORKDIR /app

COPY go.mod ./
COPY go.sum ./
RUN go mod download

COPY ./app .

RUN go build -o main ./cmd/...

# deploy phase
FROM gcr.io/distroless/static-debian11:nonroot
WORKDIR /

COPY --from=build /app/main /main
USER nonroot
EXPOSE 8080

CMD [ "/main" ]
