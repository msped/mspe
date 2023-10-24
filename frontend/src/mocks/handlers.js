import { rest } from 'msw'

const apiConstant = 'http://localhost:8000/api';

export const handlers = [
    // Get Alerts API Mock
    rest.get(`${apiConstant}/alerts`, (req, res, ctx) => {
        return res(
            ctx.status(200),
            ctx.json([
                {
                    id: 1,
                    message: "Hello user!",
                    severity_display: "warning"
                },
            ])
        )
    }),

    // Get Code API Mock
    rest.get(`${apiConstant}/cv`, (req, res, ctx) => {
        return res(
            ctx.status(200),
            ctx.json([
                {
                    "code": "Hood"
                }
            ])
        )
    }),

    // Get Latest Project API Mock
    rest.get(`${apiConstant}/dev/latest`, (req, res, ctx) => {
        return res(
            ctx.status(200),
            ctx.json({
                "created_date": "23-04-09",
                "description": "This is a test project.\r\n\r\nIt was made with pain.",
                "github_link": "https://github.com./msped/shouldiwatchit",
                "id": 1,
                "logo": null,
                "name": "Check the Match",
                "tech": [],
                "url": "https://checkthematch.mspe.me/",
            })
        )
    }),

    // Get Development Projects API Mock
    rest.get(`${apiConstant}/dev`, (req, res, ctx) => {
        return res(
            ctx.status(200),
            ctx.json([
                {
                    "id": 1,
                    "name": "Check the Match",
                    "logo": null,
                    "description": "This is a test project.\r\n\r\nIt was made with pain.",
                    "url": "https://checkthematch.mspe.me/",
                    "github_link": "https://github.com/msped/shouldiwatchit",
                    "created_date": "2023-04-09",
                    "tech": [
                        {
                            "name": "Material UI",
                            "info": "https://mui.com/"
                        },
                        {
                            "name": "Infiinite Scroll Component",
                            "info": "https://github.com/ankeetmaini/react-infinite-scroll-component#readme"
                        },
                        {
                            "name": "React",
                            "info": "https://react.dev/"
                        }
                    ]
                },
                {
                    "id": 2,
                    "name": "Type Fast",
                    "logo": null,
                    "description": "A speed typing game written in JavaScript.",
                    "url": "http://type-fast.mspe.me/",
                    "github_link": "https://github.com/msped/Type-Fast",
                    "created_date": "2023-01-04",
                    "tech": [
                        {
                            "name": "HTML",
                            "info": null
                        },
                        {
                            "name": "CSS",
                            "info": null
                        },
                        {
                            "name": "Wordnik API",
                            "info": null
                        },
                        {
                            "name": "JavaScript",
                            "info": null
                        }
                    ]
                }
            ])
        )
    })

]