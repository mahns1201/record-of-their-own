import { useParams } from "react-router";

const ChannelDetail = () => {
  const params = useParams();
  const { channelName } = params;

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
    <div id="channel">
      <h1>{channelName}</h1>
      <section>
        <div>
          <h2>전적 히스토리</h2>
          <button>+</button>
        </div>

        <div>
          <ul>{Records}</ul>
        </div>
      </section>

      <section>
        <div>
          <h2>참가자 리스트</h2>
          <button>+</button>
        </div>

        <div>
          <ul>{Participants}</ul>
        </div>
      </section>
    </div>
  );
};

export default ChannelDetail;
