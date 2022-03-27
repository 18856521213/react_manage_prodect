import React from 'react';
import {Routes, Route, Navigate} from "react-router-dom";
import Login from "../views/login/index.jsx";
import Home from "../views/home/index.jsx";
import userManage from "./userManage.js";
import DefaultPage from "../views/defaulePage/index.jsx"
export const list = [
  userManage
]
export default function RouterList() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<DefaultPage />}></Route>
          {
            list.map(item => {
              return (
                <Route path={item.path} element={item.component} key={item.path}>
                  {
                    item.childrens.map(itemChild => {
                      return (
                        <Route path={itemChild.path} element={itemChild.component} key={itemChild.path}></Route>
                      )
                    })
                  }
                </Route>
              )
            })
          }
        </Route>
        <Route path="login" element={<Login />}></Route>
        <Route path="*" element={<Navigate to="/login" />}></Route>
      </Routes>
    </>
  )
}
