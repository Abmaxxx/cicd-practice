# Base image — Node.js pehle se installed
FROM node:20-slim

# Container ke andar working directory set karo
WORKDIR /app

# Pehle sirf package files copy karo (layer caching ke liye)
COPY package*.json ./

# Dependencies install karo
RUN npm install

# Ab baaki sara code copy karo
COPY . .

# Batana ke container kis port pe listen karega
EXPOSE 3000

# Container start hone par yeh command chalegi
CMD ["node", "index.js"]