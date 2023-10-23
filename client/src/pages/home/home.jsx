import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const onGoChannelCreate = () => {
    navigate("/channel/create");
  };

  const onGoChannelDetail = (e) => {
    const channelName = e.target.innerText;
    navigate(`/channel/${channelName}`);
  };

  const channelList = ["짐승방스타리그", "들짐승스타리그"];
  const Channels = channelList.map((channelName, index) => (
    <li key={index}>{channelName}</li>
  ));

  return (
    <div id="home">
      <div className="title">
        <h1>채널 리스트</h1>
        <button onClick={onGoChannelCreate}>+</button>
      </div>

      <div className="chanel_list">
        <ul onClick={onGoChannelDetail}>{Channels}</ul>
      </div>
    </div>
  );
};

export default Home;
