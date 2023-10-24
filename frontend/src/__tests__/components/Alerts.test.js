import React from "react";
import { render, screen } from "@testing-library/react";
import Alerts from "../../components/Alerts";

describe("Alerts", () => {
    it("should display alerts when there are alerts", async () => {
        render(<Alerts />);

        await screen.findByText("Hello user!").then(() => {
            expect(screen.getByText("Hello user!")).toBeInTheDocument();
        });
    });
});
