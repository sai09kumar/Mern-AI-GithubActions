# server/Dockerfile

FROM node:18

# Set working directory
WORKDIR /app

# Copy server code
COPY . .

# Install dependencies
RUN npm install

# Expose the server port
EXPOSE 5000

# Start the app
CMD ["npm", "start"]
