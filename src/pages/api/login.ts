import { NextApiResponse } from "next";
import { withSession, NextIronRequest } from "./withSession";

import { customAlphabet } from "nanoid";

const nanoid = customAlphabet('1234567890', 10)

const handler = async (req: NextIronRequest, res: NextApiResponse) => {
  const { password } = req.body;

  if(password !== "1234") {
    req.session.set("user", undefined);
    res.statusCode = 401;
    res.send({status: "invalid password"});
    return;
  }
  
  const user = {
    id: +nanoid(),
    admin: false,
  };
  req.session.set("user", user);
  await req.session.save();
  res.send(user);
}

export default withSession(handler);
