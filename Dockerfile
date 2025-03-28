# Use an official Node.js runtime as a base image
FROM node:18.20.8-bookworm-slim

# Set the working directory in the container
WORKDIR /app

# Copy the package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the TypeScript code
RUN npm run build

# Expose the port the app runs on (e.g., 3000 if you're using Express or similar)
EXPOSE 3000

# Specify the command to run the app
CMD ["node", "dist/index.js"]
