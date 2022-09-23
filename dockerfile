FROM node:16.16.0

RUN mkdir -p /usr/template
WORKDIR /usr/template

COPY package.json /usr/template
RUN npm install

COPY . /usr/template

CMD ["node", "index.js"]
