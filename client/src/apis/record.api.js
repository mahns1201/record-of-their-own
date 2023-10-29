// fetch
const url = process.env.REACT_APP_RECORD_URL;

export const crateRecord = (body) => {
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
      .catch((error) => console.log("crateRecord error: ", error.message));
  });
};
