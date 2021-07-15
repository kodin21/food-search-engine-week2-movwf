const fetchMealData = fetch(
  "https://api.jsonbin.io/v3/b/60ef40fdc1256a01cb6f37ad",
  {
    headers: {
      "X-Master-Key":
        "$2b$10$WJx4a/x7fH5t4H/dSIoCf.9NRJ6b1j4giOf4aBEOw0OknnCEE9GWG",
    },
  }
).then((response) => response.json());

export default fetchMealData;
