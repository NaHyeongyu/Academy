import React from "react";
import styled from "styled-components";
import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";
import roomData from "../../api/Reservation.json";

function ReservationRoom() {
  const [age, setAge] = React.useState("");
  const [rooms, setRooms] = React.useState(roomData);
  // const reservation = useSelector((state) => state.reservation);

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <div>
      <RoomAll>
        <Menu>
          <span>이용 가능한 객실 (24)</span>
          <FormControl fullWidth sx={{ width: "180px" }}>
            <InputLabel id="demo-simple-select-label">이름순</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={age}
              label="Age"
              onChange={handleChange}
            >
              <MenuItem value="name-asc">이름순</MenuItem>
              <MenuItem value="price-asc">가격 낮은 순</MenuItem>
              <MenuItem value="price-desc">가격 높은 순</MenuItem>
            </Select>
          </FormControl>
        </Menu>
        <RoomContainor>
          {rooms.map((room) => (
            <RoomItem key={room.id} $disabled={!room.status}>
              <RoomItemImg src={room.imageUrl} alt={room.name} />
              <RoomItemDetail>
                <DetailTitle>
                  <h4>{room.name}</h4>
                </DetailTitle>
                <DetialItems>
                  <DetailText>
                    <p className="size">{room.roomSize}</p>
                    <ul>
                      {room.details.map((detail, index) => (
                        <li key={index}>{detail}</li>
                      ))}
                    </ul>
                  </DetailText>
                  <DetailButton>
                    <p>W{room.pricePerNight.toLocaleString()} /박</p>
                    <button className="cartbutton" disabled={!room.status}>
                      장바구니
                    </button>
                    <button className="bookbutton" disabled={!room.status}>
                      예약
                    </button>
                  </DetailButton>
                </DetialItems>
              </RoomItemDetail>
            </RoomItem>
          ))}
        </RoomContainor>
      </RoomAll>
    </div>
  );
}

export default ReservationRoom;
const RoomAll = styled.div`
  width: 100%;
  max-width: 1300px;
  height: auto;
  margin: 40px auto 0;
  padding-top: 80px;
`;
const Menu = styled.div`
  max-width: 1300px;
  margin: 0 auto 40px;
  height: 70px;
  display: flex;
  justify-content: space-between;
  span {
    font-size: 20px;
    font-weight: bold;
  }
`;
const RoomContainor = styled.div`
  max-width: 1300px;
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;

  margin-top: 40px;
`;
const RoomItem = styled.div`
  width: 400px;
  height: 550px;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.3);
  display: flex;

  flex-direction: column;
  margin-bottom: 40px;
  border-radius: 8px;
  opacity: ${(props) => (props.$disabled ? 0.4 : 1)};
  pointer-events: ${(props) => (props.$disabled ? "none" : "auto")};
`;

const RoomItemImg = styled.img`
  width: 100%;
  height: 200px;
  border-radius: 8px 8px 0 0;
`;
const RoomItemDetail = styled.div`
  width: 100%;
  height: 330px;
  padding: 20px;
`;

const DetailTitle = styled.div`
  width: 100%;
  height: auto;
  margin-bottom: 10px;
`;
const DetialItems = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 20px;
`;
const DetailText = styled.div`
  width: 210px;
  padding-right: 10px;
  border-right: 0.1px solid #dddddd;
  height: auto;
  .size {
    margin-bottom: 40px;
    font-size: 14px;
  }
  ,
  ul {
    padding: 0;
    padding-left: 16px;
    font-size: 14px;
  }
`;
const DetailButton = styled.div`
  width: 130px;
  height: auto;
  p {
    font-weight: bold;
    font-size: 18px;
  }
  button {
    font-size: 14px;
    width: 100%;
    height: 40px;
  }
  .cartbutton {
    color: #6f5c80;
    background-color: white;
    border: rgb(182, 182, 182) 0.3px solid;
    border-radius: 8px;
    margin-bottom: 10px;
  }
  .bookbutton {
    color: white;
    font-weight: 500;
    border: none;
    background-color: #6f5c80;
    border-radius: 8px;
  }
`;
