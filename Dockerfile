# Use an official Node runtime as a parent image
FROM node:16

WORKDIR /usr/src/app

# Install global dependencies
RUN npm install -g webpack nodemon

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install application dependencies
RUN npm install

# Copy the rest of the application files
COPY . .

# Build the application
RUN npm run build

# Expose the ports your app runs on
EXPOSE 3001
EXPOSE 7070

# Define the command to run your application
CMD ["npm", "start"]

