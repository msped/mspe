FROM node:18.15.0

WORKDIR /app

COPY package.json /app
RUN npm install

COPY . .

RUN npm run build

RUN npm install -g serve

# CMD ["npm", "start"]
CMD ["serve", "-s", "build"]