# petal-take-home
This webservice will be available until 11/23/2020 [here](http://35.231.74.206:3000/).

## Description
This is a simple web service written in node js. There are two endpoints, a `/` endpoint and a POST `/v1` endpoint.
The purpose of this repo is to show the capabilities of automated deployments to a cloud provider.

## Set-up
The app is designed to run on Google Kubernetes Engine (GKE). The setup is that the `deploy/deployment.yaml` file is ran when any commit happens. There is a build trigger on the Google Cloud Platform (GCP) that builds whenever a commit happens on any branch.

## Improvements
The web service itself is supposed to return a reversed string, however I didn't have enough time to add that because I was focused on getting my web service running so that I could host it.

## Productionizing
To productionize this app, I would have changed the deployment.yaml to get triggered once a PR to `main` would happen, instead of on any branch. I would have the app be deployed to a dev then staging environment, where an approval form would be placed as a gatekeeper between stage and production.
