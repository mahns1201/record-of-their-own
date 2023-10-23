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
    <div id="home" className="contents">
      <section className="home-name">
        <h1>그들만의 전적 관리</h1>
      </section>

      <section>
        <div className="title-with-button">
          <h2>채널 리스트</h2>
          <button onClick={onGoChannelCreate}>+</button>
        </div>

        <div className="chanel_list">
          <ul onClick={onGoChannelDetail}>{Channels}</ul>
        </div>
      </section>
    </div>
  );
};

export default Home;
