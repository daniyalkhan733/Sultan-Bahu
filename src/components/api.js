// api.js
export const fetchPrograms = async () => {
    const icharmsUrl = "https://6641e98f3d66a67b34356a00.mockapi.io/api/v1/programs-so";
    // const apiKey = import.meta.env.ICHARMS_API_KEY;
  
    const response = await fetch(`${icharmsUrl}`, {
    //   headers: {
    //     Authorization: `Bearer ${apiKey}`,
    //   },
    });
  
    const data = await response.json();
    return data; 
  };