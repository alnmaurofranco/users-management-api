// import "express-async-errors";
import express from "express";

import { usersRoutes } from "./routes/users.routes";

const app = express();

app.use(express.json());

app.use("/users", usersRoutes);

// app.use(
//   (
//     error: Error,
//     _request: Request,
//     response: Response,
//     _next: NextFunction
//   ) => {
//     if (error instanceof AppError) {
//       return response.status(error.statusCode).json({
//         error: error.message,
//         // message: error.message,
//       });
//     }

//     return response.status(500).json({
//       status: "error",
//       message: `Internal server error ${error.message}`,
//     });
//   }
// );

export { app };
