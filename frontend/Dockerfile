# Use an official Node.js runtime as a base image
FROM node:20 AS builder

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the entire project to the container
COPY . .

# Build the Next.js app
RUN npm run build

# Use a lightweight image for the production server
FROM node:20-alpine AS runner

WORKDIR /app

# Copy only the necessary files from the builder stage
COPY --from=builder /app/package.json ./
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public

# Expose the port Next.js runs on
EXPOSE 3000

# Run Next.js in production mode
CMD ["npm", "run", "start"]
