FROM node:latest
WORKDIR /app
COPY package.json .
RUN npm install
COPY index.js .
COPY controllers /app/controllers
COPY utils /app/utils
EXPOSE 10000
CMD ["npm", "start"]