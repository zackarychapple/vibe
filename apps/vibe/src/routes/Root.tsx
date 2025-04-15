import TwitterClone from "../components/TwitterClone";
import { Outlet } from "@tanstack/react-router";
import * as React from "react";

const GrokR = React.lazy(() => import('grok/grok'));
const CreateR = React.lazy(() => import('create/create'));
const FeedR = React.lazy(() => import('feed/feed'));

export default function Root() {
  return (
    <>
      <GrokR />
      <CreateR />
      <FeedR />
      <TwitterClone />
      {/*TODO: Use this outlet within the twitter clone*/}
      <Outlet />
    </>
  );
}
