FROM node:latest
WORKDIR /app
COPY package.json .
RUN npm install
COPY index.js .
COPY __tests__ /app/__tests__
COPY controllers /app/controllers
COPY utils /app/utils
EXPOSE 10000
CMD ["npm", "start"]