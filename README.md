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
<!-- [![image]({BadgeURLHere})]() -->

---

<p align="center" style="font-size: 1em">
<a name="website" href="https://www.kubevx.com">Website</a>
<a name="medium" href="https://medium.com/@kubevx">Medium</a>
<a name="linkedin" href="https://www.linkedin.com/company/kubevx">LinkedIn</a>
</p>
<br /><br />

</div>

# KUBEVX

Welcome to KubeVX, an open-source solution crafted to enhance Kubernetes development with intuitive and efficient data presentation. Equipped with a user-friendly interface and powerful features, KubeVX simplifies Kubernetes complexities, allowing developers to focus sharply on optimizing application performance.

How to use KubeVX

1. You will first see a login page. Go ahead and create an account.
2. Next, input data on your clusters so KubeVX can access it  <br>
![add cluster](https://raw.githubusercontent.com/oslabs-beta/KubeVX/blob/main/loginAndAdd.gif?raw=true)
3. You should be able to see metrics graphs under Dashboard  <br>
![dashboard](https://raw.githubusercontent.com/oslabs-beta/KubeVX/blob/main/dashboard.gif?raw=true)
4. Cluster View features an AI chatbot powered by the OpenAI API. You will have to purchase an Open AI API key to use this feature. After purchasing, input your API key in this format "OPENAI_API_KEY={insert api Key}" in a .env file in your root folder. The logic to access this key is already built out at the top of AIController.js . The chatbot is programmed to only answer K8s related questions.  <br>
![clusterview AI](https://raw.githubusercontent.com/oslabs-beta/KubeVX/blob/main/clusterAndAI?raw=true)
5. This is the learn kubernetes page. Click around and see definitions of each term. <br>
![learn k8s](https://raw.githubusercontent.com/oslabs-beta/KubeVX/blob/main/learnkubernetes.gif?raw=true)  
6. You can use the custom metrics if you want to access specific information about your cluster that’s not displayed on the dashboard  <br>
![custom metrics](https://raw.githubusercontent.com/oslabs-beta/KubeVX/blob/main/customMetrics.gif?raw=true)
7. The logs provide information of your cluster’s status while running <br>
![logs](https://raw.githubusercontent.com/oslabs-beta/KubeVX/blob/main/logs.gif?raw=true)
8. Alert page displays anomalies in your clusters so you can clearly see what needs fixing <br>
![alert](https://raw.githubusercontent.com/oslabs-beta/KubeVX/blob/main/alerts.gif?raw=true)

How to Setup Dependencies <br>
Make sure you have the requirements installed:
MacOS
Homebrew
Helm
Docker
Minikube
Grafana
Prometheus

Keep Docker running in the background.

First, clone our repo <br>
![cloning](https://raw.githubusercontent.com/oslabs-beta/KubeVX/blob/main/cloningKubeVX.gif?raw=true)

PROMETHEUS <br>
If you haven’t installed Helm, use homebrew “brew install helm” <br>
Run these commands to install prometheus and helm-charts
1. helm repo add prometheus-community https://prometheus-community.github.io/helm-charts
2. helm repo update
3. helm install prometheus prometheus-community/prometheus
4. Run “kubectl port-forward svc/prometheus-server 9090:80 -n default” to route the port for prometheus

GRAFANA
1. brew install grafana
2. brew services start grafana
3. Open your web browser and navigate to http://localhost:3000/
4. Log in with the default credentials:
Username: admin
Password: admin
5. Prometheus has to be running on localhost:9090
6. Search import dashboard -> input 1860 -> chose Prometheus -> import <br>
    a. repeat step 6 for 7249 and 8588

SET ALLOW EMBEDDING
1. Run this command in your terminal “sudo pico /opt/homebrew/etc/grafana/grafana.ini” <br>
   a. intel chip mac: sudo pico /usr/homebrew/etc/grafana/grafana.ini
2. Scroll through the terminal with arrow keys to find the security section
3. Set “allow_embedding = true” and make sure it is not commented out with a # 
4. Control + O to write out, press return/enter key to confirm and control + X to exit 
5. Run “brew services restart grafana” for changes to take effect.
6. Go to http://localhost:3000/admin/settings on your browser to confirm


Run “minikube start” to initialize minikube. It may take a while if this is a first time setup.

Now you need to apply the yaml files at the root directory of kubeVX:

1. run “kubectl apply -f webapp-deployment.yaml” in your terminal

2. Run this command in your terminal “kubectl apply -f webapp-service.yaml”

3. Run this command in your terminal “minikube service webapp-service”

Lastly, run these commands:

1. npm install

2. npm run build

3. npm run dev

Once you complete setting up, you can navigate to localhost:7070 in your browser to see the result.

