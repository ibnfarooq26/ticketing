import request from "supertest";
import { app } from "../../app";

it("checks if the signout is success and cookie is set to null", async () => {
  await request(app)
    .post("/api/users/signup")
    .send({ email: "test@test.com", password: "123456" })
    .expect(201);
  const response = await request(app)
    .post("/api/users/signout")
    .send({})
    .expect(200);

  expect(response.get("Set-Cookie")).toBeDefined;
  expect(response.get("Set-Cookie")[0]).toEqual(
    "session=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT; httponly"
  );
});
