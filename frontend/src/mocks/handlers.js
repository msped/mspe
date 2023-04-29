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
            ctx.json({"code": "Hood"})
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
    })

]