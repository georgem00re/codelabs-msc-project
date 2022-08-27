
const { app } = require("../index.js");
const request = require("supertest");

describe("GET /", () => {

	test("status code", async () => {
		const res = await request(app).get("/");
		expect(res.statusCode).toEqual(200);
	})

	test("content-type", async () => {
		const res = await request(app).get("/");
		expect(res.headers["content-type"]).toEqual("text/html; charset=UTF-8");
	})

	test("access-control-allow-origin", async () => {
		const res = await request(app).get("/");
		expect(res.headers["access-control-allow-origin"]).toEqual("*")
	})

})

describe("GET /create-lab", () => {

	test("status code", async () => {
		const res = await request(app).get("/create-lab");
		expect(res.statusCode).toEqual(302);
	})

	test("content-type", async () => {
		const res = await request(app).get("/create-lab");
		expect(res.headers["content-type"]).toEqual("text/plain; charset=utf-8");
	})

	test("access-control-allow-origin", async () => {
		const res = await request(app).get("/create-lab");
		expect(res.headers["access-control-allow-origin"]).toEqual("*");
	})

	test("location", async () => {
		const res = await request(app).get("/create-lab");
		expect(res.headers["location"]).toContain("/lab/")
	})

})

describe("GET /lab/:lab", () => {


})