import React from "react";
import { useNavigate } from "react-router-dom";
import { createChannel } from "../../apis/channel.api";

const ChannelCreate = () => {
  const navigate = useNavigate();

  const onCancel = () => {
    navigate("/");
  };

  const onCreateChannel = async () => {
    const channelName = document.querySelector("#channel-name").value;
    const password = document.querySelector("#password").value;

    await createChannel({ name: channelName, password });
    navigate("/");
  };

  return (
    <div id="channel-create">
      <div className="container">
        <div>
          <h2>채널 생성</h2>
        </div>
        <div className="input">
          <input id="channel-name" type="text" placeholder="채널명" />
          <input id="password" type="text" placeholder="비밀번호" />
        </div>
        <div className="button">
          <button onClick={onCancel}>취소</button>
          <button onClick={onCreateChannel}>생성</button>
        </div>
      </div>
    </div>
  );
};

export default ChannelCreate;
