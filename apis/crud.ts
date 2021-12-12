import express, { Request, Response } from "express";
import { getConnection } from 'typeorm';
import { users } from "../entities/users";

const router = express.Router();

router.get("/api/users", async (_req: Request, res: Response) => {
    const userTable = getConnection().getRepository(users);
    res.json(await userTable.find())
})

router.post("/api/users", async (req: Request, res: Response) => {
    const userTable = getConnection().getRepository(users);
    res.json({
        message: "success",
        payload: await userTable.save(req.body)
    });
})

router.get("/api/users/:id", async (req: Request, res: Response) => {
    const { id } = req.params;
    const userTable = getConnection().getRepository(users);
    res.json({
        message: "success",
        payload: await userTable.findOne({ where: { id } })
    })
})

router.delete("/api/users/:id", async (req: Request, res: Response) => {
    const { id } = req.params;
    const userTable = getConnection().getRepository(users);
    res.json({
        message: "success",
        //@ts-ignore
        payload: await userTable.delete(id)

    })
})

router.put("/api/users/:id", async (req: Request, res: Response) => {
    const { id } = req.params;
    const userTable = getConnection().getRepository(users);
    const user:any = await userTable.findOne(id)
    userTable.merge(user, req.body);
    res.json({
        message: "success",
        payload: await userTable.save(user)
    })
})

module.exports = router;