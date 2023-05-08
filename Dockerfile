FROM node:latest

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

# Copy the wait-for-it script and make it executable
COPY wait-for-it.sh wait-for-it.sh 
RUN chmod +x wait-for-it.sh

CMD ["./wait-for-it.sh", "db:3306", "--timeout=30", "--", "bash", "-c", "node deploy-commands.js && node index.js"]