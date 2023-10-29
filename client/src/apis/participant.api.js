// fetch
const url = process.env.REACT_APP_PARTICIPANT_URL;

export const findParticipant = (id) => {
  return new Promise((resolve) => {
    fetch(`${url}/${id}`, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((res) => {
        resolve(res);
      })
      .catch((error) => console.log("findParticipant error: ", error.message));
  });
};

export const createParticipant = (body) => {
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
      .catch((error) => console.log("createParticipant error: ", error.message));
  });
};
