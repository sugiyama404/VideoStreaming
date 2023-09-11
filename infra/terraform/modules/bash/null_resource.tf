resource "null_resource" "default" {
  provisioner "local-exec" {
    command = "aws ecr get-login-password --region ${var.region} | docker login --username AWS --password-stdin ${data.aws_caller_identity.self.account_id}.dkr.ecr.ap-northeast-1.amazonaws.com"
  }

  provisioner "local-exec" {
    command = "docker build -t ${var.image_name1} --file ../apserver/Dockerfile ../apserver/"
  }

  provisioner "local-exec" {
    command = "docker build -t ${var.image_name2} --file ../webserver/Dockerfile ../webserver/"
  }

  provisioner "local-exec" {
    command = "docker tag ${var.image_name1}:latest ${data.aws_caller_identity.self.account_id}.dkr.ecr.ap-northeast-1.amazonaws.com/${var.image_name1}:latest"
  }

  provisioner "local-exec" {
    command = "docker tag ${var.image_name2}:latest ${data.aws_caller_identity.self.account_id}.dkr.ecr.ap-northeast-1.amazonaws.com/${var.image_name2}:latest"
  }

  provisioner "local-exec" {
    command = "docker push ${data.aws_caller_identity.self.account_id}.dkr.ecr.ap-northeast-1.amazonaws.com/${var.image_name1}:latest"
  }

  provisioner "local-exec" {
    command = "docker push ${data.aws_caller_identity.self.account_id}.dkr.ecr.ap-northeast-1.amazonaws.com/${var.image_name2}:latest"
  }
}
