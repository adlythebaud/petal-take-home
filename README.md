# petal-take-home

## Description
This is a simple web service written in node js. There are two endpoints, a home `/` endpoint and a POST `/v1` endpoint.
The purpose of this repo is to show the capabilities of automated deployments to a cloud provider.

## Set-up
The app is designed to run on Google Kubernetes Engine (GKE). The setup is supposed to be that the `deployment.yaml` file is ran when any commit on the main branch happens. There is a build trigger on the Google Cloud Platform (GCP) that builds whenever a commit happens on the main branch. The build trigger runs the`main.yaml` file.

## Improvements
The goal was to have the `main.yaml` file run the `deployment.yaml` file, which would deploy the app to the cluster I have set up on the GKE. However, I ran into authentication issues and was not able to get the app actually deployed to the GKE. The reason why is that my the Google Cloud Container Registry would not recognize my cached credentials, which docker was supposed to use. So whenever a build happens which builds the dockerfile, it wouldn't be able to publish it and my cluster wouldn't be able to find it in the container rgistry. With more time, I would have fixed the credentials issue.

The web service itself is supposed to return a reversed string, however I didn't have enough time to add that because I was focused on getting my web service running so that I could host it.

## Productionizing
To productionize this app, I would have chainged the deployment.yaml to get triggered once a PR would happen. I would have the app be deployed to a dev then staging environment, where an approval form would be placed as a gatekeeper between stage and production.
