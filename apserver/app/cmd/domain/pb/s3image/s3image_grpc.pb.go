// Code generated by protoc-gen-go-grpc. DO NOT EDIT.
// versions:
// - protoc-gen-go-grpc v1.2.0
// - protoc             v3.6.1
// source: cmd/domain/proto/s3image.proto

package s3image

import (
	context "context"
	grpc "google.golang.org/grpc"
	codes "google.golang.org/grpc/codes"
	status "google.golang.org/grpc/status"
)

// This is a compile-time assertion to ensure that this generated file
// is compatible with the grpc package it is being compiled against.
// Requires gRPC-Go v1.32.0 or later.
const _ = grpc.SupportPackageIsVersion7

// ImagetransporterClient is the client API for Imagetransporter service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://pkg.go.dev/google.golang.org/grpc/?tab=doc#ClientConn.NewStream.
type ImagetransporterClient interface {
	ImageUpload(ctx context.Context, in *ImageUpoadRequest, opts ...grpc.CallOption) (*Message, error)
	ImageDownload(ctx context.Context, in *ImageDownloadRequest, opts ...grpc.CallOption) (*ImageDownloadResponse, error)
}

type imagetransporterClient struct {
	cc grpc.ClientConnInterface
}

func NewImagetransporterClient(cc grpc.ClientConnInterface) ImagetransporterClient {
	return &imagetransporterClient{cc}
}

func (c *imagetransporterClient) ImageUpload(ctx context.Context, in *ImageUpoadRequest, opts ...grpc.CallOption) (*Message, error) {
	out := new(Message)
	err := c.cc.Invoke(ctx, "/s3image.Imagetransporter/ImageUpload", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *imagetransporterClient) ImageDownload(ctx context.Context, in *ImageDownloadRequest, opts ...grpc.CallOption) (*ImageDownloadResponse, error) {
	out := new(ImageDownloadResponse)
	err := c.cc.Invoke(ctx, "/s3image.Imagetransporter/ImageDownload", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

// ImagetransporterServer is the server API for Imagetransporter service.
// All implementations must embed UnimplementedImagetransporterServer
// for forward compatibility
type ImagetransporterServer interface {
	ImageUpload(context.Context, *ImageUpoadRequest) (*Message, error)
	ImageDownload(context.Context, *ImageDownloadRequest) (*ImageDownloadResponse, error)
	mustEmbedUnimplementedImagetransporterServer()
}

// UnimplementedImagetransporterServer must be embedded to have forward compatible implementations.
type UnimplementedImagetransporterServer struct {
}

func (UnimplementedImagetransporterServer) ImageUpload(context.Context, *ImageUpoadRequest) (*Message, error) {
	return nil, status.Errorf(codes.Unimplemented, "method ImageUpload not implemented")
}
func (UnimplementedImagetransporterServer) ImageDownload(context.Context, *ImageDownloadRequest) (*ImageDownloadResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method ImageDownload not implemented")
}
func (UnimplementedImagetransporterServer) mustEmbedUnimplementedImagetransporterServer() {}

// UnsafeImagetransporterServer may be embedded to opt out of forward compatibility for this service.
// Use of this interface is not recommended, as added methods to ImagetransporterServer will
// result in compilation errors.
type UnsafeImagetransporterServer interface {
	mustEmbedUnimplementedImagetransporterServer()
}

func RegisterImagetransporterServer(s grpc.ServiceRegistrar, srv ImagetransporterServer) {
	s.RegisterService(&Imagetransporter_ServiceDesc, srv)
}

func _Imagetransporter_ImageUpload_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(ImageUpoadRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(ImagetransporterServer).ImageUpload(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/s3image.Imagetransporter/ImageUpload",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(ImagetransporterServer).ImageUpload(ctx, req.(*ImageUpoadRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _Imagetransporter_ImageDownload_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(ImageDownloadRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(ImagetransporterServer).ImageDownload(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/s3image.Imagetransporter/ImageDownload",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(ImagetransporterServer).ImageDownload(ctx, req.(*ImageDownloadRequest))
	}
	return interceptor(ctx, in, info, handler)
}

// Imagetransporter_ServiceDesc is the grpc.ServiceDesc for Imagetransporter service.
// It's only intended for direct use with grpc.RegisterService,
// and not to be introspected or modified (even as a copy)
var Imagetransporter_ServiceDesc = grpc.ServiceDesc{
	ServiceName: "s3image.Imagetransporter",
	HandlerType: (*ImagetransporterServer)(nil),
	Methods: []grpc.MethodDesc{
		{
			MethodName: "ImageUpload",
			Handler:    _Imagetransporter_ImageUpload_Handler,
		},
		{
			MethodName: "ImageDownload",
			Handler:    _Imagetransporter_ImageDownload_Handler,
		},
	},
	Streams:  []grpc.StreamDesc{},
	Metadata: "cmd/domain/proto/s3image.proto",
}