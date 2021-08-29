// this file is a wrapper with defaults to be used in both API routes and `getServerSideProps` functions
import { NextApiRequest, NextApiResponse } from "next";
import { Session, withIronSession } from "next-iron-session";

// optionally add stronger typing for next-specific implementation
export type NextIronRequest = NextApiRequest & { session: Session };
export type NextIronHandler = (
  req: NextIronRequest,
  res: NextApiResponse
) => any | Promise<any>;

export const withSession = (handler: NextIronHandler) =>
  withIronSession(handler, {
    password:
      process.env.SECRET_COOKIE_PASSWORD ?? "QJvL1EqyyEQFBA2md4k6P2GQJV2LGjCg",
    cookieName: "session",
    cookieOptions: {
      // the next line allows to use the session in non-https environments like
      // Next.js dev mode (http://localhost:3000)
      secure: process.env.NODE_ENV === "production",
    },
  });
