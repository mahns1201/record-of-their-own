import React, { useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";
import { useParams } from "react-router";
import { findParticipant } from "../../apis/participant.api";

const ParticipantDetail = () => {
  const params = useParams();
  const { channelId, participantId } = params;

  const navigate = useNavigate();

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
			<h1>{participant.name} 전적</h1>
    </div>
  );
};

export default ParticipantDetail;
