<div align="center"> 

![Logo](src/public/assets/banner.png)

[![JavaScript](https://img.shields.io/badge/javascript-yellow?style=for-the-badge&logo=javascript&logoColor=white)](https://www.javascript.com/)
[![NodeJS](https://img.shields.io/badge/Nodejs-%23339933?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/)
[![Express.js](https://img.shields.io/badge/expressjs-%23D6AC32?style=for-the-badge&logo=javascript&logoColor=white)](https://expressjs.com/)
[![React](https://img.shields.io/badge/react-%234E9FF9?style=for-the-badge&logo=react&logoColor=white)](https://reactjs.org/)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![Webpack](https://img.shields.io/badge/webpack-%236DB4F2?style=for-the-badge&logo=webpack&logoColor=white)](https://webpack.js.org/)
[![Docker](https://img.shields.io/badge/docker-%232496ED?style=for-the-badge&logo=docker&logoColor=white)](https://www.docker.com/)
[![Kubernetes](https://img.shields.io/badge/kubernetes-%23326CE5?style=for-the-badge&logo=kubernetes&logoColor=white)](https://kubernetes.io/)
[![Prometheus](https://img.shields.io/badge/prometheus-%23E6522C?style=for-the-badge&logo=prometheus&logoColor=white)](https://prometheus.io/)
[![Grafana](https://img.shields.io/badge/grafana-%23F46800?style=for-the-badge&logo=grafana&logoColor=white)](https://grafana.com/)
[![ChartJS](https://img.shields.io/badge/chart.js-%23FF6384?style=for-the-badge&logo=chart.js&logoColor=white)](https://www.chartjs.org/)
[![Helm](https://img.shields.io/badge/helm-090E6F?style=for-the-badge&logo=helm&logoColor=white)](https://helm.sh/)
[![GKE](https://img.shields.io/badge/GKE-%234285F4?style=for-the-badge&logo=googlecloud&logoColor=white)](https://cloud.google.com/kubernetes-engine)
[![AKS](https://img.shields.io/badge/AKS-326CE5?style=for-the-badge&logo=microsoft-azure&logoColor=white)](https://azure.microsoft.com/en-us/services/kubernetes-service/)
[![EKS](https://img.shields.io/badge/EKS-232F3E?style=for-the-badge&logo=amazon-aws&logoColor=white)](https://aws.amazon.com/eks/)
[![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)](https://www.mongodb.com/)
[![MaterialUI](https://img.shields.io/badge/Material%20UI-007FFF?style=for-the-badge&logo=mui&logoColor=white)](https://mui.com/)
[![Redux](https://img.shields.io/badge/Redux-593D88?style=for-the-badge&logo=redux&logoColor=white)](https://redux.js.org/)
[![JWT](https://img.shields.io/badge/JWT-000000?style=for-the-badge&logo=JSON%20web%20tokens&logoColor=white)](https://jwt.io/)
[![ReactTable](https://img.shields.io/badge/react%20table-FF4154?style=for-the-badge&logo=react%20table&logoColor=white)](https://www.npmjs.com/package/react-table)
![OAUTH](https://img.shields.io/badge/OAUTH2.0-grey?style=for-the-badge&logo=JSON%20web%20tokens)
![Bcrypt](https://img.shields.io/badge/BCRYPT-grey?style=for-the-badge&logo=letsencrypt)
![Webpack](https://img.shields.io/badge/webpack-%238DD6F9.svg?style=for-the-badge&logo=webpack&logoColor=black)
![Babel](https://img.shields.io/badge/Babel-F9DC3e?style=for-the-badge&logo=babel&logoColor=black)
![GitHub](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white)
<!-- [![image]({BadgeURLHere})]() -->

---

<p align="center" style="font-size: 1em">
<a name="website" href="https://www.kubevx.com">Website</a>
<a name="medium" href="https://medium.com/@kubevx123/kubevx-an-intuitive-kubernetes-devtool-39cafbb2fca9">Medium</a>
<a name="linkedin" href="https://www.linkedin.com/company/kubevx">LinkedIn</a>
</p>
<br /><br />

</div>

# KUBEVX

Welcome to KubeVX, an open-source solution crafted to enhance Kubernetes development with intuitive and efficient data presentation. Equipped with a user-friendly interface and powerful features, KubeVX simplifies Kubernetes complexities, allowing developers to focus sharply on optimizing application performance.

## Features

1. You will first see a login page. Go ahead and create an account.<br><br>

2. Next, input data on your clusters so KubeVX can access it  <br>

![add cluster](https://github.com/oslabs-beta/KubeVX/blob/main/src/public/assets/loginAndAdd.gif)<br><br><br>


3. You should be able to see metrics graphs under Dashboard  <br>

![dashboard](https://github.com/oslabs-beta/KubeVX/blob/main/src/public/assets/dashboard.gif)<br><br><br>

4. Cluster View features an AI chatbot powered by the OpenAI API. You will have to purchase an Open AI API key to use this feature. After purchasing, input your API key in this format "OPENAI_API_KEY={insert api Key}" in a .env file in your root folder. The logic to access this key is already built out at the top of AIController.js . The chatbot is programmed to only answer K8s related questions.  <br>

![clusterview AI](https://github.com/oslabs-beta/KubeVX/blob/main/src/public/assets/clusterAndAI.gif)<br><br><br>

5. This is the learn kubernetes page. Click around and see definitions of each term. <br>

![learn k8s](https://github.com/oslabs-beta/KubeVX/blob/main/src/public/assets/learnkubernetes.gif)<br><br><br>

6. You can use the custom metrics if you want to access specific information about your cluster that’s not displayed on the dashboard  <br>

![custom metrics](https://github.com/oslabs-beta/KubeVX/blob/main/src/public/assets/customMetrics.gif)<br><br><br>

7. The logs provide information of your cluster’s status while running <br>

![logs](https://github.com/oslabs-beta/KubeVX/blob/main/src/public/assets/logs.gif)<br><br><br>

8. Alert page displays anomalies in your clusters so you can see what needs fixing <br>

![alert](https://github.com/oslabs-beta/KubeVX/blob/main/src/public/assets/alerts.gif)

## Setup

Make sure you have the requirements installed:
MacOS,
Homebrew,
Helm,
Docker,
Minikube,
Grafana,
Prometheus.

Keep Docker running in the background.

First, clone our repo <br>
<br>
### Prometheus
1. If you haven’t installed Helm, use homebrew: 
```bash
brew install helm
```
2. Run these commands to install prometheus and helm-charts:
```bash
helm repo add prometheus-community https://prometheus-community.github.io/helm-charts
```
```bash
helm repo update
```
```bash
helm install prometheus prometheus-community/prometheus
```
3. This following command routes the port for Prometheus:
```bash
kubectl port-forward svc/prometheus-server 9090:80 -n default
```

### Grafana
1. Run these two commands:
```bash
brew install grafana
```
```bash
brew services start grafana
```

2. Open your web browser and navigate to http://localhost:3000/. 

Log in with the default credentials: <br>
Username: admin <br>
Password: admin

Prometheus must be running on localhost:9090.

3. Search import dashboard -> input 1860 -> chose Prometheus -> import <br>
Repeat this step for 7249 and 8588.


### Set Allow Embedding
1. Run this command in your terminal:
```bash
sudo pico /opt/homebrew/etc/grafana/grafana.ini
```
If you have a Mac with the Intel chip, use this command instead:
```bash
sudo pico /usr/homebrew/etc/grafana/grafana.ini
```

2. Scroll through the terminal with arrow keys to find the security section.

Set “allow_embedding = true” and make sure it is not commented out with a #. 

Control + O to write out, press return/enter key to confirm and control + X to exit. 

3. Run this command for changes to take effect:
```bash
brew services restart grafana
```

4. Go to http://localhost:3000/admin/settings on your browser to confirm.


### Set up YAML files
Run “minikube start” in your terminal to initialize minikube. It may take a while if this is a first-time setup.

Now you need to apply the yaml files at the root directory of kubeVX:

Run the following commands in your terminal:

```bash
kubectl apply -f webapp-deployment.yaml
```

```bash
kubectl apply -f webapp-service.yaml
```

```bash
minikube service webapp-service
```

### Start Application

```bash
npm install
```

```bash
npm run build
```

```bash
npm run dev
```

Once you complete setting up, you can navigate to localhost:7070 in your browser to see the result.

## Contributing

Contributions play a vital role in the open-source community. Any contributions are greatly appreciated!

- Fork the project.
- Create and work off of your feature branch.
- Create a pull request with a detailed description of your changes from your feature branch to dev branch.
- Please let us know when PR submission is done. Once the changes are reviewed and approved, we will merge your code into the main repository.

## Our Team

- Jerry Trinh [GitHub](https://github.com/jtrrain) | [LinkedIn](https://www.linkedin.com/in/jtjerrytrinh/)
- Jordan Palmer [GitHub](https://github.com/jordansjpalmer) | [LinkedIn](https://www.linkedin.com/in/jordansjpalmer/)
- Mai Dinh [GitHub](https://github.com/mai033) | [LinkedIn](https://www.linkedin.com/in/mai-dahlia)
- Patrick Wang [GitHub](https://github.com/pwang040) | [LinkedIn](https://www.linkedin.com/in/pwang040/)
- Pegah Chendari [GitHub](https://github.com/PegahCh) | [LinkedIn](https://www.linkedin.com/in/pegah-chendari/)
