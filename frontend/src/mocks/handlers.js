import { rest } from 'msw'

const apiConstant = 'http://localhost:8000';

export const handlers = [
    rest.get(`${apiConstant}/api/alerts`, (req, res, ctx) => {
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
    })
]