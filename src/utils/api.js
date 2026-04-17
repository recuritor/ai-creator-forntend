const BASE_URL = import.meta.env.VITE_API_URL;

export const generateWebsite = async (prompt) => {
  const res = await fetch(`${BASE_URL}/generate`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ prompt }),
  });
  const data = await res.json();
  //const res = {html: "<div><h1 >Hello World</h1><p>This is a generated website.</p></div>", css: "h1{ color: blue; } p{ color: white; }", js: ""};
  return data;
}