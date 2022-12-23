import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteUser, fetchUserList } from "../redux/action";
import { Button, Modal, Pagination } from "antd";

import { DeleteOutlined } from "@ant-design/icons";
import requester from "app/api";
import { apiPath } from "app/apiPath";
import HeaderComponent from "components/HeaderComponent";

const UserList = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUserList);
  }, []);

  const userList = useSelector((state) => state.userList.userList);

  // const userDelete = async (id) => {
  //   try {
  //     await requester({
  //       method: "DELETE",
  //       url: apiPath.DELETE_USER + "?id=" + id,
  //     });
  //     dispatch(fetchUserList);
  //   } catch (error) {
  //     console.log("error: ", error);
  //   }
  // };

  return (
    <div>
      <HeaderComponent />
      <div className="container">
        <table className="table">
          <thead>
            <tr>
              <th>No.</th>
              <th>FullName</th>
              <th>User ID</th>
              <th>Email</th>
              <th>Phone Number</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {userList.map((item) => {
              const { userId, name, avatar, email, phoneNumber } = item;
              return (
                <tr key={userId}>
                  <td>{userList.indexOf(item) + 1}</td>
                  <td>
                    {
                      <img
                        src={avatar}
                        style={{
                          borderRadius: "50%",
                          height: 30,
                          width: 30,
                        }}
                        alt=""
                      />
                    }
                    {name}
                  </td>
                  <td>{userId}</td>
                  <td>{email}</td>
                  <td>{phoneNumber}</td>
                  <td>
                    <button
                      onClick={() => {
                        deleteUser(userId);
                      }}
                      className="ant-btn ant-btn-icon-only bg-transparent hover:bg-transparent focus:bg-transparent text-red-600 hover:text-red-500 focus:text-red-500 border-0 shadow-none"
                    >
                      <DeleteOutlined />
                    </button>

                    <Button type="primary" onClick={showModal}>
                      Open Modal
                    </Button>
                    <Modal
                      title="Modal"
                      open={isModalOpen}
                      onOk={handleOk}
                      onCancel={handleCancel}
                    >
                      <p>Some contents...</p>
                      <p>Some contents...</p>
                      <p>Some contents...</p>
                    </Modal>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <Pagination defaultCurrent={1} pageSize={10} total={userList.length} />
      </div>
    </div>
  );
};

export default UserList;
