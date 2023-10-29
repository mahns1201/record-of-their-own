import React, { useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";
import { useParams } from "react-router";
import { findParticipant } from "../../apis/participant.api";

const ParticipantDetail = () => {
  const params = useParams();
  const { participantId } = params;

  const navigate = useNavigate();

  const onGoBack = () => {
    navigate(-1);
  };

  const [participant, setParticipant] = useState(0);

  useEffect(() => {
    async function fetchData() {
      const participant = await findParticipant(participantId);
      
      setParticipant(participant);
    }

    fetchData();
  }, [participantId]);

  return (
    <div id="participant-detail" className="contents">
			<section className="participant-name">
        <h1>{participant.name} 전적</h1>
      </section>

      <section className="home-button">
        <button onClick={onGoBack}>↩︎</button>
      </section>

      <section className="total-record">
        <h2>전체 전적</h2>
        <div>
          <h3>개별판</h3>
          <span>{participant.winCount}승 {participant.looseCount}패 ({(participant.winCount * 100 / (participant.winCount + participant.looseCount)).toFixed(2)}%)</span>
        </div>
        
        <div>
          <h3>다전제</h3>
          <span>{participant.multiplePremisesWinCount}승 {participant.multiplePremisesLooseCount}패 ({(participant.multiplePremisesWinCount * 100 / (participant.multiplePremisesWinCount + participant.multiplePremisesLooseCount)).toFixed(2)}%)</span>
        </div>
      </section>

      <section className="relative-record">
        <h2>상대 전적</h2>
        준비중...
      </section>
    </div>
  );
};

export default ParticipantDetail;
