import database from "infra/database.js";

async function status(request, response) {
  const result = await database.query("SELECT 1 + 1;")
  return response.status(200).json({ status: "OK" })
}

export default status;
