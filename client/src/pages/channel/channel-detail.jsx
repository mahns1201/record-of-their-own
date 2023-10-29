import React, { useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";
import { useParams } from "react-router";
import { findChannel, findManyChannelParticipants, findManyChannelRecords } from "../../apis/channel.api";

const ChannelDetail = () => {
  const params = useParams();
  const { channelId } = params;

  const navigate = useNavigate();

  const [channel, setChannel] = useState(0);
  const [participants, setParticipants] = useState([]);
  const [records, setRecords] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const channels = await findChannel(channelId);
      const participants = await findManyChannelParticipants(channelId);
      const records = await findManyChannelRecords(channelId);
      
      setChannel(channels);
      setParticipants(participants);
      setRecords(records);
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

  const Participants = participants.map((participant, index) => (
    <li key={index}>{participant.name} ({participant.id})</li>
  ));

  // "[5판 3선승제] | 서민혁(승) vs 안호림(패) | 패승승승 (3:1)",
  // [{record.totalGameCount}판 {record.winGameCount}선승제] | {record.winner.name}(W) vs {record.looser}(L) | {record.outcome}
  const Records = records.map((record, index) => (
    <li key={index}>
      [{record.totalGameCount}판 {record.winGameCount}선승제] | {record.winner.name}(W) vs {record.looser.name}(L) | {record.outcome.toUpperCase()}
    </li>
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
