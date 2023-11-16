// // // // YOUR_BASE_DIRECTORY/netlify/functions/api.ts

// // // // import express, { Router } from "express";
// // // // import serverless from "serverless-http";

// // // const express = require("express");
// // // const serverless = require("serverless-http");
// // // const { Router } = require("express");

// // // const api = express();

// // // const router = Router();
// // // router.get("/hello", (req, res) => res.send("Hello World!"));

// // // // api.use("/api/", router);
// // // api.use(router);

// // // // export const handler = serverless(api);
// // // module.exports.handler = serverless(api);


// // // // const express = require("express");
// // // // const serverless = require("serverless-http");
// // // // const { Router } = require("express");

// // // // const api = express();
// // // // const router = Router();

// // // // router.get("/hello", (req, res) => res.send("Hello World!"));
// // // // api.use("/api/", router);

// // // // module.exports.handler = serverless(api);



// // const express = require("express");
// // const serverless = require("serverless-http");
// // const { Router } = require("express");

// // const api = express();
// // const router = Router();

// // router.get("/hello", (req, res) => res.send("Hello World!"));

// // api.use("/api", router); // Updated the route here

// // module.exports.handler = serverless(api);




// const express = require("express");
// const serverless = require("serverless-http");

// const app = express();

// app.get("/hello", (req, res) => {
//   res.status(200).json({ message: "Hello World!" });
// });

// module.exports.handler = serverless(app);


const express = require("express");
const serverless = require("serverless-http");

const app = express();

app.get("/.netlify/functions/api/hello", (req, res) => {
  res.status(200).json({ message: "Hello World!" });
});

// Wrap your app in serverless function
module.exports.handler = serverless(app);
