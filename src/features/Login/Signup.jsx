import React from "react";
import { Button, Form, Input, Layout } from "antd";
import Sider from "antd/es/layout/Sider";
import { Content } from "antd/es/layout/layout";
import {
  LockOutlined,
  MailOutlined,
  PhoneOutlined,
  TwitterOutlined,
  UserOutlined,
} from "@ant-design/icons";
import FormItem from "antd/es/form/FormItem";
import { signupAction } from "./redux/action";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

const Signup = () => {
  const dispatch = useDispatch();
  const handleSignup = (value) => {
    console.log("value: ", value);
    dispatch(signupAction(value));
  };

  return (
    <div>
      <Layout>
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
                Register
              </h3>
              <Form name="basic" onFinish={handleSignup}>
                <Form.Item
                  name="name"
                  rules={[
                    {
                      required: true,
                      message: "Name must be required !",
                    },
                  ]}
                >
                  <Input
                    style={{ width: "100%", minWidth: 300 }}
                    name="name"
                    size="large"
                    placeholder=" Name"
                    prefix={<UserOutlined />}
                  ></Input>
                </Form.Item>

                <Form.Item
                  name="email"
                  rules={[
                    {
                      required: true,
                      message: "Email must be required !",
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
                    prefix={<MailOutlined />}
                  ></Input>
                </Form.Item>

                <Form.Item
                  name="phone"
                  rules={[
                    {
                      required: true,
                      message: "Phone number must be required !",
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
                    name="phone"
                    size="large"
                    placeholder=" Phone number"
                    prefix={<PhoneOutlined />}
                  ></Input>
                </Form.Item>

                <Form.Item
                  name="PassWord"
                  rules={[
                    {
                      required: true,
                      message: "Password must be required !",
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
                    Register
                  </Button>
                </Form.Item>
              </Form>
              <p>
                Already have an account?
                <span> | </span>
                <Link to="/" href="">Login now</Link>
              </p>
            </div>
          </div>
        </Content>
      </Layout>
    </div>
  );
};

export default Signup;
