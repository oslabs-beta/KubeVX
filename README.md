# KUBEVX

Welcome to KubeVX, an open-source solution crafted to enhance Kubernetes development with intuitive and efficient data presentation. Equipped with a user-friendly interface and powerful features, KubeVX simplifies Kubernetes complexities, allowing developers to focus sharply on optimizing application performance.

How To Setup dependencies
Make sure you have the requirements installed:
MacOS
Homebrew
Helm
Docker
Minikube
Grafana
Prometheus

Keep Docker running in the background.

First, clone our repo
![login](https://github.com/oslabs-beta/KubeVX/blob/main/[filename.gif]?raw=true)

PROMETHEUS


If you haven’t installed Helm, use homebrew “brew install helm”
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
6. Search import dashboard -> input 1860 -> chose Prometheus -> import
    a. repeat step 6 for 7249 and 8588

SET ALLOW EMBEDDING
1. Run this command in your terminal “sudo pico /opt/homebrew/etc/grafana/grafana.ini”
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

How to Use KubeVX

1. You will first see a login page. Go ahead and create an account.
2. Next, input data on your clusters so KubeVX can access it  
![add cluster](https://github.com/oslabs-beta/KubeVX/blob/main/loginAndAdd.gif?raw=true)
3. You should be able to see metrics graphs under Dashboard  
![dashboard](https://github.com/oslabs-beta/KubeVX/blob/main/dashboard.gif?raw=true)
4. Cluster View has an AI chatbot. Please wait for the AI to give you an overview before talking to it. It will only answer K8s related questions.  
![clusterview AI](https://github.com/oslabs-beta/KubeVX/blob/main/clusterAndAI?raw=true)
5. This is the learn kubernetes page. Click around and see definitions of each term.
![learn k8s](https://github.com/oslabs-beta/KubeVX/blob/main/learnkubernetes.gif?raw=true)  
6. You can use the custom metrics if you want to access specific information about your cluster that’s not displayed on the dashboard  
![custom metrics](https://github.com/oslabs-beta/KubeVX/blob/main/customMetrics.gif?raw=true)
7. The logs provide information of your cluster’s status while running
![logs](https://github.com/oslabs-beta/KubeVX/blob/main/logs.gif?raw=true)
8. Alert page displays anomalies in your clusters so you can clearly see what needs fixing
![alert](https://github.com/oslabs-beta/KubeVX/blob/main/alerts.gif?raw=true)