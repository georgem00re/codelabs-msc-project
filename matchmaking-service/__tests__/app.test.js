
const { app } = require("../index.js");
const request = require("supertest");

describe("POST /", () => {

	test("status code", async () => {
		const res = await request(app).post("/").send({ labID: 12345})
		expect(res.statusCode).toEqual(200);
	})

	test("access-control-allow-origin", async () => {
		const res = await request(app).post("/").send({ labID: 12345})
		expect(res.headers["access-control-allow-origin"]).toEqual("*");
	})

	test("res.body", async () => {
		const res = await request(app).post("/").send({ labID: 12345})
		expect(typeof parseInt(res.body.port)).toBe("number");
	})

})