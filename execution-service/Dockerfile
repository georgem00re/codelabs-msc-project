FROM node:14
WORKDIR app/
COPY package.json .
RUN npm install
COPY index.js .
EXPOSE 4000
CMD ["npm", "start"]