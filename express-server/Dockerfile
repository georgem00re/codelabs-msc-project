FROM node:latest
WORKDIR /app
COPY package.json .
RUN npm install

COPY public /app/public
COPY index.js .
EXPOSE 3000
CMD ["npm", "start"]