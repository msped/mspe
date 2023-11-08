import React from "react";
import { Grid, Typography, Box } from "@mui/material";

const styles = {
    centerText: {
        textAlign: "center",
    },
    underline: {
        textDecoration: "underline",
    },
};

export default function ProfessionalExperience() {
    return (
        <Grid container item xs={12} spacing={3}>
            <Grid item xs={12}>
                <Box sx={{ ...styles.centerText }}>
                    <Typography fontWeight={500} variant="h4" component="div">
                        Professional Experience
                    </Typography>
                </Box>
            </Grid>

            <Grid item xs={12} md={6}>
                <Typography sx={{ ...styles.underline }}>
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
                        storing, and distributing highly sensitive (personal
                        data) technical files. Ensure storage and security of
                        the sensitive data and confidential technical material.
                        Build and maintain long-term professional relationships
                        with third party offsite storage providers. Manage
                        sensitive digitally recorded interviews with
                        stakeholders within courts, legal entities, statutory
                        bodies, and legal representatives in line with data
                        protection legislation (GDPR).
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
                            split 'serious crimes' from 'volume crime'.
                        </li>
                        <li>
                            Significantly reduced security incidents by updating
                            metadata and forwarded information to Information
                            Commissioner's Office.
                        </li>
                    </ul>
                </div>
            </Grid>

            <Grid item xs={12} md={6}>
                <Typography sx={{ ...styles.underline }}>
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
                        Supported customers in their shopping experience,
                        educating them about product features and recommending
                        products that specifically matched their requirements.
                        Developed and strengthened long-term professional
                        relationships with all customers for repeat business.
                        Supervised daily stock levels, ensured enough products
                        were consistently available for the consumers and
                        regularly checked and updated stock prices to ensure
                        clarification 'at the front end' for all consumers.
                    </p>
                    <ul>
                        <li>
                            Rearranged 15 aisles within strict time frames
                            (8pm-9am) to prepared plans for store reinvention.
                        </li>
                        <li>
                            Consistently met deadlines and targets ready for
                            opportunity every day.
                        </li>
                        <li>
                            Accomplished customer satisfaction to a high level
                            by greeting customers and ensuring their needs were
                            consistently met.
                        </li>
                    </ul>
                </div>
            </Grid>
        </Grid>
    );
}
