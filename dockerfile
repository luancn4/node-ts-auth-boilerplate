# 1. Base image
FROM node:20-alpine

# 2. Create app directory
WORKDIR /usr/src/app

# 3. Copy package files and install dependencies
COPY package*.json ./
RUN npm install

# 4. Copy source code
COPY . .

# 5. Build TypeScript
RUN npm run build

# 6. Expose port
EXPOSE 3001

# 7. Run app
CMD ["node", "dist/server.js"]
