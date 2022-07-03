const getData = async (url) => {
  const res = await fetch(url);
  const data = await res.json();
  return data;
};

const postData = async (url, data) => {
  await fetch(url, {
    method: "POST",
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
    body: JSON.stringify(data),
  });
};

export { getData, postData };
