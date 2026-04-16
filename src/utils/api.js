const BASE_URL = import.meta.env.VITE_API_URL;

export const generateWebsite = async (prompt) => {
  const res = await fetch(`${BASE_URL}/generate`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ prompt }),
  });

  return res.json();
};
