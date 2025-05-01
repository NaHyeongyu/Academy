import React, { useState } from "react";
import styled from "styled-components";
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";

function QuickBook() {
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  return (
    <>
      <QuickBookMain>
        <Checkinout>
          <span>체그인 - 체크아웃</span>
          <div className="picker-row">
            <DatePicker
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              selectsStart
              startDate={startDate}
              endDate={endDate}
              placeholderText="Check In"
            />
            <DatePicker
              selected={endDate}
              onChange={(date) => setEndDate(date)}
              selectsEnd
              startDate={startDate}
              endDate={endDate}
              minDate={startDate}
              placeholderText="Check Out"
            />
          </div>
        </Checkinout>
        <Guest>
          <span className="guestnumber">게스트 인원</span>
          <span>Adults</span>
          <button onClick={() => setAdults(Math.max(adults - 1, 0))}>-</button>
          <span>{adults}</span>
          <button onClick={() => setAdults(adults + 1)}>+</button>
          <span>Children</span>
          <button onClick={() => setChildren(Math.max(children - 1, 0))}>
            -
          </button>
          <span>{children}</span>
          <button onClick={() => setChildren(children + 1)}>+</button>
        </Guest>
        <Code>
          <span>오퍼 코드</span>
          <input type="text" placeholder="코드를 입력해주세요."></input>
        </Code>
        <Confirm>
          <span>에약 확인</span>
        </Confirm>
      </QuickBookMain>
    </>
  );
}

export default QuickBook;

const QuickBookMain = styled.div`
  width: 100%;
  max-width: 1488px;
  height: 72px;
  margin: 0 auto;
  padding: 0 24px;
  display: flex;
  justify-content: space-between;
`;

const Checkinout = styled.div`
  background-color: #4c4c4c;
  height: 100%;
  width: 417px;
  padding: 10px 0px 0px 60px;
  font-weight: 700;
  span {
    display: block;
    color: #cdcccc;
    font-size: 14px;
  }
  input {
    background-color: #4c4c4c;
    border: none;
    font-size: 14px;
    background: none;
    color: #cdcccc;
  }
  .react-datepicker-wrapper,
  .react-datepicker__input-container input {
    background-color: #4c4c4c;
    border: none;
    font-size: 14px;
    color: #cdcccc;
  }
  .react-datepicker__input-container input::placeholder {
    color: #cdcccc;
  }
  .picker-row {
    display: flex;
    gap: 12px;
  }
`;
const Guest = styled.div`
  background-color: #4c4c4c;
  height: 100%;
  width: 387px;

  padding: 10px 0 0 60px;
  font-weight: 700;
  .guestnumber {
    display: block;
    letter-spacing: 2px;
  }
  span {
    color: #cdcccc;
    font-size: 14px;
  }

  button {
    color: #cdcccc;
    background: transparent;
    outline: none;
    margin: 0 16px;
    box-shadow: none;
    border: none;
    appearance: none;
    -webkit-appearance: none;
  }

  button:focus,
  button:active {
    outline: none;
    box-shadow: none;
  }
`;
const Code = styled.div`
  background-color: #4c4c4c;
  height: 100%;
  width: 355pxs;
  padding: 10px 90px 4px 90px;
  flex-direction: column;
  span {
    font-size: 14px;
    display: block;
    color: #cdcccc;
    letter-spacing: 2px;
    font-weight: 700;
  }
  input {
    font-size: 14px;
    place-holder: "코드를 입력해주세요.";
    outline: none;
    border-bottom: 1px solid white;
    border-top: none;
    border-left: none;
    border-right: none;
    background: transparent;
    color: #cdcccc;
    font-weight: bold;
  }
`;

const Confirm = styled.div`
  background-color: #e7af1b;
  height: 100%;
  width: 335px;
  display: flex;
  justify-content: center;
  align-items: center;
  span {
    font-size: 16px;
    font-weight: bold;
    color: white;
  }
`;
