import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { findManyChannels } from "../../apis/channel.api";

const Home = () => {
  const navigate = useNavigate();

  const onGoChannelCreate = () => {
    navigate("/channel/create");
  };

  const [channels, setChannels] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const channels = await findManyChannels();
      setChannels(channels);
    }

    fetchData();
  }, []);

  const onGoChannelDetail = (e) => {
    const channelName = e.target.innerText;
    navigate(`/channel/${channelName}`);
  };

  const Channels = channels.map((channel, index) => (
    <li key={index}>{channel.name}</li>
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
