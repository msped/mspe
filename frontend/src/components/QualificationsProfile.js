import React from "react";
import {
    Grid,
    Typography,
    Stack,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableRow,
} from "@mui/material";

export default function QualificationsProfile() {
    return (
        <Grid item xs={12}>
            <Stack direction="column" gap={2}>
                <Typography
                    sx={{ textAlign: "center", fontWeight: 500 }}
                    variant="h4"
                    component="div"
                >
                    Qualifications Profile
                </Typography>
                <Typography>
                    <strong>Software Development:</strong> Demonstrated ability
                    to design and develop software and technical solutions in
                    line with client specifications. Recently completed diploma
                    in Full Stack Software Development from Code Institute,
                    Napier University. I have a level of expertise storing
                    highly sensitive technical data.
                </Typography>
                <Typography>
                    <strong>Web/Application Development: </strong> Able to write
                    modular, reusable, version-controlled code to build
                    responsive websites, as well as ability to develop custom
                    web applications for internal and customer-facing clients
                    with a variety of functionalities and features.
                </Typography>
                <Typography>
                    <strong>Project Management: </strong> Repeated success in
                    managing multiple projects, consistently remaining on or
                    ahead of schedule through effective prioritisation and
                    planning.
                </Typography>
                <Typography>
                    <strong>Key Skills: </strong>A fast learner, dedicated to
                    continually learning emerging technologies, programming
                    languages, techniques, and other best practices. Committed
                    to work collaboratively with cross-functional teams to
                    achieve collective goal and a shared vision.
                </Typography>
                <Stack direction="column" gap={2}>
                    <Typography sx={{ textDecoration: "underline" }}>
                        Technologies:
                    </Typography>
                    <TableContainer>
                        <Table>
                            <TableBody>
                                <TableRow>
                                    <TableCell>Environments:</TableCell>
                                    <TableCell>
                                        UNIX, Windows 7/8/8.1/10
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>Applications:</TableCell>
                                    <TableCell>
                                        MS Office (Word, Excel, Outlook,
                                        Powerpoint), Git
                                    </TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>Core Technology:</TableCell>
                                    <TableCell>
                                        HTML5, CSS3, Django, Flask, JavaScript,
                                        AXAJ, Bootstrap, jQuery, MongoDB, SQL,
                                        PostgreSQL, Chrome Developer Tools
                                    </TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Stack>
            </Stack>
        </Grid>
    );
}
