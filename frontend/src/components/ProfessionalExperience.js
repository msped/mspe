import React from "react";
import { Grid, Typography, Box } from "@mui/material";

export default function ProfessionalExperience() {
    return (
        <Grid container item xs={12} spacing={3}>
            <Grid item xs={12}>
                <Box sx={{ textAlign: "center" }}>
                    <Typography fontWeight={500} variant="h4" component="div">
                        Professional Experience
                    </Typography>
                </Box>
            </Grid>

            <Grid item xs={12} md={6}>
                <Typography sx={{ textDecoration: "underline" }}>
                    Cheshire Police, Winsford
                </Typography>
                <div>
                    <span>
                        <strong>Data Management Assistant</strong>, 08/2016 -
                        Present
                    </span>
                    <p>
                        <strong>Key Accomplishments</strong>
                    </p>
                    <p>
                        Serve as a proactive part of the team, managing,
                        storing, and distributing highly sensitive technical
                        files. Ensure storage and security of the sensitive data
                        and confidential technical material. Build and maintain
                        long-term professional relationships with third party
                        offsite storage providers. Manage sensitive digitally
                        recording interviews with stakeholders within courts,
                        legal entities, state managed bodies, and solicitors in
                        line with data protection legislation.
                    </p>
                    <ul>
                        <li>
                            Recorded and updated 722 records to reflect correct
                            offence for retention and future searches.
                        </li>
                        <li>
                            Successfully located 100+ unaccounted for items and
                            returned for storage and retention.
                        </li>
                        <li>
                            Examined 800 media boxes prior to destruction to
                            split serious crimes from volume crime.
                        </li>
                        <li>
                            Slashed security incidents by updating metadata and
                            forwarded information to information commissioner's
                            office.
                        </li>
                    </ul>
                </div>
            </Grid>

            <Grid item xs={12} md={6}>
                <Typography sx={{ textDecoration: "underline" }}>
                    Asda, Winsford
                </Typography>
                <div>
                    <span>
                        <strong>Sales Adviser</strong>, 11/2013 - 07/2016
                    </span>

                    <p>
                        <strong>Key Accomplishments</strong>
                    </p>
                    <p>
                        Supported ample amount customers in shopping, educating
                        them about product features and recommending products
                        following their requirements. Developed and strengthened
                        long-term professional relationships with all customers
                        for repeat business. Supervised daily stock levels,
                        ensured enough products were consistently available for
                        the consumers and regularly checked and updated stock
                        prices to ensure clarification at the front end for all
                        consumers.
                    </p>
                    <ul>
                        <li>
                            Rearranged 15 aisles within strict time frames
                            (8pm-9am) to prepared plans for store reinvention
                        </li>
                        <li>
                            Consistently met deadlines and targets ready for
                            opportunity every day.
                        </li>
                        <li>
                            Accomplished customer satisfaction to a high level
                            by greeting customers and ensuring their needs were
                            met.
                        </li>
                    </ul>
                </div>
            </Grid>
        </Grid>
    );
}
