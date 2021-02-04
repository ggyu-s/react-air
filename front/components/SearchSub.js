import { Col, Input, Row, DatePicker, Button, Form } from "antd";
import React, { useCallback, useState } from "react";
import ArrivalInput from "./ArrivalInput";
import DepartureInput from "./DepartureInput";
import { DownOutlined } from "@ant-design/icons";
import Passenger from "./Passenger";
import { useDispatch } from "react-redux";
import { SEARCH_CLICK_REQUEST } from "../reducers/search";
import moment from "moment";

const { RangePicker } = DatePicker;

function SearchSub() {
  const dispatch = useDispatch();
  const [departureText, setDepartureText] = useState("");
  const [isDepartureText, setIsDepartureText] = useState(false);
  const [arrivalText, setArrivalText] = useState("");
  const [isArrivalText, setIsArrivalText] = useState(false);
  const [adult, setAdult] = useState(1);
  const [child, setChild] = useState(0);
  const [isPassenger, setIsPassenger] = useState(false);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const onClickisPassenger = useCallback(() => {
    setIsPassenger(true);
  }, [isPassenger]);

  const onSubmit = useCallback(() => {
    console.log(departureText, arrivalText, adult, child);
    console.log();
    dispatch({
      type: SEARCH_CLICK_REQUEST,
      data: {
        departure: departureText,
        arrival: arrivalText,
        adult: adult,
        child: child,
        startDate: startDate,
        endDate: endDate,
      },
    });
  }, [departureText, arrivalText, adult, child, startDate, endDate]);
  const onChangeDate = (e) => {
    setStartDate(moment(e[0]._d).format("YYYY-MM-DD"));
    setEndDate(moment(e[1]._d).format("YYYY-MM-DD"));
  };
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
      <Form onFinish={onSubmit}>
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
            <RangePicker style={{ width: "100%" }} onChange={onChangeDate} />
          </Col>
          <Col
            xs={{ span: 24 }}
            md={{ span: 5 }}
            style={{ position: "relative" }}
          >
            <Input
              value={`${adult + child} 승객`}
              suffix={<DownOutlined style={{ cursor: "pointer" }} />}
              onClick={onClickisPassenger}
            />
            <Passenger
              adult={adult}
              setAdult={setAdult}
              child={child}
              setChild={setChild}
              isPassenger={isPassenger}
              setIsPassenger={setIsPassenger}
            />
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
              <Button style={{ width: "100%" }} htmlType="submit">
                검색
              </Button>
            </Col>
          </Row>
        </Row>
      </Form>
    </div>
  );
}
export default SearchSub;
