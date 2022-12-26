import React from "react";
import { Button, Form, Input, Layout } from "antd";
import { useDispatch } from "react-redux";
import { loginAction } from "./redux/action";
import Sider from "antd/es/layout/Sider";
import { Content } from "antd/es/layout/layout";
import { LockOutlined, TwitterOutlined, UserOutlined } from "@ant-design/icons";
import { withFormik } from "formik";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // const loginSuccess = useSelector(sta...)

  const handleLogin = async (value) => {
    console.log("value: ", value);
    try {
      await dispatch(loginAction(value));
      // setTimeout
      navigate("/user");
    } catch (error) {
      console.log("error: ", error);
    }
  };



  return (
    <div>
      <Layout>
        {/* {loginSuccess && message} */}
        <Sider
          width={window.innerWidth / 2}
          style={{
            height: window.innerHeight,
            backgroundImage: "url(https://picsum.photos/2000)",
            backgroundSize: "100%",
          }}
        ></Sider>
        <Content>
          <div className="container" style={{ height: window.innerHeight }}>
            <div
              className="d-flex flex-column justify-center items-center"
              style={{
                height: window.innerHeight,
              }}
            >
              {" "}
              <h3
                className="text-center"
                style={{ fontWeight: 300, fontSize: 35 }}
              >
                Login
              </h3>
              <Form name="basic" onFinish={handleLogin}>
                <Form.Item
                  name="email"
                  rules={[
                    {
                      required: true,
                      message: "Hãy nhập tài khoản !",
                    },
                    // {
                    //   pattern:
                    //     /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                    //   message: "Email không hợp lệ",
                    // },
                  ]}
                >
                  <Input
                    style={{ width: "100%", minWidth: 300 }}
                    name="email"
                    size="large"
                    placeholder=" Email"
                    prefix={<UserOutlined />}
                  ></Input>
                </Form.Item>
                <Form.Item
                  name="passWord"
                  rules={[
                    {
                      required: true,
                      message: "Hãy nhập mật khẩu !",
                    },
                  ]}
                >
                  <Input.Password
                    style={{ width: "100%", minWidth: 300 }}
                    type="password"
                    name="password"
                    size="large"
                    placeholder="password"
                    prefix={<LockOutlined />}
                  ></Input.Password>
                </Form.Item>

                <Form.Item>
                  <Button
                    htmlType="submit"
                    size="large"
                    style={{
                      width: "100%",
                      backgroundColor: "rgb(102,117,223)",
                      color: "#fff",
                    }}
                    className="mt-5"
                  >
                    Login
                  </Button>
                </Form.Item>
                <p className="text-center">
                  Haven't have an account yet?
                  <span> | </span>
                  <Link to="/signup" href="">
                    Register now
                  </Link>
                </p>
              </Form>
              <div className="social mt-3 d-flex">
                <Button
                  style={{
                    backgroundColor: "rgb(59,89,152)",
                  }}
                  shape="circle"
                  size={"large"}
                >
                  <span
                    className="font-weight-bold"
                    style={{
                      color: "#fff",
                    }}
                  >
                    F
                  </span>
                </Button>

                <Button
                  type="primary ml-3"
                  shape="circle"
                  icon={<TwitterOutlined />}
                  size={"large"}
                ></Button>
              </div>
            </div>
          </div>
        </Content>
      </Layout>
    </div>
  );
};

export default Login;
