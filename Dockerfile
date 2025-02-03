FROM node:18-alpine

WORKDIR /usr/appGDragroes
COPY package*.json ./
RUN npm install

COPY . . 

RUN npm run build

CMD ["npm", "run", "dev"]

EXPOSE 3000