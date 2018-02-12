const express = require('express');

const app = express();
const port = process.env.PORT || 3000;

app.get('*',(req,res) => {
  const ip = req.headers['x-forwarded-for'] ||
     req.connection.remoteAddress ||
     req.socket.remoteAddress ||;
  let language = req.headers["accept-language"];
  language = language.slice(0,language.indexOf(','));
  let env = req.headers["user-agent"];
  env = env.slice(env.indexOf('(')+1);
  env = env.slice(0,env.indexOf(')'));
  const information = {
    ipaddress: ip,
    language: language,
    software: env
  };
  res.send(information);
  //console.log(req.headers);
});

app.listen(port);
