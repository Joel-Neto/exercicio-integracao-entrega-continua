/* tests/index.test.js */
const request = require("supertest");
const app = require("../src/index");

describe("GET /api", () => {
  it("should return Hello world!", async () => {
    const res = await request(app).get("/api");
    expect(res.statusCode).toEqual(200);
    expect(res.text).toBe("Hello world!");
  });
});

describe("GET /api/test", () => {
  it("should return a test message", async () => {
    const res = await request(app).get("/api/test");
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty("message", "Endpoint de teste");
  });
});

describe("GET /api/test", () => {
  it("should return a test message", async () => {
    const res = await request(app).get("/api/test-2");
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty("message", "Endpoint de teste 2");
  });
});

describe("Test github", () => {
  it("Should return 4 in the sum of 2 + 2", () => {
    const num = 2 + 2;
    expect(num).toBe(4);
  });
});

jest.setTimeout(30000);
