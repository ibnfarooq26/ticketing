import axios from "axios";
import buildClient from "../api/build-client";
function LandingPage({ currentUser }) {
  return currentUser ? (
    <div>You are signed In</div>
  ) : (
    <div>You are signed out</div>
  );
}
// context in index.js and other components will be === {req,res}
LandingPage.getInitialProps = async (context) => {
  console.log("landing page");
  const client = buildClient(context);
  const { data } = await client.get("/api/users/currentuser");
  return data;
};

export default LandingPage;
