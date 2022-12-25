//create requester + call axios

import axios from "axios";

const requester = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    TokenCybersoft: process.env.REACT_APP_CYBERSOFT_TOKEN,
  },
});

requester.interceptors.request.use((req) => {
  req.headers = {
    ...req.headers,
    Authorization: "Bearer " + localStorage.getItem("token"),
  };
  return req;
});

export default requester;

//localStorage.getItem("token")

//eyJhbGciOiJodHRwOi8vd3d3LnczLm9yZy8yMDAxLzA0L3htbGRzaWctbW9yZSNobWFjLXNoYTI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9lbWFpbGFkZHJlc3MiOiJhYmMxNDEyQGdtYWlsLmNvbSIsIm5iZiI6MTY3MTUyNjE1MywiZXhwIjoxNjcxNTI5NzUzfQ.D7E8BIbybj9O8fp-wuqNfoDpJ5JjPHbUzDpSfNDIJPI
