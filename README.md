# VideoStreaming

![ubuntu](https://img.shields.io/badge/Ubuntu-E95420?&logo=ubuntu&logoColor=white)
[![Docker](https://img.shields.io/badge/Docker-2CA5E0?logo=docker&logoColor=white)](https://www.docker.com/)
![Git](https://img.shields.io/badge/GIT-E44C30?logo=git&logoColor=white)
![gitignore](https://img.shields.io/badge/gitignore%20io-204ECF?logo=gitignoredotio&logoColor=white)
![GitHub Actions](https://img.shields.io/badge/github%20actions-%232671E5.svg?logo=githubactions&logoColor=white)
![HTML](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![CSS](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-323330?logo=javascript&logoColor=F7DF1E)
[![Docker Compose](https://img.shields.io/badge/Docker%20Compose-v3-blue.svg)](https://docs.docker.com/compose/)
![AWS](https://img.shields.io/badge/AWS-%23FF9900.svg?logo=amazon-aws&logoColor=white)
![Terraform](https://img.shields.io/badge/terraform-%235835CC.svg?logo=terraform&logoColor=white)
![MySQL](https://img.shields.io/badge/mysql-4479A1.svg?logo=mysql&logoColor=white)
![Next JS](https://img.shields.io/badge/Next-black?logo=next.js&logoColor=white)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?logo=typescript&logoColor=white)
![Kubernetes](https://img.shields.io/badge/kubernetes-%23326ce5.svg?logo=kubernetes&logoColor=white)

I have created a web application for video streaming services. This application allows users to stream their favorite movies and TV shows directly from the browser.

## Installation for docker

1. To begin, simple environmental constants must first be set for each service. Execute the following script.

```bash
bin/start/start_first_docker
docker compose up
```

2. Register at least 6 videos on the Admin page. The administrator account is automatically generated.

```
email: kanri@gmail.jp
pass: adminkanri
http://localhost/administrator
```

3. Enjoy watching the video!

## Start for EKS

1. Please execute the bashscript in the following order.

```
bin/infra_create/terraform_apply
bin/infra_create/eksctl_create
bin/infra_create/configmap_creater/start_first_docker
bin/infra_create/k8s_conf_create
bin/infra_create/k8s_all_apply
```

# tech info

[動画ストリーミングサイトを作ってみた。[Go/Nextjs13/gRPC/kubernetes/EKS]](https://qiita.com/sugiyama404/items/f5762e3fb3f2dbaa2973)
