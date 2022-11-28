import { Response, Express } from "express";

const routes: {
  route: string;
  function: (response: Response, body: any) => Express;
  type?: "post" | "get";
}[] = [
    {
      route: "/auth/login",
      function: require("../packages/auth/login").default,
      type: "post",
    },
    {
      route: "/auth/create-user",
      function: require("../packages/auth/createUser").default,
      type: "post",
    },
    {
      route: "/auth/lost-pass",
      function: require("../packages/auth/lostPass").default,
      type: "post",
    },
    {
      route: "/auth/redefine-pass",
      function: require("../packages/auth/redefinePass").default,
      type: "post",
    },
    {
      route: "/api/create-routine",
      function: require("../packages/routine/createRoutine").default,
      type: "post",
    },
    {
      route: "/api/get-routines",
      function: require("../packages/routine/getRoutine").default,
      type: "post",
    },
    {
      route: "/api/change-infos",
      function: require("../packages/auth/changeInfos").default,
      type: "post",
    },
  ];

export default routes;
