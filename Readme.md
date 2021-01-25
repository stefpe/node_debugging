# Run web application

docker run --rm -it -v $PWD/web_app:/app -w /app -p 8080:3000 node:12-alpine node index.js