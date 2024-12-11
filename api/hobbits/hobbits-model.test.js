const db = require("../../data/dbConfig");
const Hobbit = require("./hobbits-model");

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

test("[1]environment is testing", () => {
expect(process.env.NODE_ENV).toBe("testing")
})

describe("getAll", () => {
    test("[2]resolves all the hobbits in the table", async () => {
        const result = await Hobbit.getAll()
        // console.log(result) 16:36
        expect(result).toHaveLength(4)
        expect(result[0]).toMatchObject({ name: "sam" })
        expect(result[1]).toMatchObject({ name: "frodo" })
        expect(result[2]).toMatchObject({ name: "pippin" })
        expect(result[3]).toMatchObject({ name: "merry" })
    })
    
})
    describe("getById", () => {
        test("[3]resolves the hobbit by the given id", async () => {
            let result = await Hobbit.getById(1)
            expect(result).toMatchObject({ name: "sam" })
             result = await Hobbit.getById(2)
            expect(result).toMatchObject({ name: "frodo" })
             result = await Hobbit.getById(3)
            expect(result).toMatchObject({ name: "pippin" })
             result = await Hobbit.getById(4)
            expect(result).toMatchObject({ name: "merry" })
        })
})
describe("insert", () => {
    const bilbo = { name: "bilbo" }
    test("[4]resolves the newly created hobbits", async () => {
        const result = await Hobbit.insert(bilbo)
        expect(result).toMatchObject(bilbo)
    })
    test("[5]adds the hobbit to the hobbits table", async () => {

    })
})
