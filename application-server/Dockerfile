FROM node:latest
WORKDIR /app
COPY package.json .
RUN npm install

COPY views /app/views
COPY controllers /app/controllers
COPY index.js .
EXPOSE 5000
CMD ["npm", "start"]