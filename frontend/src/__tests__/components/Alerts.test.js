import React from "react";
import { render, waitFor, screen } from "@testing-library/react";
import Alerts from "../../components/Alerts";

describe("Alerts", () => {
    it("alert shouldn't be in the document before hook call", async () => {
        render(<Alerts />);
        expect(screen.queryByText("Hello user!")).toBeNull();
    });

    it("should display alerts when there are alerts", async () => {
        render(<Alerts />);

        await waitFor(() =>
            screen.findByText("Hello user!").then(() => {
                expect(screen.getByText("Hello user!")).toBeInTheDocument();
            })
        );
    });
});
