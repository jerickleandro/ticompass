/* eslint-disable no-unused-vars */
const { exec } = require("node:child_process");
function checkPostgres() {
  exec("docker exec postgres_dev pg_isready --host localhost", handleReturn);

  function handleReturn(error, stdout, stderr) {
    if (stdout.search("accepting connections") === -1) {
      process.stdout.write(".");
      checkPostgres();
      return;
    }
    process.stdout.write("\nPostgres Está pronto para uso\n");
  }
}
process.stdout.write("\n\n\nWaiting for database to be ready...");
checkPostgres();
