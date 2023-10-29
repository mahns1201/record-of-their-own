import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  findChannel,
  joinChannel,
} from "../../apis/channel.api";

const ChannelJoin = () => {
  const params = useParams();
  const { channelId } = params;
  const navigate = useNavigate();

  const onCancel = () => {
    navigate("/");
  };

  const [channel, setChannel] = useState(0);

  useEffect(() => {
    async function fetchData() {
      const channels = await findChannel(channelId);
      setChannel(channels);
    }

    fetchData();
  }, [channelId]);
  
  const onJoinChannel = async () => {
    const password = document.querySelector("#password").value;
    const { result: joinResult } = await joinChannel({
      id: channel.id,
      password,
    });

    joinResult === "SUCCESS"
      ? navigate(`/channel/${channel.id}`)
      : alert("비밀번호가 틀렸습니다.");
  };

  return (
    <div id="channel-create">
      <div className="container">
        <div>
          <h2>{channel.name} 입장</h2>
        </div>
        <div className="input">
          <input id="password" type="text" placeholder="비밀번호" />
        </div>
        <div className="button">
          <button onClick={onCancel}>취소</button>
          <button onClick={onJoinChannel}>입장</button>
        </div>
      </div>
    </div>
  );
};

export default ChannelJoin;
