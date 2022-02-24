FROM node:14.17-alpine

WORKDIR /app

RUN yarn global add lerna 
    
ENTRYPOINT  lerna clean -y && \
            yarn start