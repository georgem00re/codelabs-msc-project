
const { app } = require("../index.js");
const request = require("supertest");

describe("GET /", () => {

	test("Status Code is 200", async () => {
		const res = await request(app).get("/");
		expect(res.statusCode).toEqual(200);
	})

	test("Content-Type is text/html", async () => {
		const res = await request(app).get("/");
		expect(res.headers["content-type"]).toEqual("text/html; charset=UTF-8");
	})

})

describe("GET /create-lab", () => {

	test("Status Code is 302", async () => {
		const res = await request(app).get("/create-lab");
		console.log(res);
		expect(res.statusCode).toEqual(302);
	})

	test("Test CORS", async () => {
		const res = await request(app).get("/create-lab");
		expect(res.headers["access-control-allow-origin"]).toEqual("*");
	})

	test("Redirect Location Contains /lab/", async () => {
		const res = await request(app).get("/create-lab");
		expect(res.headers["location"]).stringContaining("/lab/")
	})

	test("Content-Type is text/plain", async () => {
		const res = await request(app).get("/create-lab");
		expect(res.headers["content-type"]).toEqual("text/plain; charset=utf-8");
	})

})

describe("GET /lab/:lab", () => {


})