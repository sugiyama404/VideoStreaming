output "db_sbg_name" {
  value = aws_db_subnet_group.db-sg.name
}

output "sg_rds_sg_id" {
  value = aws_security_group.rds_sg.id
}
