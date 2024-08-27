FROM node:20

RUN apt-get update && \
    apt-get install -y git && \
    apt-get clean

RUN git config --global user.email "chunhsing0921@gmail.com" && \
    git config --global user.name "Emptywu"

RUN npm cache clean --force    
RUN npm config set cache /app/.npm-cache --global    

WORKDIR /app

COPY package*.json ./
RUN npm install
RUN npm install typescript@latest --save-dev
RUN npm install gh-pages
# 安裝 Bootstrap
RUN npm i --save bootstrap
RUN npm i --save-dev sass

COPY . .

EXPOSE 5170-5179

#CMD [ "bash" ]
CMD ["npm", "run", "dev", "--", "--host"]