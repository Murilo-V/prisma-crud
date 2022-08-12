import { Request, Response } from "express";

export const exclude = async (req: Request, res: Response) => {
    try {
        res.status(200).json({ message: "ok" });
    } catch (err) {
        console.error(err);
        res.status(500).json({ err });
    }
};