variable "app_name" {
  type    = string
  default = "video_stream"
}

variable "image_name1" {
  type    = string
  default = "apserver"
}

variable "image_name2" {
  type    = string
  default = "webserver"
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
