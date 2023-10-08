const express = require("express");
const server = express();
const rateLimit = require("express-rate-limit"); // 1 hr ma 100 req 1 id thi
const helmet = require("helmet"); // helmet thi Http header security
const mongoSanitize = require("express-mongo-sanitize");
const xss = require("xss-clean");
const hpp = require("hpp");
const cors = require("cors");
const fileUpload = require("express-fileupload");
const productRoute = require("./routes/productRoutes");
const restorantRoute = require("./routes/restorantRoutes");
const userRoute = require("./routes/userRoutes");
const cartRoute = require("./routes/cartRoutes");
const orderRoute = require("./routes/orderRoute");

//1) middlewares
server.use(express.json()); // to parse req.body

server.use(helmet()); //Set Security Http headers

// Limit req in 1 hour Same Id
const limiter = rateLimit({
  max: 10000, // Limit each IP to 100 requests per `window`
  windowMs: 60 * 60 * 1000, //60 minutes in milisec
  message: "Too many requests from this IP, Please try again in an hour!",
});
// Apply the rate limiting middleware to all requests
// Apply the rate limiting middleware to API calls only (/api)
server.use("/api", limiter);

//Data Sanitization against NoSQL query injection github ma 6e
server.use(mongoSanitize());
//Data Sanitization against XSS // Prevent against harm Html code
server.use(xss());
// prevant HTTP parameter pollution
server.use(hpp());
// fileupload
server.use(fileUpload({ useTempFiles: true }));

server.use(
  cors({
    origin: true,
    credentials: true,
    exposedHeaders: ["X-Total-Count"],
  })
);

//3) Routes
server.use("/api/v1/", productRoute);
server.use("/api/v1/restorant", restorantRoute);
server.use("/api/v1/users", userRoute);
server.use("/api/v1/cart", cartRoute);
server.use("/api/v1/order", orderRoute);

module.exports = server;
