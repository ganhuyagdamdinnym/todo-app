import jwt from "jsonwebtoken";

interface Request {
  headers: {
    token?: string;
  };
  body: {
    token?: string;
  };
}

interface Response {
  status(code: number): any;
  json(data: any): any;
}

interface NextFunction {
  (): void;
}

export const verifyToken =
  () => async (req: Request, res: Response, next: NextFunction) => {
    console.log("working decode");
    const token = req.headers.token || req.body.token;
    if (!token) {
      return Response.json({
        message: "Error: No token provided",
        status: 401,
      });
    } else {
      try {
        const decoded: any = jwt.verify(token, "SomeSecretKey");
        (req as any).user = decoded;
        console.log("token", decoded);
        return next();
      } catch (err) {
        return res.status(401).json({ message: "Error: Invalid token" });
      }
    }
  };
