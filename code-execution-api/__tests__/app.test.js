
const { app } = require("../index.js");
const request = require("supertest");

describe("POST /javascript", () => {

	test("status code", async () => {
		const res = await request(app).post("/javascript");
		expect(res.statusCode).toEqual(200);
	})

})

describe("POST /python", () => {

	test("status code", async () => {
		const res = await request(app).post("/javascript");
		expect(res.statusCode).toEqual(200);
	})

})

describe("POST /ruby", () => {

	test("status code", async () => {
		const res = await request(app).post("/ruby");
		expect(res.statusCode).toEqual(200);
	})

})