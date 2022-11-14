import request from "supertest";
import { app } from "../../app";
it(" returns 201 if the reponse is success", async () => {
  return request(app)
    .post("/api/users/signup")
    .send({
      email: "test@test.com",
      password: "password",
    })
    .expect(201);
});

it("returns 400 if the request has invalid email", async () => {
  return request(app)
    .post("/api/users/signup")
    .send({
      email: "abcdef",
      password: "123456",
    })
    .expect(400);
});

it("returns 400 if the request has invalid password", async () => {
  return request(app)
    .post("/api/users/signup")
    .send({
      email: "test@gmail.com",
      password: "1",
    })
    .expect(400);
});

it("returns 400 if the request has empty values", async () => {
  return request(app)
    .post("/api/users/signup")
    .send({
      email: "",
      password: "",
    })
    .expect(400);
});

it("returns 400 if the duplicate emails for signup", async () => {
  await request(app)
    .post("/api/users/signup")
    .send({
      email: "test@test.com",
      password: "123456",
    })
    .expect(201);
  await request(app)
    .post("/api/users/signup")
    .send({
      email: "test@test.com",
      password: "123456",
    })
    .expect(400);
});

it("checks if the response has Set-Cookie property", async () => {
  const response = await request(app)
    .post("/api/users/signup")
    .send({
      email: "test@test.com",
      password: "123456",
    })
    .expect(201);

  expect(response.get("Set-Cookie")).toBeDefined();
});
