import TwitterClone from "../components/TwitterClone";
import { Outlet } from "@tanstack/react-router";

export default function Root() {
  return (
    <>
      <TwitterClone />
      {/*TODO: Use this outlet within the twitter clone*/}
      <Outlet />
    </>
  );
}
