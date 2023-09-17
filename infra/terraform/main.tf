terraform {
  required_version = "=1.0.6"
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 4.0"
    }
  }
}

provider "aws" {
  region = var.region
}

# ECR
module "ecr" {
  source     = "./modules/ecr"
  image_name = var.image_name
}

# Null Resource
module "after_ecr" {
  source     = "./modules/bash"
  region     = var.region
  image_name = var.image_name
}

# network
module "network" {
  source       = "./modules/network"
  app_name     = var.app_name
  db_ports     = var.db_ports
  cluster_name = var.cluster_name
}

# rds
module "rds" {
  source       = "./modules/rds"
  db_sbg_name  = module.network.db_sbg_name
  sg_rds_sg_id = module.network.sg_rds_sg_id
  db_ports     = var.db_ports
  app_name     = var.app_name
}
