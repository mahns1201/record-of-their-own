import React, { useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";
import { useParams } from "react-router";

const ParticipantDetail = () => {
  const params = useParams();
  const { channelId, participantId } = params;

  const navigate = useNavigate();

	console.log(channelId, participantId);

  return (
    <div id="participant-detail" className="contents">
			participant-detail
    </div>
  );
};

export default ParticipantDetail;
