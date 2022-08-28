FROM node:14
WORKDIR app/
COPY package.json .
RUN npm install
COPY index.js .
COPY controllers /app/controllers
COPY utils /app/utils
EXPOSE 4000
CMD ["npm", "start"]