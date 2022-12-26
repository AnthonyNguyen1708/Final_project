import React, { useRef, useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteUser, fetchUserList } from "../redux/action";
import { Modal, Form, Input, Table } from "antd";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { SearchOutlined } from "@ant-design/icons";
import { Button, Space } from "antd";
import Highlighter from "react-highlight-words";

import HeaderComponent from "components/HeaderComponent";
import {
  LockOutlined,
  MailOutlined,
  PhoneOutlined,
  UserOutlined,
} from "@ant-design/icons";

const UserList = () => {
  const [searchText, setSearchText] = useState("");
  const [searchedColumn, setSearchedColumn] = useState("");
  const searchInput = useRef(null);

  const handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm();
    setSearchText(selectedKeys[0]);
    setSearchedColumn(dataIndex);
  };
  const handleReset = (clearFilters) => {
    clearFilters();
    setSearchText("");
  };
  const getColumnSearchProps = (dataIndex) => ({
    filterDropdown: ({
      setSelectedKeys,
      selectedKeys,
      confirm,
      clearFilters,
      close,
    }) => (
      <div
        style={{
          padding: 8,
        }}
        onKeyDown={(e) => e.stopPropagation()}
      >
        <Input
          ref={searchInput}
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={(e) =>
            setSelectedKeys(e.target.value ? [e.target.value] : [])
          }
          onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
          style={{
            marginBottom: 8,
            display: "block",
          }}
        />
        <Space>
          <Button
            type="primary"
            onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
            icon={<SearchOutlined />}
            size="small"
            style={{
              width: 90,
            }}
          >
            Search
          </Button>
          <Button
            onClick={() => clearFilters && handleReset(clearFilters)}
            size="small"
            style={{
              width: 90,
            }}
          >
            Reset
          </Button>
          <Button
            type="link"
            size="small"
            onClick={() => {
              confirm({
                closeDropdown: false,
              });
              setSearchText(selectedKeys[0]);
              setSearchedColumn(dataIndex);
            }}
          >
            Filter
          </Button>
          <Button
            type="link"
            size="small"
            onClick={() => {
              close();
            }}
          >
            close
          </Button>
        </Space>
      </div>
    ),
    filterIcon: (filtered) => (
      <SearchOutlined
        style={{
          color: filtered ? "#1890ff" : undefined,
        }}
      />
    ),
    onFilter: (value, record) =>
      record[dataIndex].toString().toLowerCase().includes(value.toLowerCase()),
    onFilterDropdownOpenChange: (visible) => {
      if (visible) {
        setTimeout(() => searchInput.current?.select(), 100);
      }
    },
    render: (text) =>
      searchedColumn === dataIndex ? (
        <Highlighter
          highlightStyle={{
            backgroundColor: "#ffc069",
            padding: 0,
          }}
          searchWords={[searchText]}
          autoEscape
          textToHighlight={text ? text.toString() : ""}
        />
      ) : (
        text
      ),
  });

  const [open, setOpen] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUserList);
  }, []);

  const userList = useSelector((state) => state.userList.userList);

  const columns = [
    {
      title: "No.",
      key: "no",
      dataIndex: "userId",
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      ...getColumnSearchProps("name"),
    },
    {
      title: "ID",
      dataIndex: "userId",
      key: "userId",
      ...getColumnSearchProps("userId"),
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Phone Number",
      dataIndex: "phoneNumber",
      key: "phoneNumber",
    },
    {
      title: "Action",
      key: "action",
      dataIndex: "userId",
      render: (dataIndex) => (
        <div>
          <EditOutlined
            className="px-1 ant-btn ant-btn-icon-only bg-transparent hover:bg-transparent focus:bg-transparent text-blue-700 hover:text-blue-500 focus:text-blue-500 border-0 shadow-none cursor-pointer"
            onClick={() => setOpen(true)}
          />

          <DeleteOutlined
            onClick={() => {
              dispatch(deleteUser(dataIndex));
            }}
            className="px-1 ant-btn ant-btn-icon-only bg-transparent hover:bg-transparent focus:bg-transparent text-red-600 hover:text-red-500 focus:text-red-500 border-0 shadow-none"
          ></DeleteOutlined>
        </div>
      ),
    },
  ];

 
  return (
    <div>
      <HeaderComponent />
      <div className="container">
        <Table columns={columns} dataSource={userList}></Table>
        <Modal
          title="Edit User"
          centered
          open={open}
          onOk={() => setOpen(false)}
          onCancel={() => setOpen(false)}
          width={500}
        >
          <hr />
          <Form className="pt-1" name="basic">
            <h5 className="text-base">
              ID <span className="text-red-500">*</span>
            </h5>
            <Form.Item name="id">
              <Input
                disabled
                style={{ width: "100%", minWidth: 300 }}
                size="large"
                placeholder="ID"
                prefix={<UserOutlined />}
              ></Input>
            </Form.Item>

            <h5 className="text-base">
              Name <span className="text-red-500">*</span>
            </h5>
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

            <h5 className="text-base">
              Email <span className="text-red-500">*</span>
            </h5>
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

            <h5 className="text-base">
              {" "}
              Phone Number
              <span className="text-red-500">*</span>
            </h5>
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

            <h5 className="text-base">
              Password <span className="text-red-500">*</span>
            </h5>
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

            <h5 className="text-base">
              Confirm Password <span className="text-red-500">*</span>
            </h5>
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
          </Form>
        </Modal>
      </div>
    </div>
  );
};

export default UserList;
