import { renderHook, waitFor } from "@testing-library/react";
import useGetLatestProject from "../../hooks/useGetLatestProject";

describe("useGetLatestProject", () => {
    it("should fetch latest project from the API and return it", async () => {

        const { result } = renderHook(() => useGetLatestProject());

        expect(result.current).toEqual({
            "isLoading": false, // same with this, should it not be true?
            "project": []
        });

        await waitFor(() => {
            expect(result.current).toEqual({
                "isLoading": false,
                "project": {
                    "created_date": "23-04-09",
                    "description": "This is a test project.\r\n\r\nIt was made with pain.",
                    "github_link": "https://github.com./msped/shouldiwatchit",
                    "id": 1,
                    "logo": null,
                    "name": "Check the Match",
                    "tech": [],
                    "url": "https://checkthematch.mspe.me/",
                }
            });
        })
    });
});
