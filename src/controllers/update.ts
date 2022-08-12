import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";

export const update = async ({ body: { data } }: Request, res: Response) => {
    const prisma = new PrismaClient();
    try {
        await prisma.user.create({ data });
        await prisma.$disconnect();
        res.status(200).json({ message: "ok" });
    } catch (err) {
        await prisma.$disconnect();
        console.error(err);
        res.status(400).json({ err });
    }
};