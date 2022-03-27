import {useState, useEffect} from 'react'
import "./index.css"
import style from "./index.module.css"
import { Outlet, Link, useLocation, useNavigate } from 'react-router-dom';
import { list } from "../../router/index.js"
import { Layout, Menu, Breadcrumb, Avatar, Popover, Button } from 'antd';
import { UserOutlined, LogoutOutlined } from '@ant-design/icons';
const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

function PopoverContent(props) {
  const loginOut = () => {
    props.loginOut();
  }
  return (
    <>
      <div>
        <Button type="link" icon={<UserOutlined />}>个人信息</Button>
      </div>
      <div>
        <Button type="link" danger icon={<LogoutOutlined />} onClick={loginOut}>退出登录</Button>
      </div>
    </>
  )
}

export default function Home(props) {
  const navigate = useNavigate();
  const localhost = useLocation();
  const [navigateList, setNavigateList] = useState([]);
  useEffect(() => {
    list.forEach(item => {
      item.childrens.forEach(item2 => {
        if(item2.fullPath === localhost.pathname) {
          setNavigateList([item.name, item2.name])
        }
      })
    })
  }, [localhost])
  const loginOut = () => {
    navigate('/login')
  }
  return (
    <>
      <Layout>
        <Header className="header">
          <div className={style.headerImg}>
          <Popover placement="bottom" content={<PopoverContent loginOut={loginOut} />} trigger="click">
            <Avatar className={style.contentAvatar} size="large" gap={4}>
              张三
            </Avatar>
          </Popover>
          </div>
        </Header>
        <Layout>
          <Sider width={200} className="site-layout-background">
            <Menu
              mode="inline"
              defaultSelectedKeys={['1']}
              defaultOpenKeys={['sub1']}
              style={{ borderRight: 0 ,height: 'calc(100vh - 64px)', overflowX: 'scroll'}}
            >
              {
                list.map(item => {
                  return (
                    <SubMenu key={item.path} icon={item.icon} title={item.name}>
                      {
                        item.childrens.map(itemChild => {
                          return (
                            <Menu.Item key={itemChild.path} icon={itemChild.icon}>
                              <Link to={itemChild.fullPath} key={itemChild.fullPath}>{itemChild.name}</Link>
                            </Menu.Item>
                          )
                        })
                      }
                    </SubMenu>
                  )
                })
              }
            </Menu>
          </Sider>
          <Layout style={{ padding: '0 24px 24px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              {
                navigateList.map(item => {
                  return (
                    <Breadcrumb.Item key={item}>{item}</Breadcrumb.Item>
                  )
                })
              }
            </Breadcrumb>
            <Content
              className="site-layout-background"
              style={{
                padding: 24,
                margin: 0,
                minHeight: 280,
                maxHeight: 'calc(100vh - 142px)',
                overflow: "scroll"
              }}
            >
              <Outlet></Outlet>
            </Content>
          </Layout>
        </Layout>
      </Layout>
    </>
  )
}
