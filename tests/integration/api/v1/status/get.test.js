import orchestrator from "tests/orchestrator.js";

beforeAll(async () => {
  await orchestrator.waitForAllServices();
});

test("Get to /api/v1/status shoul return 200", async () => {
  const response = await fetch(
    "http://localhost:3000/api/v1/status?state=active",
  );
  expect(response.status).toBe(200);

  const responseBody = await response.json();
  // expect(responseBody.updated_at).toBeDefined();

  const newDate = new Date(responseBody.updated_at).toISOString();
  expect(responseBody.updated_at).toBe(newDate);

  expect(responseBody.dependencies.database.version).toEqual("16.0");
  expect(responseBody.dependencies.database.max_connections).toEqual(100);
  expect(responseBody.dependencies.database.active_connections).toEqual(1);
});
