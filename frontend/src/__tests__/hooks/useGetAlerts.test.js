import { renderHook, waitFor } from "@testing-library/react";
import useGetAlerts from "../../hooks/useGetAlerts";

describe("useGetAlerts", () => {
    it("should fetch alerts from the API and return it", async () => {

        const { result } = renderHook(() => useGetAlerts());

        expect(result.current).toEqual([]);

        await waitFor(() => {
            expect(result.current).toEqual([
                {
                    "id": 1,
                    "message": "Hello user!",
                    "severity_display": "warning"
                },
            ]);
        })
    });
});
