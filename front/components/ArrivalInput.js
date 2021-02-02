import { Input } from "antd";
import React, { useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AIRPORT_SEARCH_REQUEST } from "../reducers/search";

function ArrivalInput({
  arrivalText,
  isArrivalText,
  setArrivalText,
  setIsArrivalText,
}) {
  const { searchList } = useSelector((state) => state.search);
  const dispatch = useDispatch();

  const onChangeArrival = useCallback(
    (e) => {
      setArrivalText(e.target.value);
      setIsArrivalText(true);
      dispatch({
        type: AIRPORT_SEARCH_REQUEST,
        data: e.target.value,
      });
    },
    [arrivalText, isArrivalText]
  );

  const onClickAirPort = useCallback((e) => {
    setArrivalText(e.target.innerText);
    setIsArrivalText(false);
  }, []);

  return (
    <>
      <Input
        placeholder="도시명"
        onChange={onChangeArrival}
        value={arrivalText}
      />
      {isArrivalText && arrivalText ? (
        <div
          style={{
            position: "absolute",
            width: "100%",
            background: "white",
          }}
        >
          {searchList.map((v, idx) => (
            <>
              <div
                style={{
                  textAlign: "left",
                  marginTop: "5px",
                  padding: "4px 11px",
                }}
                onClick={onClickAirPort}
                key={idx}
              >
                {v.PlaceName}({v.PlaceId})
              </div>
            </>
          ))}
        </div>
      ) : null}
    </>
  );
}

export default ArrivalInput;
