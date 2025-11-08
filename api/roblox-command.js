// api/roblox-command.js
export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { command } = req.body;
  const auth = req.headers.authorization;

  // Basic token check (replace later with your real auth system)
  if (auth !== "Bearer fake-user-token") {
    return res.status(403).json({ message: "Unauthorized" });
  }

  console.log("Command received:", command);

  // TODO: Add your Roblox Open Cloud or webhook logic here
  // For now, just return success
  res.status(200).json({ message: `Command '${command}' received successfully.` });
}
