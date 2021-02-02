import { Input } from "antd";
import React, { useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AIRPORT_SEARCH_REQUEST } from "../reducers/search";

function DepartureInput({
  departureText,
  isDepartureText,
  setDepartureText,
  setIsDepartureText,
}) {
  const { searchList } = useSelector((state) => state.search);
  const dispatch = useDispatch();

  const onChangeDeparture = useCallback(
    (e) => {
      setDepartureText(e.target.value);
      setIsDepartureText(true);
      dispatch({
        type: AIRPORT_SEARCH_REQUEST,
        data: e.target.value,
      });
    },
    [departureText, isDepartureText]
  );

  const onClickAirPort = useCallback((e) => {
    setDepartureText(e.target.innerText);
    setIsDepartureText(false);
  });

  return (
    <>
      <Input
        placeholder="도시명"
        onChange={onChangeDeparture}
        value={departureText}
      />
      {isDepartureText && departureText ? (
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

export default DepartureInput;
