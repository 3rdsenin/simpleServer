
#base image
FROM node:18-alpine

#working director: tell docker to execute all commands in this directory
WORKDIR /app

#copy all files from root directory to app directory in image:relative paths are specified here
COPY . .

#dependencies


#commads
RUN npm install

#Exposed ports by container
EXPOSE 3000

#runtime commands
CMD ["node", "index.js"]