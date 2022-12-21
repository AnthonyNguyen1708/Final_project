// import React, { useState } from "react";
// import { DesktopOutlined, FileOutlined, TeamOutlined } from "@ant-design/icons";
// import { Layout, Menu, theme } from "antd";
// const { Sider } = Layout;
// function getItem(label, key, icon, children) {
//   return {
//     key,
//     icon,
//     children,
//     label,
//   };
// }
// const items = [
//   getItem("Projects", "sub1", <DesktopOutlined />, [
//     getItem("View all projects", "3"),
//     getItem("Create projects", "4"),
//   ]),
//   getItem("USers", "sub2", <TeamOutlined />, [
//     getItem("Team 1", "6"),
//     getItem("Team 2", "8"),
//   ]),
//   getItem("Create Task", "9", <FileOutlined />),
// ];

// const HeaderComponent = () => {
//   const [collapsed, setCollapsed] = useState(false);
//   const {
//     token: { colorBgContainer },
//   } = theme.useToken();
//   return (
//     <Layout
//       style={{
//         minHeight: "100vh",
//       }}
//     >
//       <Sider
//         collapsible
//         collapsed={collapsed}
//         onCollapse={(value) => setCollapsed(value)}
//       >
//         <div
//           className="text-white text-2xl text-center"
//           style={{
//             height: 32,
//             margin: 16,
//             background: "rgba(255, 255, 255, 0.2)",
//           }}
//         >
//           JIRA{" "}
//         </div>
//         <Menu
//           theme="dark"
//           defaultSelectedKeys={["1"]}
//           mode="inline"
//           items={items}
//         />
//       </Sider>
//     </Layout>
//   );
// };

// export default HeaderComponent;
