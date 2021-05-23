FROM node:14

EXPOSE 8123
WORKDIR /home/node/

RUN apt-get update && apt-get install -y

RUN npm init -y
RUN npm install discord.js@12.3.1
COPY . .

CMD ["node","/home/node/index.js"]