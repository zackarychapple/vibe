import TwitterClone from "../components/TwitterClone";
import { Outlet } from "@tanstack/react-router";
import * as React from "react";

const GrokR = React.lazy(() => import('grok/grok'));
const CreateR = React.lazy(() => import('create/create'));

export default function Root() {
  return (
    <>
      <GrokR />
      <CreateR />
      <TwitterClone />
      {/*TODO: Use this outlet within the twitter clone*/}
      <Outlet />
    </>
  );
}
