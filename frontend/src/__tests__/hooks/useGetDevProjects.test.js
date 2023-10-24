import { renderHook, waitFor } from "@testing-library/react";
import useGetDevProjects from "../../hooks/useGetDevProjects";

describe("useGetDevProjects", () => {
    it("should fetch development projects from the API and return it", async () => {

        const { result } = renderHook(() => useGetDevProjects());

        expect(result.current).toEqual({
            "isLoading": false, // not sure why this is false, should it not be true?
            "projects": []
        });

        await waitFor(() => {
            expect(result.current).toEqual({
                "isLoading": false,
                "projects": [
                {
                    "id": 1,
                    "name": "Check the Match",
                    "logo": null,
                    "description": "This is a test project.\r\n\r\nIt was made with pain.",
                    "url": "https://checkthematch.mspe.me/",
                    "github_link": "https://github.com/msped/shouldiwatchit",
                    "created_date": "2023-04-09",
                    "tech": [
                        {
                            "name": "Material UI",
                            "info": "https://mui.com/"
                        },
                        {
                            "name": "Infiinite Scroll Component",
                            "info": "https://github.com/ankeetmaini/react-infinite-scroll-component#readme"
                        },
                        {
                            "name": "React",
                            "info": "https://react.dev/"
                        }
                    ]
                },
                {
                    "id": 2,
                    "name": "Type Fast",
                    "logo": null,
                    "description": "A speed typing game written in JavaScript.",
                    "url": "http://type-fast.mspe.me/",
                    "github_link": "https://github.com/msped/Type-Fast",
                    "created_date": "2023-01-04",
                    "tech": [
                        {
                            "name": "HTML",
                            "info": null
                        },
                        {
                            "name": "CSS",
                            "info": null
                        },
                        {
                            "name": "Wordnik API",
                            "info": null
                        },
                        {
                            "name": "JavaScript",
                            "info": null
                        }
                    ]
                }]
            });
        })
    });
});
