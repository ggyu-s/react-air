const express = require("express");
const axios = require("axios");
const qs = require("qs");

const app = express();

let info = "";
// app.get("/api", (req, res, next) => {
//   axios
//     .request(
//       "https://partners.api.skyscanner.net/apiservices/token/v2/gettoken?apiKey=prtl6749387986743898559646983194"
//     )
//     .then((res) => console.log(res));
// });
var options = {
  method: "POST",
  url: "https://partners.api.skyscanner.net/apiservices/pricing/v1.0",
  data: qs.stringify({
    cabinclass: "Economy",
    country: "KR",
    currency: "KRW",
    locale: "ko-KR",
    locationSchema: "iata",
    originplace: "GMP",
    destinationplace: "PUS",
    outbounddate: "2021-02-11",
    inbounddate: "2021-02-11",
    adults: 1,
    children: 0,
    infants: 0,
    stops: 0,
    pageIndex: 0,
    pageSize: 5,
    apikey: "prtl6749387986743898559646983194",
  }),
  headers: {
    "content-type": "application/x-www-form-urlencoded;charset=utf-8",
  },
};

axios
  .request(options)
  .then(function (response) {
    console.log(response.headers.location.slice(65));
    const session = response.headers.location.slice(65);
    axios
      .get(
        `http://partners.api.skyscanner.net/apiservices/pricing/uk2/v1.0/${session}?apikey=prtl6749387986743898559646983194`
      )
      .then((res) => {
        info = res.data.Itineraries[0].PricingOptions;
        console.log(res.data.Carriers);
      });
  })
  .catch(function (error) {
    console.error(error);
  });

app.get("/", (req, res, next) => {
  res.send(info);
});

app.listen(3002, () => console.log("sever start"));
