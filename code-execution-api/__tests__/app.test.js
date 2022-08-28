
const { app } = require("../index.js");
const request = require("supertest");

describe("POST /javascript", () => {

	test("status code", async () => {
		const res = await request(app).post("/javascript").send({ code: 'console.log("testing")' })
		expect(res.statusCode).toEqual(200);
	})

	test("content-type", async () => {
		const res = await request(app).post("/javascript").send({ code: 'console.log("testing")' });
		expect(res.headers["content-type"]).toEqual("application/json; charset=utf-8");
	})

	test("res.body", async () => {
		const res = await request(app).post("/javascript").send({ code: 'console.log("testing")' })
		expect(res.body.output).toEqual("testing\n");
	})

})

describe("POST /python", () => {

	test("status code", async () => {
		const res = await request(app).post("/python").send({ code: 'print("testing")' })
		expect(res.statusCode).toEqual(200);
	})

	test("content-type", async () => {
		const res = await request(app).post("/python").send({ code: 'print("testing")' });
		expect(res.headers["content-type"]).toEqual("application/json; charset=utf-8");
	})	

	test("res.body", async () => {
		const res = await request(app).post("/python").send({ code: 'print("testing")' })
		expect(res.body.output).toEqual("testing\n");
	})

})

describe("POST /ruby", () => {

	test("status code", async () => {
		const res = await request(app).post("/ruby").send({ code: 'puts "testing"' });
		expect(res.statusCode).toEqual(200);
	})

	test("content-type", async () => {
		const res = await request(app).post("/ruby").send({ code: 'puts "testing"' });
		expect(res.headers["content-type"]).toEqual("application/json; charset=utf-8");
	})	

	test("res.body", async () => {
		const res = await request(app).post("/ruby").send({ code: 'puts "testing"' })
		expect(res.body.output).toEqual("testing\n");
	})

})

// content-type: application/json; charset=utf-8