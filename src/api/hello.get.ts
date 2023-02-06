import { Request, Response } from 'express';

export default function handle(req: Request, res: Response) {
    res.status(200).json({
        name: "Hello World"
    });
}  
