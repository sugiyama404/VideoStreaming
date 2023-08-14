package dao

import (
	"app/cmd/domain/model"
	"fmt"
	"os"

	"github.com/jinzhu/gorm"
	"golang.org/x/crypto/bcrypt"

	_ "github.com/go-sql-driver/mysql"
)

func InitDB(db *gorm.DB) {
	autoMigration(db)
	checkAdminAccount(db)
}

func ConnectDB() *gorm.DB {
	var path string = fmt.Sprintf("%s:%s@tcp(%s:3306)/%s?charset=utf8&parseTime=true",
		os.Getenv("USERNAME"), os.Getenv("PASSWORD"),
		os.Getenv("HOST"), os.Getenv("DBNAME"))
	db, err := gorm.Open("mysql", path)

	if err != nil {
		panic(err.Error())
	}
	fmt.Println("db connected: ", &db)
	return db
}

func autoMigration(db *gorm.DB) {
	db.AutoMigrate(&model.User{})
	db.AutoMigrate(&model.Video{})
}

func checkAdminAccount(db *gorm.DB) {
	admin_email := os.Getenv("ADMIN_EMAIL")
	password, _ := PasswordToHash("adminkanri")
	user := model.User{
		Name:     "admin",
		Password: password,
		Email:    admin_email,
		Role:     "admin",
	}
	db.FirstOrCreate(&user)
}

// private functions
func PasswordToHash(password string) (string, error) {
	hash, err := bcrypt.GenerateFromPassword([]byte(password), bcrypt.DefaultCost)
	if err != nil {
		return "", err
	}
	return string(hash), err
}
