import React from "react";
import { render, screen } from "@testing-library/react";
import DevelopmentProjects from "../../components/DevelopmentProjects";

const projectData = [
    {
        title: "AutoSkunkWorks",
        tech:
        "buntu Server, Linux, Nginx, Postgres, Django, Bootstrap, HTML, CSS, JavaScript (jQuery)",
        description:
        "A Django application for car enthusiasts in the management of their modified car builds.",
        link: "https://github.com/msped/autoskunkworks",
    },
    {
        title: "Check the Match",
        tech: "HTML, CSS, React, Football API, React Router DOM, Material UI",
        description:
        "A React Application to view football statistics without seeing the final score of a match.",
        link: "https://github.com/msped/checkthematch",
    },
    {
        title: "Project Parts",
        tech: "PostgreSQL, Django, HTML, CSS, jQuery, AJAX, Stripe.js",
        description:
        "An online competition for car modifications built in Pythons Django Framework.",
        link: "https://github.com/msped/projectparts",
    },
];

describe("DevelopmentProjects", () => {
    it("renders without crashing", () => {
        render(<DevelopmentProjects />);
        expect(screen.getByText("Software Development Projects")).toBeInTheDocument();
    });

    it("renders all project items", () => {
        render(<DevelopmentProjects />);
        const projectItems = screen.getAllByRole("listitem");
        expect(projectItems.length).toBe(projectData.length);
    });

    it("displays project data correctly", () => {
        render(<DevelopmentProjects />);
        projectData.forEach((project, i) => {
            expect(screen.getAllByText(project.title)[0]).toBeInTheDocument();
            expect(screen.getByText(`Technologies: ${project.tech}`)).toBeInTheDocument();
            expect(screen.getByText(project.description)).toBeInTheDocument();
            expect(screen.getAllByRole("link")[i]).toHaveAttribute('href', project.link);
        })
    });
});
