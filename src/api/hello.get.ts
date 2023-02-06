import { Request, Response } from 'express';

export type hey = {
    a: string;
}

export default function handle(req: Request, res: Response) {
    const a: hey = {
        a: "Hello World"
    }

    console.log(a);


    res.status(200).json({
        name: "Hello World"
    });
}  