import { NextApiResponse } from "next";
import { withSession, NextIronRequest } from "./withSession";

const handler = (req: NextIronRequest, res: NextApiResponse) => {
  req.session.destroy();
  res.send({ status: "logged out" });
};

export default withSession(handler);
