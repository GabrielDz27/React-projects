FROM node:20-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

EXPOSE 3000  
 # CRA usa 3000
CMD ["npm", "start"]

# Para rodar use: 
#   sudo su
#   docker build -t calc-dev -f Dockerfile.dev .
#   docker run -it -p 5173:5173 calc-dev