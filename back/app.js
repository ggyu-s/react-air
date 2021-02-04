const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const axios = require("axios");
const qs = require("qs");

const searchRouter = require("./routes/search");

const app = express();

app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser("reactAir"));
// app.use(
//   session({
//     saveUninitialized: false,
//     resave: false,
//     secret: process.env.COOKIE_SECRET,
//   })
// );

let info = "";
// app.get("/api", (req, res, next) => {
//   axios
//     .request(
//       "https://partners.api.skyscanner.net/apiservices/token/v2/gettoken?apiKey=prtl6749387986743898559646983194"
//     )
//     .then((res) => console.log(res));
// });
// var options = {
//   method: "POST",
//   url: "https://partners.api.skyscanner.net/apiservices/pricing/v1.0",
//   data: qs.stringify({
//     cabinclass: "Economy",
//     country: "KR",
//     currency: "KRW",
//     locale: "ko-KR",
//     locationSchema: "iata",
//     originplace: "GMP",
//     destinationplace: "PUS",
//     outbounddate: "2021-02-11",
//     inbounddate: "2021-02-14",
//     adults: 1,
//     children: 0,
//     infants: 0,
//     stops: 0,
//     pageIndex: 0,
//     pageSize: 1,
//     apikey: "prtl6749387986743898559646983194",
//   }),
//   headers: {
//     "content-type": "application/x-www-form-urlencoded;charset=utf-8",
//   },
// };

// axios
//   .request(options)
//   .then(function (response) {
//     console.log(response.headers.location.slice(65));
//     const session = response.headers.location.slice(65);
//     axios
//       .get(
//         `http://partners.api.skyscanner.net/apiservices/pricing/uk2/v1.0/${session}?apikey=prtl6749387986743898559646983194`
//       )
//       .then((res) => {
//         info = res.data.Itineraries[0].PricingOptions;
//         console.log(res.data);
//       });
//   })
//   .catch(function (error) {
//     console.error(error);
//   });

app.use("/search", searchRouter);
app.use((err, req, res, next) => {});

app.listen(3002, () => console.log("sever start"));
