import { useNavigate } from "react-router-dom";
import { useParams } from "react-router";

const ChannelDetail = () => {
  const params = useParams();
  const { channelName } = params;

  const navigate = useNavigate();

  const onGoRecordCreate = () => {
    navigate(`/channel/${channelName}/record/create`);
  };

  const onGoParticipantCreate = () => {
    navigate(`/channel/${channelName}/participant/create`);
  };

  const recordList = [
    "[3판 2선승제] | 안호림(승) vs 서민혁(패) | 승승 (2:0)",
    "[3판 2선승제] | 서민혁(승) vs 안호림(패) | 패승승 (2:1)",
    "[5판 3선승제] | 서민혁(승) vs 안호림(패) | 패승승승 (3:1)",
  ];
  const Records = recordList.map((record, index) => (
    <li key={index}>{record}</li>
  ));

  const participantList = ["안호림", "안호림", "김상엽"];
  const Participants = participantList.map((participant, index) => (
    <li key={index}>{participant}</li>
  ));

  return (
    <div id="channel-detail" className="contents">
      <section className="channel-name">
        <h1>{channelName}</h1>
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
