FROM node:12-alpine
WORKDIR /CICD
COPY index.js .
ENTRYPOINT [ "node", "index" ]
