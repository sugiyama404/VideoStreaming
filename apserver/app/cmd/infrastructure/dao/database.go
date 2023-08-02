package dao

import (
	"app/cmd/domain/model"
	"fmt"
	"os"

	"github.com/jinzhu/gorm"

	_ "github.com/go-sql-driver/mysql"
)

func InitDB(db *gorm.DB) {
	autoMigration(db)
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
}
