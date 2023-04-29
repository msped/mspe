import getAlerts from "../../api/getAlerts";

describe("getAlerts function", () => {
    it("returns an array of alerts", async () => {
        const alerts = await getAlerts();
        expect(alerts).toEqual([{
            "id": 1,
            "message": "Hello user!",
            "severity_display": "warning"
        }]);
    });
});
