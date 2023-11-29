ARG NODE_VERSION

FROM node:${NODE_VERSION}-alpine

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

ARG FRONTEND_PORT

EXPOSE ${FRONTEND_PORT}

CMD ["npm", "run", "dev"]