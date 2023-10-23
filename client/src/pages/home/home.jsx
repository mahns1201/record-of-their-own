import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const onGoChannelCreate = () => {
    navigate("/channel/create");
  };

  return (
    <div id="home">
      <div className="title">
        <h1>채널 리스트</h1>
        <button onClick={onGoChannelCreate}>+</button>
      </div>

      <div className="chanel_list">
        <ul>
          <li>1</li>
          <li>2</li>
        </ul>
      </div>
    </div>
  );
};

export default Home;
