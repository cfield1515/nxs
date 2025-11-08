async function sendCommand(command) {
  if (!userToken) {
    alert("You must log in first!");
    return;
  }

  const backendURL = "https://nxs-one.vercel.app/api/roblox-command"; // replace with your backend endpoint

  const response = await fetch(backendURL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${userToken}`
    },
    body: JSON.stringify({ command })
  });

  const data = await response.json();
  alert(data.message || "Command sent!");
}
