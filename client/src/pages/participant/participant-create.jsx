import { useNavigate } from "react-router-dom";

const ParticipantCreate = () => {
  const navigate = useNavigate();

  const onGoBack = () => {
    navigate(-1);
  };

  const onChannelCreate = async () => {
    const participant = document.querySelector("#participant").value;

    console.log(participant);
  };

  return (
    <div id="participant-create">
      <div className="container">
        <div className="input">
          <input id="participant" type="text" placeholder="참가자" />
        </div>
        <div className="button">
          <button onClick={onGoBack}>취소</button>
          <button onClick={onChannelCreate}>추가</button>
        </div>
      </div>
    </div>
  );
};

export default ParticipantCreate;
