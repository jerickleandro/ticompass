import database from "infra/database.js";

async function status(request, response) {
  const state = request.query.state;
  const updatedAt = new Date().toISOString();
  const connections = await database.query("SHOW MAX_CONNECTIONS;");
  const active_connections = await database.query({ text: "SELECT COUNT(*):: int FROM pg_stat_activity WHERE state = $1;", values: [state] });
  const version = await database.query("SHOW server_version;");
  return response.status(200).json({
    updated_at: updatedAt, dependencies: {
      database: {
        version: version.rows[0].server_version,
        max_connections: parseInt(connections.rows[0].max_connections),
        active_connections: active_connections.rows[0].count
      }
    }
  })
}

export default status;
