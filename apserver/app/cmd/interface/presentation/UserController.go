package presentation

import (
	"app/cmd/domain/form"
	pb "app/cmd/domain/pb/user"
	"app/cmd/interface/repository"
	"app/cmd/usecase"
	"context"

	"golang.org/x/crypto/bcrypt"

	"github.com/jinzhu/gorm"
)

type UserServer struct {
	Interactor usecase.UserUseCase
	pb.UnimplementedProfileServer
}

func InteractorUser(conn *gorm.DB) *UserServer {
	return &UserServer{
		Interactor: usecase.UserUseCase{
			Repository: repository.UserRepository{
				Conn: conn,
			},
		},
	}
}

func (u *UserServer) AuthUser(ctx context.Context, in *pb.AuthUserRequest) (*pb.AuthUserReply, error) {
	user, err := u.Interactor.AuthUser(in.Email)
	if err != nil {
		return &pb.AuthUserReply{Isuser: false}, nil
	}

	inhash, err := PasswordToHash(in.Password)
	if err != nil {
		return &pb.AuthUserReply{Isuser: false}, nil
	}
	err = HashCompare(user.Password, inhash)
	if err != nil {
		return &pb.AuthUserReply{Isuser: false}, nil
	}
	userinfo := pb.UserInfo{Name: user.Name, Email: user.Email, Role: user.Role}
	return &pb.AuthUserReply{Isuser: true, Info: &userinfo}, nil
}

func (u *UserServer) RegisterUser(ctx context.Context, in *pb.RegisterRequest) (*pb.Message, error) {
	stringPassword, err := PasswordToHash(in.Password)
	if err != nil {
		return &pb.Message{Message: err.Error()}, nil
	}

	form := form.UserForm{Name: in.Name, Email: in.Email, Password: stringPassword, Role: in.Role}
	flag, err := u.Interactor.CheckExitEmailAddressAndCreateUser(form)
	if err != nil {
		return &pb.Message{Message: err.Error()}, nil
	}
	if !flag {
		return &pb.Message{Message: "already exists"}, nil
	}

	return &pb.Message{Message: "success"}, nil
}

// private functions
func PasswordToHash(password string) (string, error) {
	hash, err := bcrypt.GenerateFromPassword([]byte(password), bcrypt.DefaultCost)
	if err != nil {
		return "", err
	}
	return string(hash), err
}

func HashCompare(hash1 string, hash2 string) error {
	return bcrypt.CompareHashAndPassword([]byte(hash1), []byte(hash2))
}
