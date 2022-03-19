FROM node:lts

WORKDIR /home/askintra

COPY . .

RUN npm run build
CMD ["npm", "run", "start"]
