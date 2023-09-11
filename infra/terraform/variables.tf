variable "app_name" {
  type    = string
  default = "node-web-app"
}

variable "image_name" {
  type    = string
  default = "pyapp"
}

variable "cluster_name" {
  type    = string
  default = "eks-study-cluster"
}

variable "region" {
  description = "AWS region to create resources in"
  type        = string
  default     = "ap-northeast-1"
}

variable "db_ports" {
  type = list(object({
    internal = number
    external = number
    protocol = string
  }))
  default = [
    {
      internal = 3306
      external = 3306
      protocol = "tcp"
    }
  ]
}
