FROM node:lts

WORKDIR /app

EXPOSE 3000 35729
COPY . /app
RUN npm install

CMD ["yarn", "start"]