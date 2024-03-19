import React from "react";
import { render, screen } from "@testing-library/react";
import QualificationsProfile from "../../components/QualificationsProfile";

test("renders qualifications profile content", () => {
    render(<QualificationsProfile />);

    // Test that the "Professional Experience" heading exists and has the correct text
    const heading = screen.getByText(/Qualifications Profile/i);
    expect(heading).toBeInTheDocument();

    // Test that the qualifications profile text exists and has the correct content
    const qualificationsText = screen.getByText(
        /Demonstrated ability to design and develop software and technical solutions in line with client specifications./i
    );
    expect(qualificationsText).toBeInTheDocument();

    // Test that the "Technologies" heading exists and has the correct text
    const technologiesHeading = screen.getByText(/Technologies:/i);
    expect(technologiesHeading).toBeInTheDocument();

    // Test that each table cell in the "Technologies" table exists and has the correct text
    const environmentsCell = screen.getByText(/Environments:/i);
    expect(environmentsCell).toBeInTheDocument();
    const environmentsValue = screen.getByText(/UNIX, Windows 7\/8\/8.1\/10/i);
    expect(environmentsValue).toBeInTheDocument();
    const applicationsCell = screen.getByText(/Applications:/i);
    expect(applicationsCell).toBeInTheDocument();
    const applicationsValue = screen.getByText(
        /MS Office \(Word, Excel, Outlook, Powerpoint\), Git/i
    );
    expect(applicationsValue).toBeInTheDocument();
    const coreTechnologyCell = screen.getByText(/Core Technology:/i);
    expect(coreTechnologyCell).toBeInTheDocument();
    const coreTechnologyValue = screen.getByText(
        /HTML5, CSS3, Django, Flask, JavaScript, AXAJ, Bootstrap, jQuery, MongoDB, SQL, PostgreSQL, Chrome/i
    );
    expect(coreTechnologyValue).toBeInTheDocument();
});
