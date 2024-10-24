import { Router } from "express";
import { locationRoute } from "../modules/location/location.route";
import { userRouter } from "../modules/user/user.route";
import { requestRoute } from "../modules/request/request.route";
export const router = Router();

const moduleRoutes = [
  {
    path: "/location",
    route: locationRoute,
  },
  {
    path: "/user",
    route: userRouter,
  },
  {
    path: "/request",
    route: requestRoute,
  },
];

moduleRoutes?.forEach((route) => {
  router.use(route.path, route.route);
});
