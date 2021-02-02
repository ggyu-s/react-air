import { Col, Input, Row, Space, DatePicker, Button } from "antd";
import React from "react";

const { RangePicker } = DatePicker;
function SearchSub() {
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
        <Col xs={{ span: 24 }} md={{ span: 6 }}>
          <Input placeholder="도시명" />
        </Col>
        <Col xs={{ span: 24 }} md={{ span: 6 }}>
          <Input />
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
