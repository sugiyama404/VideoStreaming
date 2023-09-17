resource "aws_subnet" "public_subnet_1a" {
  vpc_id                          = aws_vpc.vpc.id
  cidr_block                      = "10.0.11.0/24"
  availability_zone               = "ap-northeast-1a"
  map_public_ip_on_launch         = true
  ipv6_cidr_block                 = cidrsubnet(aws_vpc.vpc.ipv6_cidr_block, 8, 0)
  assign_ipv6_address_on_creation = true

  tags = {
    Name                     = "${var.app_name}-public-1a"
    "kubernetes.io/role/elb" = 1
  }
}

resource "aws_subnet" "public_subnet_1c" {
  vpc_id                          = aws_vpc.vpc.id
  cidr_block                      = "10.0.12.0/24"
  availability_zone               = "ap-northeast-1c"
  map_public_ip_on_launch         = true
  ipv6_cidr_block                 = cidrsubnet(aws_vpc.vpc.ipv6_cidr_block, 8, 1)
  assign_ipv6_address_on_creation = true

  tags = {
    Name                     = "${var.app_name}-public-1c"
    "kubernetes.io/role/elb" = 1
  }
}

resource "aws_subnet" "private_subnet_1a" {
  vpc_id                          = aws_vpc.vpc.id
  cidr_block                      = "10.0.21.0/24"
  availability_zone               = "ap-northeast-1a"
  map_public_ip_on_launch         = true
  ipv6_cidr_block                 = cidrsubnet(aws_vpc.vpc.ipv6_cidr_block, 8, 2)
  assign_ipv6_address_on_creation = true

  tags = {
    Name                              = "${var.app_name}-private-1a"
    "kubernetes.io/role/internal-elb" = 1
  }
}

resource "aws_subnet" "private_subnet_1c" {
  vpc_id                          = aws_vpc.vpc.id
  cidr_block                      = "10.0.22.0/24"
  availability_zone               = "ap-northeast-1c"
  map_public_ip_on_launch         = true
  ipv6_cidr_block                 = cidrsubnet(aws_vpc.vpc.ipv6_cidr_block, 8, 3)
  assign_ipv6_address_on_creation = true

  tags = {
    Name                              = "${var.app_name}-private-1c"
    "kubernetes.io/role/internal-elb" = 1
  }
}

resource "aws_db_subnet_group" "db-sg" {
  name       = "db-sg"
  subnet_ids = [aws_subnet.private_subnet_1a.id, aws_subnet.private_subnet_1c.id]
}

