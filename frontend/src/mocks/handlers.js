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
    })

]