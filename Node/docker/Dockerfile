FROM node:8.9.1
WORKDIR /app
COPY docker/package*.json ./
COPY docker/run_sample.py ./
RUN npm install --only=production
COPY . .
EXPOSE 3978
ENTRYPOINT ["python", "run_sample.py"]
