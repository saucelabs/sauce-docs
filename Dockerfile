FROM node:lts
WORKDIR /
EXPOSE 3000 35729
COPY . /
RUN yarn install
CMD ["yarn", "serve"]