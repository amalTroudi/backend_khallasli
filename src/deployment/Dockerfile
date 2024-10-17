FROM node:19.9.0

WORKDIR /app

COPY package*.json ./

RUN npm install

RUN npm install nodemon -g

COPY . .

EXPOSE 9001

CMD ["nodemon", "/dist/index.js"]
        