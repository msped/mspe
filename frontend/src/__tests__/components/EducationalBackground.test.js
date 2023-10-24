import React from "react";
import { render, screen } from "@testing-library/react";
import EducationalBackground from "../../components/EducationalBackground";

describe("EducationalBackground", () => {
    it("renders without crashing", () => {
        render(<EducationalBackground />);
        expect(screen.getByText("Educational Background")).toBeInTheDocument();
    });

    it("displays section title correctly", () => {
        render(<EducationalBackground />);
        expect(screen.getByText("Educational Background")).toHaveTextContent(
        "Educational Background"
        );
    });

    it("displays each educational background item correctly", () => {
        render(<EducationalBackground />);
        expect(
            screen.getByText("Diploma in Full Stack Software Development - 2020")
        ).toBeVisible();
        expect(
            screen.getByText(
            "Code Institutes Software Development course consists of 4 milestone projects after different learning modules. After learning a new language or frameworks your skills are put to the test in a milestone projects were I earned First Class Honours, equivalent to Level 5 on the European Qualifications Framework."
        )).toBeInTheDocument();
        expect(
            screen.getByText("Sir John Deanes College, Northwich - 2013-2015")
        ).toBeVisible();
        expect(screen.getByText("A-levels")).toBeVisible();
        expect(screen.getByText("Weaverham High School - 2008-2013")).toBeVisible();
        expect(screen.getByText("GCSEs")).toBeVisible();
    });
});
