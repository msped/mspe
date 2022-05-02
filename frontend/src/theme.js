import { createTheme, responsiveFontSizes } from '@mui/material'

export default function CustomTheme() {
    const theme = createTheme({
        palette: {
            type: "dark",
            primary: {
                main: "#45a3fb",
            },
            secondary: {
                main: "#1f1e1e",
            },
            error: {
                main: "#ed474a",
            },
            success: {
                main: "#0BE876",
                contrastText: "rgba(255,255,255,0.87)",
            },
            background: {
                default: "#25282C",
                paper: "#191C20",
            },
            warning: {
                main: "#ffb427",
                contrastText: "#ffffff",
            },
        },
        overrides: {
            MuiAppBar: {
                colorInherit: {
                    backgroundColor: "#111417",
                    color: "#fff",
                },
            },
        },
        props: {
            MuiAppBar: {
                color: "inherit",
            },
        },
    });

    return responsiveFontSizes(theme)
}
