const express = require("express");
const router = express.Router();
const qs = require("qs");
const axios = require("axios");

router.post("/", (req, res, next) => {
  console.log(req.body);
  var options = {
    method: "POST",
    url: "https://partners.api.skyscanner.net/apiservices/pricing/v1.0",
    data: qs.stringify({
      cabinclass: "Economy",
      country: "KR",
      currency: "KRW",
      locale: "ko-KR",
      locationSchema: "iata",
      originplace: "gmp",
      destinationplace: "pus",
      outbounddate: req.body.startDate,
      inbounddate: req.body.endDate,
      adults: req.body.adult,
      children: req.body.child,
      infants: 0,
      stops: 0,
      pageIndex: 0,
      pageSize: 1,
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
          console.log(res.data);
        });
    })
    .catch(function (error) {
      console.error(error);
    });
  // axios
  //   .post("https://partners.api.skysanner.net/apiservices/pricing/v1.0", {
  //     data: qs.stringify({
  //       cabinclass: "Economy",
  //       country: "KR",
  //       currency: "KRW",
  //       locale: "ko-KR",
  //       locationSchema: "iata",
  //       originplace: req.body.departure,
  //       destinationplace: req.body.arrival,
  //       outbounddate: req.body.startDate,
  //       inbounddate: req.body.endDate,
  //       adults: req.body.adult,
  //       children: req.body.child,
  //       infants: 0,
  //       stops: 0,
  //       pageIndex: 0,
  //       pageSize: 1,
  //       apikey: "prtl6749387986743898559646983194",
  //     }),
  //     headers: {
  //       "Content-Type": "application/x-www-form-urlencoded;charset=utf-8",
  //     },
  //   })
  //   .then((res) => console.log(res))
  //   .catch((err) => console.log(err));
});

module.exports = router;
