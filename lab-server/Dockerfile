FROM node:latest
WORKDIR /app
COPY package.json .
RUN npm install
COPY index.js .
COPY models /app/models
COPY state /app/state
COPY handlers /app/handlers
EXPOSE 7000
CMD ["npm", "start"]