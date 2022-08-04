FROM node:latest
WORKDIR /app
COPY package.json .
RUN npm install

COPY public /app/public
COPY views /app/views
COPY index.js .
EXPOSE 5000
CMD ["npm", "start"]