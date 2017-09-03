FROM node:4

ADD . /opt/sendmerandom

WORKDIR /opt/sendmerandom

RUN npm install

expose 27017

CMD npm start
