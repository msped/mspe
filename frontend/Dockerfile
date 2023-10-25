FROM node:18.15.0

WORKDIR /mspe/frontend/

COPY package.json /mspe/frontend/
COPY package-lock.json /mspe/frontend/
RUN npm install

COPY . /mspe/frontend/

RUN npm run build

RUN npm install -g serve

# CMD ["npm", "start"]
CMD serve -s build