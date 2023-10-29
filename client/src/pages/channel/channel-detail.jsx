import React, { useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";
import { useParams } from "react-router";
import { findChannel } from "../../apis/channel.api";
import { findManyChannelParticipants } from "../../apis/participant.api";

const ChannelDetail = () => {
  const params = useParams();
  const { channelId } = params;
  const navigate = useNavigate();

  const [channel, setChannel] = useState(0);
  const [participants, setParticipants] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const channels = await findChannel(channelId);
      const participants = await findManyChannelParticipants(channelId);
      
      setChannel(channels);
      setParticipants(participants);
    }

    fetchData();
  }, [channelId]);

  const onGoHome = () => {
    navigate(`/`);
  };

  const onGoRecordCreate = () => {
    navigate(`/channel/${channelId}/record/create`);
  };

  const onGoParticipantCreate = () => {
    navigate(`/channel/${channelId}/participant/create`);
  };

  const recordList = [
    "[3판 2선승제] | 안호림(승) vs 서민혁(패) | 승승 (2:0)",
    "[3판 2선승제] | 서민혁(승) vs 안호림(패) | 패승승 (2:1)",
    "[5판 3선승제] | 서민혁(승) vs 안호림(패) | 패승승승 (3:1)",
  ];
  const Records = recordList.map((record, index) => (
    <li key={index}>{record}</li>
  ));

  const Participants = participants.map((participant, index) => (
    <li key={index}>{participant.name}</li>
  ));

  return (
    <div id="channel-detail" className="contents">
      <section className="channel-name">
        <h1>{channel.name}</h1>
      </section>

      <section className="home-button">
        <button onClick={onGoHome}>↩︎</button>
      </section>

      <div className="side-by-side">
        <section>
          <div className="title-with-button">
            <h2>전적 히스토리</h2>
            <button onClick={onGoRecordCreate}>+</button>
          </div>

          <div>
            <ul>{Records}</ul>
          </div>
        </section>

        <section>
          <div className="title-with-button">
            <h2>참가자</h2>
            <button onClick={onGoParticipantCreate}>+</button>
          </div>

          <div>
            <ul>{Participants}</ul>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ChannelDetail;
