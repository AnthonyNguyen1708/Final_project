import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteUser, fetchUserList } from "../redux/action";
import { Pagination } from "antd";
import { DeleteOutlined } from "@ant-design/icons";

const UserList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUserList);
  }, []);

  const userList = useSelector((state) => state.userList.userList);

  return (
    <div>
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
                <td>{userList.indexOf(item)}</td>
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
                    onClick={(userId) => {
                      dispatch(() => {
                        deleteUser(userId);
                      });
                    }}
                    className="ant-btn ant-btn-icon-only bg-transparent hover:bg-transparent focus:bg-transparent text-red-600 hover:text-red-500 focus:text-red-500 border-0 shadow-none"
                  >
                    <DeleteOutlined />
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default UserList;
