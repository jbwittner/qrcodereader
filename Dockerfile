FROM node:14 as Build_Front

WORKDIR /usr/src/app/source/frontend

COPY frontend ./

RUN npm ci

RUN npm run build

FROM node:14 as Build_Back

WORKDIR /usr/src/app/source/server

COPY server ./

RUN npm ci

RUN npm run build

FROM node:14 as Package

WORKDIR /usr/src/app

COPY --from=Build_Front /usr/src/app/source/frontend/build /usr/src/app/static
COPY --from=Build_Back /usr/src/app/source/server/build /usr/src/app/
COPY --from=Build_Back /usr/src/app/source/server/node_modules /usr/src/app/node_modules

RUN ls -ll

EXPOSE 3150

CMD [ "node", "app.js" ]