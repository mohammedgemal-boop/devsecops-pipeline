
const request = require("supertest");
const app = require("../src/app");

describe("DevSecOps Book API Tests", () => {

  // Test 1: Health endpoint
  test("GET /health should return API status OK", async () => {
    const response = await request(app).get("/health");

    expect(response.statusCode).toBe(200);
    expect(response.body.status).toBe("OK");
    expect(response.body.message).toBe(
      "DevSecOps API is running"
    );
  });

  // Test 2: Books endpoint
  test("GET /api/books should return all books", async () => {
    const response = await request(app).get("/api/books");

    expect(response.statusCode).toBe(200);
    expect(response.body.count).toBe(3);
    expect(response.body.data).toHaveLength(3);
  });

  // Test 3: Verify book information
  test("Books should contain valid information", async () => {
    const response = await request(app).get("/api/books");

    expect(response.body.data[0]).toHaveProperty("title");
    expect(response.body.data[0]).toHaveProperty("author");
  });

});
