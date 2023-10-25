import { useNavigate } from "react-router-dom";

const RecordCreate = () => {
  const navigate = useNavigate();

  const onGoBack = () => {
    navigate(-1);
  };

  const onRecordCreate = async () => {
    const countForTotalGame = document.querySelector(
      "#count-for-total-game"
    ).value;
    const countForWn = document.querySelector("#count-for-win").value;
    const winner = document.querySelector("#winner").value;
    const looser = document.querySelector("#looser").value;
    const record = document.querySelector("#record").value;

    console.log(countForTotalGame, countForWn, winner, looser, record);
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
