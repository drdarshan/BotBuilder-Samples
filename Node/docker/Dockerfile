FROM node:8.9.1-alpine
WORKDIR /app
COPY docker/package*.json ./
RUN npm install --only=production
COPY docker/run_sample.js ./
COPY . .
EXPOSE 3978
ENTRYPOINT ["node", "run_sample.js"]
