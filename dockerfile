FROM node:7.7-alpine
MAINTAINER Adly Thebaud <adlythebaud@gmail.com>

# install deps
ADD package.json /tmp/package.json
RUN cd /tmp && npm install

# Copy deps
RUN mkdir -p /opt/petal-app && cp -a /tmp/node_modules /opt/petal-app

# Setup workdir
WORKDIR /opt/petal-app
COPY . /opt/petal-app

# run
EXPOSE 3000
CMD ["npm", "start"]