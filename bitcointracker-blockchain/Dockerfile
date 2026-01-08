FROM node:alpine

WORKDIR /app
COPY package*.json ./
RUN npm install
COPY ./ ./

#   build for typesript
RUN npm run build 

CMD ["npm","start"]
