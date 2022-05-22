FROM node:alpine

EXPOSE 8123
WORKDIR /home/node/

RUN npm init -y
RUN npm i discord.js@13.7.0

COPY . .

CMD ["node","/home/node/index.js"]