# Stage 1: Build the Vite project
FROM node:20-alpine as build

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the project for production
RUN npm run build

# Stage 2: Serve the static files with nginx
FROM nginx:stable-alpine

# Copy the built files from the previous stage
COPY --from=build /app/dist /usr/share/nginx/html

# Change the default nginx port
RUN sed -i 's/ listen  .*/ listen 5001;/' /etc/nginx/conf.d/default.conf

# Expose the new port
EXPOSE 5001

# Start nginx server
CMD ["nginx", "-g", "daemon off;"]
