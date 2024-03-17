import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import Sidebar from "../../components/Sidebar";

describe("Sidebar", () => {
    it("renders without errors", () => {
        render(<Sidebar />);
        const menuButton = screen.getByLabelText("menu");
        expect(menuButton).toBeInTheDocument();
    });

    it("opens and closes when the menu button is clicked", () => {
        render(<Sidebar />);
        const menuButton = screen.getByLabelText("menu");

        // Check that the sidebar is initially closed
        expect(screen.queryByRole("presentation")).not.toBeInTheDocument();

        // Click the menu button to open the sidebar
        fireEvent.click(menuButton);
        const drawer = screen.getAllByRole("presentation")[0];
        expect(drawer).toBeInTheDocument();

        // Click the chevron icon to close the sidebar
        const chevronButton = screen.getByTestId("ChevronLeftIcon");
        fireEvent.click(chevronButton);
        expect(screen.queryByRole("presentation")).not.toBeInTheDocument();
    });

    it("navigates to the correct page when a link is clicked", () => {
        render(<Sidebar />);

        // Click the menu button to open the Sidebar
        const menuButton = screen.getByLabelText("menu");

        // Click the menu button to open the sidebar
        fireEvent.click(menuButton);
        const homeLink = screen.getByText("Home");

        // Click the Home link
        fireEvent.click(homeLink);

        // Check that the page navigates to the correct URL
        expect(window.location.href).toBe("http://localhost/");
    });
});
