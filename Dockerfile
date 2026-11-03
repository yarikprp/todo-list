FROM node:22-alpine

RUN apk add --no-cache git

WORKDIR /app

COPY package*.json ./
RUN if [ -f package-lock.json ]; then npm ci; else npm install; fi

COPY . .

EXPOSE 4173 5173 3001

CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0"]
