import getCode from "../../api/getCode";

describe("getCode function", () => {
    it("returns json of a code object", async () => {
        const code = await getCode();
        expect(code).toEqual({
            "code": "Hood"
        });
    });
});
