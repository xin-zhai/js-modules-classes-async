export const getPoetry = () => {
  const url = "https://v1.jinrishici.com/all.json";
  return fetch(url, { method: "GET" })
    .then((res) => res.json())
    .then((res) => {
      const arr = [res.origin, res.author, res.content];
      return arr;
    });
};

// export async function getPoetry() {
//   const url = "https://v1.jinrishici.com/all.json";
//   return fetch(url, { method: "GET" })
//     .then((res) => res.json())
//     .then((res) => {
//       const arr = [res.origin, res.author, res.content];
//       return arr;
//     });
// }
