import { Router, Request, Response } from "express";

const router: Router = Router();

// GET /api/users - Get all users
router.get("/users", (req: Request, res: Response) => {
  res.status(200).send(`User list will go here.`);
});

export default router;
