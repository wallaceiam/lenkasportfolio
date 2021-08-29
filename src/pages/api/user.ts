import { NextApiResponse } from "next";
import { withSession, NextIronRequest } from "./withSession";

const handler = (req: NextIronRequest, res: NextApiResponse) => {
  const user = req.session.get("user");
  res.send({ ...user, isLoggedIn: user !== undefined });
};

export default withSession(handler);
