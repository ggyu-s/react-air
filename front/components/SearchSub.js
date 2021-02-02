import { Col, Input, Row, Space, DatePicker, Button } from "antd";
import React, { useCallback, useState } from "react";
import { useDispatch } from "react-redux";
import { AIRPORT_SEARCH_REQUEST } from "../reducers/search";
import ArrivalInput from "./ArrivalInput";
import DepartureInput from "./DepartureInput";

const { RangePicker } = DatePicker;

function SearchSub() {
  const [departureText, setDepartureText] = useState("");
  const [isDepartureText, setIsDepartureText] = useState(false);
  const [arrivalText, setArrivalText] = useState("");
  const [isArrivalText, setIsArrivalText] = useState(false);
  return (
    <div
      style={{
        background: "black",
        width: "100%",
        margin: "0 auto",
        maxWidth: "1096px",
        height: "220px",
        padding: "1.5em",
      }}
    >
      <Row
        style={{
          width: "20rem",
          margin: "auto",
          width: "100%",
          maxWidth: "900px",
        }}
      >
        <Col
          xs={{ span: 24 }}
          md={{ span: 6 }}
          style={{ position: "relative" }}
        >
          <DepartureInput
            departureText={departureText}
            isDepartureText={isDepartureText}
            setDepartureText={setDepartureText}
            setIsDepartureText={setIsDepartureText}
          />
        </Col>
        <Col xs={{ span: 24 }} md={{ span: 6 }}>
          <ArrivalInput
            arrivalText={arrivalText}
            isArrivalText={isArrivalText}
            setArrivalText={setArrivalText}
            setIsArrivalText={setIsArrivalText}
          />
        </Col>
        <Col xs={{ span: 24 }} md={{ span: 7 }}>
          <RangePicker style={{ width: "100%" }} />
        </Col>
        <Col xs={{ span: 24 }} md={{ span: 5 }}>
          <Input />
        </Col>
        <Row
          justify="end"
          style={{
            width: "20rem",
            width: "100%",
            maxWidth: "900px",
            marginTop: "10px",
          }}
        >
          <Col xs={{ span: 24 }} md={{ span: 5 }}>
            <Button style={{ width: "100%" }}>검색</Button>
          </Col>
        </Row>
      </Row>
    </div>
  );
}
export default SearchSub;
