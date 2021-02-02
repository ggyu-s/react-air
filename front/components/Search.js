import { Col, Row } from "antd";
import React from "react";
import SearchSub from "./SearchSub";

function Search() {
  return (
    <>
      <div
        span={24}
        style={{
          background: "powderblue",
          height: "550px",
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          textAlign: "center",
        }}
      >
        <SearchSub />
      </div>
    </>
  );
}

export default Search;
