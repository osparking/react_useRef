import React from "react";

export default function AppFocus() {
  const inputRef = React.useRef(null);
  function moveFocusToInputBox() {
    inputRef.current.focus();
  }
  return (
    <div>
      <h3>버튼클릭으로 입력상자로 촛점 이동</h3>
      <input
        ref={inputRef}
        type="text"
        id="input"
        placeholder="뭐라도 입력하세요..."
      />
      {/* <button onClick={() => document.getElementById('input').focus()}> */}
      <button onClick={moveFocusToInputBox}>촛점을 Input 상자로..</button>
    </div>
  );
}
