import { useNavigate } from "react-router-dom";

const ChannelCreate = () => {
  const navigate = useNavigate();

  const onCancel = () => {
    navigate("/");
  };

  const onChannelCreate = async () => {
    const channelName = document.querySelector("#channel-name").value;
    const password = document.querySelector("#password").value;

    console.log(channelName, " | ", password);
  };

  return (
    <div id="channel-create">
      <div className="container">
        <div className="input">
          <input id="channel-name" type="text" placeholder="채널명" />
          <input id="password" type="text" placeholder="비밀번호" />
        </div>
        <div className="button">
          <button onClick={onCancel}>취소</button>
          <button onClick={onChannelCreate}>생성</button>
        </div>
      </div>
    </div>
  );
};

export default ChannelCreate;
