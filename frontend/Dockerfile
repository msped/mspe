FROM node:18-alpine

WORKDIR /frontend

COPY package.json /frontend
COPY package-lock.json /frontend

RUN npm install

RUN npm run build

RUN npm install -g serve

CMD ["serve", "-s", "build"]
