import UserManage from '../views/userManage';
import AddUser from '../views/userManage/addUser';
import ManageUser from '../views/userManage/manageUser';
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  path: "userManage",
  name: "用户管理",
  icon: <UserOutlined />,
  component: <UserManage />,
  childrens: [
    {
      path: "addUser",
      name: "添加用户",
      icon: <LaptopOutlined />,
      component: <AddUser />,
      fullPath: "/userManage/addUser"
    },
    {
      path: "manageUser",
      name: "管理用户",
      icon: <NotificationOutlined />,
      component: <ManageUser />,
      fullPath: "/userManage/manageUser"
    }
  ]
}