FROM node:latest
WORKDIR /app
COPY package.json .
RUN npm install
COPY index.js .
EXPOSE 9000
CMD ["npm", "start"]