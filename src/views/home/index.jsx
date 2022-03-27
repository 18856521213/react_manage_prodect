import {useState, useEffect} from 'react'
import "./index.css"
import { Outlet, Link, useLocation } from 'react-router-dom';
import { list } from "../../router/index.js"
import { Layout, Menu, Breadcrumb } from 'antd';
const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

export default function Home() {
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
    console.log(localhost)
  }, [localhost])
  return (
    <>
      <Layout>
        <Header className="header">
          <div className="logo" />
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
