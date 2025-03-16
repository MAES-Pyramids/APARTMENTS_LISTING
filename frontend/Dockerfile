FROM node:20

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .


RUN npx tailwindcss -o ./public/tailwind.css || echo "Tailwind build failed, skipping."


EXPOSE 3000


CMD ["npm", "run", "dev"]
