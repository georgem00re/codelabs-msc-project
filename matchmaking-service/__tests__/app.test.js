
const { app } = require("../index.js");
const request = require("supertest");

describe("POST /", () => {

	test("Status code is 200", async () => {
		const res = await request(app).post("/").send({ labID: 12345})
		expect(res.statusCode).toEqual(200);
	})

	test("Cors", async () => {
		const res = await request(app).post("/").send({ labID: 12345})
		expect(res.headers["access-control-allow-origin"]).toEqual("*");
	})

})