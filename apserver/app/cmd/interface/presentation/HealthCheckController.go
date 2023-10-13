package presentation

import (
	pb "app/cmd/domain/pb/healthcheck"
	"context"

	"google.golang.org/grpc/codes"

	health "google.golang.org/grpc/health/grpc_health_v1"
	"google.golang.org/grpc/status"
)

type HelloHandler struct {
	pb.UnimplementedGreeterServer
}

func (h *HelloHandler) SayHello(ctx context.Context, in *pb.HelloRequest) (*pb.HelloReply, error) {
	return &pb.HelloReply{Message: "Hello " + in.Name}, nil
}

type HealthHandler struct {
	pb.UnimplementedHealthServer
}

func (h *HealthHandler) Check(context.Context, *health.HealthCheckRequest) (*health.HealthCheckResponse, error) {
	return &health.HealthCheckResponse{
		Status: health.HealthCheckResponse_SERVING,
	}, nil
}

func (h *HealthHandler) Watch(*health.HealthCheckRequest, health.Health_WatchServer) error {
	return status.Error(codes.Unimplemented, "watch is not implemented.")
}
