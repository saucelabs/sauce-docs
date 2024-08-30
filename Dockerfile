FROM node:lts

WORKDIR /app

EXPOSE 3000 35729
COPY . /app
RUN npm install &&  \
    npm run build

CMD ["npm", "run", "serve"]
