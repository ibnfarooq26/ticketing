import axios from "axios";

export default function ({ req }) {
  if (typeof window == "undefined") {
    // address from inside the server request through nginx is:
    // http://<ServiceName>.<Namespace>.svc.cluster.local/
    return axios.create({
      baseURL:
        "http://ingress-nginx-controller.ingress-nginx.svc.cluster.local",
      headers: req.headers,
    });
  } else {
    return axios.create({
      baseURL: "/",
    });
  }
}
