import getLatestProject from "../../api/getLatestProject";

describe("getLatestProject function", () => {
    it("returns an an object for the latest project", async () => {
        const latestProject = await getLatestProject();
        expect(latestProject).toEqual({
            "created_date": "23-04-09",
            "description": "This is a test project.\r\n\r\nIt was made with pain.",
            "github_link": "https://github.com./msped/shouldiwatchit",
            "id": 1,
            "logo": null,
            "name": "Check the Match",
            "tech": [],
            "url": "https://checkthematch.mspe.me/",
        });
    });
});
