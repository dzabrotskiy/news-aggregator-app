# base image
FROM node:latest

# create & set working directory
WORKDIR /app
COPY package*.json ./

# install dependencies
RUN npm install --force

# copy source files
COPY . .
COPY .env ./

# start app
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
