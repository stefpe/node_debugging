# Run script
docker run --rm -it -v $PWD/script:/app -w /app -p 9229:9229 node:12-alpine node --inspect-brk=0.0.0.0:9229 test.js

# Run web application
docker run --rm -it -v $PWD/web_app:/app -w /app -p 8080:3000 -p 9229:9229 node:12-alpine node --inspect-brk=0.0.0.0:9229 index.js

# Run AWS lamdba serverless function
docker run --rm -it -v $PWD/aws_lambda:/app -w /app -p 8080:3000 -p 9229:9229 node:12-alpine node --inspect-brk=0.0.0.0:9229 node_modules/.bin/serverless offline --host 0.0.0.0 --httpPort 3000

# Google chrome debugging
chrome://inspect

# Webstorm/PHPStorm debugging
- start in console
- click the ws://0.0.0.0:9229/ID link in the console output