import React from "react";
import { render, screen } from "@testing-library/react";
import { HelmetProvider } from "react-helmet-async";
import NotFound from "../../pages/NotFound";

const pageTitleContains = (expectedText) => {
    return () => {
        const title = document.title;
        const textExists = (title.indexOf(expectedText) !== -1);
        const message = () => `Expected title "${title}" to contain "${expectedText}"`;
        return { pass: textExists, message };
    };
};

describe("NotFound", () => {
    it("renders without errors", () => {
        render(
            <HelmetProvider>
                <NotFound />
            </HelmetProvider>
        );
        const title = screen.getByRole("heading", { level: 1, name: /404 Page not found/i });
        expect(title).toBeInTheDocument();
    });

    it("displays a 'go to home' button", () => {
        render(
            <HelmetProvider>
                <NotFound />
            </HelmetProvider>
        );
        const link = screen.getByRole("link", { name: /go to home/i });
        expect(link).toHaveAttribute("href", "/");
    });

    it("displays an image of John Travolta", () => {
        render(
            <HelmetProvider>
                <NotFound />
            </HelmetProvider>
        );
        const image = screen.getByRole("img", { name: /john travolta looking for content/i });
        expect(image).toHaveAttribute("src", expect.stringContaining(".gif"));
    });

    test('renders correct page title', () => {
        render(
            <HelmetProvider>
                <div>
                    <NotFound />
                </div> 
            </HelmetProvider>
        );
        expect(pageTitleContains('404 Page Not Found')).toBeTruthy();
    });
});
