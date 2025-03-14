FROM node:20

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json before installing dependencies
COPY package*.json ./

# Install dependencies (including dev dependencies)
RUN npm install 

# Copy the rest of the app's source code
COPY . .

COPY public ./public

COPY .env* ./

RUN npm run build

# Expose port 3333
EXPOSE 3333

CMD ["npm", "run", "start"]

