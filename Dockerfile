FROM node:12-stretch

CMD ["node", "-e", "console.log(`hi the time is: ${Date.now()}`)"]