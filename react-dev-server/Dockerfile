FROM node:14
WORKDIR /app
COPY package.json .
RUN npm install
COPY public /app/public
COPY src /app/src
EXPOSE 3000
CMD ["npm", "start"]