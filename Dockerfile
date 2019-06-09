FROM node:10-alpine
WORKDIR /code

COPY . .
RUN rm -rf ./packages/client && yarn install --frozen-lockfile

WORKDIR /code/packages/server
CMD ["yarn", "start"]
