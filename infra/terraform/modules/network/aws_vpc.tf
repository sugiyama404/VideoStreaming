resource "aws_vpc" "vpc" {
  cidr_block                       = "10.0.0.0/16"
  enable_dns_support               = true
  enable_dns_hostnames             = true
  instance_tenancy                 = "default"
  assign_generated_ipv6_cidr_block = true

  tags = {
    Name = "${var.app_name}"
  }
}
