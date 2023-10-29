import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { createParticipant } from "../../apis/participant.api";

const ParticipantCreate = () => {
  const params = useParams();
  const { channelId } = params;

  const navigate = useNavigate();

  const onGoBack = () => {
    navigate(-1);
  };

  const onParticipantCreate = async () => {
    const participant = document.querySelector("#participant").value;

    await createParticipant({ name: participant, channelId });
    navigate(-1);
  };

  return (
    <div id="participant-create">
      <div className="container">
        <div>
          <h2>참가자 등록</h2>
        </div>
        <div className="input">
          <input id="participant" type="text" placeholder="참가자" />
        </div>
        <div className="button">
          <button onClick={onGoBack}>취소</button>
          <button onClick={onParticipantCreate}>등록</button>
        </div>
      </div>
    </div>
  );
};

export default ParticipantCreate;
