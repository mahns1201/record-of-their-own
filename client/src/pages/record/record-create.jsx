import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { crateRecord } from "../../apis/record.api";

const RecordCreate = () => {
  const params = useParams();
  const { channelId } = params;

  const navigate = useNavigate();

  const onGoBack = () => {
    navigate(-1);
  };

  const onRecordCreate = async () => {
    const totalGameCount = document.querySelector(
      "#count-for-total-game"
    ).value;
    const winGameCount = document.querySelector("#count-for-win").value;
    const winner = document.querySelector("#winner").value;
    const looser = document.querySelector("#looser").value;
    const outcome = document.querySelector("#record").value;

    console.log(channelId, totalGameCount, winGameCount, winner, looser, outcome);
    // find winner.id
    // find looser.id
    
    // {
    //   "channelId": 2,
    //   "winnerId": 1,
    //   "looserId": 3,
    //   "totalGameCount": 5,
    //   "winGameCount": 3,
    //   "outcome": "llwww"
    // }
    
    await crateRecord({
      channelId, totalGameCount, winGameCount, winner, looser, outcome
    });
    navigate(-1);
  };

  return (
    <div id="record-create">
      <div className="container">
        <div>
          <h2>전적 등록</h2>
        </div>
        <div className="input">
          <input
            id="count-for-total-game"
            type="text"
            placeholder="5판 (숫자만 쓰시오)"
          />
          <input
            id="count-for-win"
            type="text"
            placeholder="3선승제 (숫자만 쓰시오)"
          />
          <input id="winner" type="text" placeholder="승자" />
          <input id="looser" type="text" placeholder="패자" />
          <input id="record" type="text" placeholder="패승승패패" />
        </div>
        <div className="button">
          <button onClick={onGoBack}>취소</button>
          <button onClick={onRecordCreate}>등록</button>
        </div>
      </div>
    </div>
  );
};

export default RecordCreate;
