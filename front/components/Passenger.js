import { MinusCircleOutlined, PlusCircleOutlined } from "@ant-design/icons";
import { Button, Input } from "antd";
import React, { useCallback } from "react";

function Passenger({
  adult,
  setAdult,
  child,
  setChild,
  isPassenger,
  setIsPassenger,
}) {
  const onMinusAdult = useCallback(() => {
    setAdult((prev) => prev - 1);
  }, [adult]);

  const onPlusAdult = useCallback(() => {
    setAdult((prev) => prev + 1);
  }, [adult]);

  const onMinusChild = useCallback(() => {
    setChild((prev) => prev - 1);
  }, [adult]);

  const onPlusChild = useCallback(() => {
    setChild((prev) => prev + 1);
  }, [adult]);

  return (
    <>
      {isPassenger ? (
        <div
          style={{
            position: "absolute",
            width: "100%",
            zIndex: 9999,
            background: "white",
            textAlign: "left",
            padding: "10px",
          }}
        >
          <div style={{ paddingLeft: "8px" }}>성인</div>
          <MinusCircleOutlined
            style={{
              width: "36px",
              height: "36px",
              fontSize: "20px",
              lineHeight: "36px",
            }}
            onClick={onMinusAdult}
          />
          <Input
            value={adult}
            style={{ width: "36px", height: "36px", textAlign: "center" }}
            readOnly
          ></Input>
          <PlusCircleOutlined
            style={{
              width: "36px",
              height: "36px",
              fontSize: "20px",
              lineHeight: "36px",
            }}
            onClick={onPlusAdult}
          />
          <div style={{ paddingLeft: "8px" }}>유아</div>
          <MinusCircleOutlined
            style={{
              width: "36px",
              height: "36px",
              fontSize: "20px",
              lineHeight: "36px",
            }}
            onClick={onMinusChild}
          />
          <Input
            value={child}
            style={{ width: "36px", height: "36px", textAlign: "center" }}
            readOnly
          ></Input>
          <PlusCircleOutlined
            style={{
              width: "36px",
              height: "36px",
              fontSize: "20px",
              lineHeight: "36px",
            }}
            onClick={onPlusChild}
          />
          <div style={{ textAlign: "right" }}>
            <Button onClick={() => setIsPassenger(false)}>완료</Button>
          </div>
        </div>
      ) : null}
    </>
  );
}

export default Passenger;
