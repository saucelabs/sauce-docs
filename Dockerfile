FROM node:lts

WORKDIR /app

EXPOSE 3000 35729
COPY . /app

CMD ["yarn", "serve"]