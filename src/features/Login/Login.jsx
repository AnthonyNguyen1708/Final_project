import React from "react";
import { Button, Form, Input, Layout } from "antd";
import { useDispatch } from "react-redux";
import { loginAction } from "./redux/action";
import Sider from "antd/es/layout/Sider";
import { Content } from "antd/es/layout/layout";
import {
  FacebookFilled,
  FacebookOutlined,
  LockOutlined,
  TwitterOutlined,
  UserOutlined,
} from "@ant-design/icons";

const Login = () => {
  const dispatch = useDispatch();

  const handleLogin = async (value) => {
    console.log("value: ", value);
    // try {
    //   await dispatch(loginAction(value));
    // } catch (error) {
    //   console.log("error: ", error);
    // }
  };
  return (
    // <div className="container text-center">
    //   <h1>Login</h1>

    //   <div className=" flex justify-center pt-5">
    //     <Form name="basic" onFinish={handleLogin}>
    //       <Form.Item
    //         label="Tài khoản"
    //         name="email"
    //         rules={[
    //           {
    //             required: true,
    //             message: "Hãy nhập tài khoản !",
    //           },
    //           // {
    //           //   pattern: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    //           //   message: "Email không hợp lệ"
    //           // }
    //         ]}
    //       >
    //         <Input />
    //       </Form.Item>
    //       <Form.Item
    //         label="Mật khẩu"
    //         name="passWord"
    //         rules={[
    //           {
    //             required: true,
    //             message: "Hãy nhập mật khẩu !",
    //           },
    //         ]}
    //       >
    //         <Input.Password />
    //       </Form.Item>

    //       <Form.Item
    //         wrapperCol={{
    //           offset: 8,
    //           span: 16,
    //         }}
    //       >
    //         <Button type="primary" htmlType="submit">
    //           Submit
    //         </Button>
    //       </Form.Item>
    //     </Form>
    //   </div>
    // </div>
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
                Login
              </h3>
              <Form>
                <div className="d-flex mt-3">
                  <Input
                    style={{ width: "100%", minWidth: 300 }}
                    name="email"
                    size="large"
                    placeholder=" Email"
                    prefix={<UserOutlined />}
                  ></Input>
                </div>
                <div className="d-flex mt-3">
                  <Input
                    style={{ width: "100%", minWidth: 300 }}
                    type="password"
                    name="password"
                    size="large"
                    placeholder="password"
                    prefix={<LockOutlined />}
                  ></Input>
                </div>
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
