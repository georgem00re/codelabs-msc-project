FROM node:latest
WORKDIR /app
COPY package.json .
RUN npm install
COPY index.js .
COPY utils /app/utils
EXPOSE 7000
CMD ["npm", "start"]