const db = require("../data/dbConfig");
const request = require("supertest");
const server = require("./server");

beforeAll(async () => {
    await db.migrate.rollback()
    await db.migrate.latest()
})
beforeEach(async () => {
    await db.seed.run()
})

afterAll(async () => {
    await db.destroy();  // Ensure to close DB connection after all tests
})

describe("[GET] /hobbits", () => {
    test("responts with 200 Ok", async () => {
        const res = await request(server).get("/hobbits")
        expect(res.status).toBe(200)
    })
    test("responts with all the hobbits", async () => {
        const res = await request(server).get("/hobbits")
        expect(res.body).toHaveLength(4)
    })
})
describe("[POST] /hobbits", () => {
    const bilbo = { name: "bilbo" }
    test("adds a hobbit to the datebase", async () => {
        await request(server).post("/hobbits").send(bilbo)
        expect(await db("hobbits")).toHaveLength(5)
    })
})