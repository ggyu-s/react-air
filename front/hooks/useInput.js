import React, { useCallback, useState } from "react";

function useInput() {
  const [text, setText] = useState("");
  const onChangeText = useCallback((value) => {
    setText(value);
  });
  return [text, onChangeText];
}
export default useInput;
