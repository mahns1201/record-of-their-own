// fetch
const url = process.env.REACT_APP_CHANNEL_URL;

export const findManyChannels = () => {
  return new Promise((resolve) => {
    fetch(url, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((res) => {
        resolve(res);
      })
      .catch((error) => console.log("findManyChannels error: ", error.message));
  });
};

export const createChannel = (body) => {
  console.log(JSON.stringify(body));

  return new Promise((resolve) => {
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
      body: JSON.stringify(body),
    })
      .then((res) => res.json())
      .then((res) => {
        resolve(res);
      })
      .catch((error) => console.log("createChannel error: ", error.message));
  });
};
