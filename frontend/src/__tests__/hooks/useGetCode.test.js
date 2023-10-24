import { renderHook, waitFor } from "@testing-library/react";
import useGetCode from "../../hooks/useGetCode";

describe("useGetCode", () => {
    it("should fetch code from the API and return it", async () => {

        const { result } = renderHook(() => useGetCode());

        expect(result.current).toEqual([]);

        await waitFor(() => {
            expect(result.current).toEqual([
                {
                    "code": "Hood"
                }
            ]);
        })
    });
});
