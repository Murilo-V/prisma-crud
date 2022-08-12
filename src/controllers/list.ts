import { Request, Response } from "express";
import { PrismaClient } from '@prisma/client';

export const list = async (req: Request, res: Response) => {
    const prisma = new PrismaClient()
    try {
        const users = await prisma.user.findMany();
        await prisma.$disconnect()
        res.status(200).json({ users });
    } catch (err) {
        await prisma.$disconnect()
        console.error(err);
        res.status(400).json({ err });
    }
};