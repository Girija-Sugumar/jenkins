FROM node:9.8.0-alpine
WORKDIR /app
COPY package.json /app/
RUN npm install
COPY . .
EXPOSE 9700
CMD [ "node", "app.js" ]