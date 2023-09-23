# VideoStreaming

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
