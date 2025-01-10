// api.js
export const fetchPrograms = async () => {
  // const icharmsUrl = import.meta.env.ICHARMS_URL;
  const apiKey = import.meta.env.ICHARMS_API_KEY;

  const response = await fetch("https://sultanbahucenter-icharms.tscube.co.in/api/v1/program-list?limit=1000", {
    headers: {
      Authorization: `Bearer ${apiKey}`,
    },
  });
console.log(response)
  const data = await response.json();
  return data; // Assuming the response is an array of programs
};