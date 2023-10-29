// fetch
const url = process.env.REACT_APP_CHANNEL_URL;

export const findManyChannelParticipants = (channelId) => {
  return new Promise((resolve) => {
    fetch(`${url}/${channelId}/participants`, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((res) => {
        resolve(res);
      })
      .catch((error) => console.log("findManyChannels error: ", error.message));
  });
};
