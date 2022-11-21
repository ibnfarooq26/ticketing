import Router from "next/router";
import { useEffect } from "react";
import useRequest from "../../hooks/use-request";

function signout() {
  const { doRequest } = useRequest({
    url: "/api/users/signout",
    body: {},
    method: "post",
    onSuccess: () => Router.push("/"),
  });
  useEffect(() => {
    doRequest();
  }, []);
  return <div>signing out...</div>;
}

export default signout;
