import {useState} from 'react'
import style from "./index.module.css"
import { useNavigate } from 'react-router-dom';
import {message} from "antd";
export default function Login() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  //输入框输入事件
  const valueChanage = (e) => {
    if(e.target.name === "username") {
      setUsername(e.target.value)
    }else{
      setPassword(e.target.value)
    }
  }
  //登录按钮事件
  const login = () => {
    console.log(111);
    if(!username || !password) {
      message.error("登录信息不全")
      return
    }
    navigate("/")
  }
  return (
    <div className={style.box}>
      <div className={style.content}>
        <div className={style.leftContent}>
          left
        </div>
        <div className={style.rightContent}>
          <div className={style.login}>
            <div className={style.loginHeader}>
              <p>输入账号登录</p>
            </div>
            <div className={style.loginContent}>
              <form action="#">
                <div className={style.username}>
                  <input type="text" autoComplete='off' value={username} name="username" placeholder='请输入用户名' onInput={valueChanage} />
                </div>
                <div className={style.password}>
                  <input type="password" autoComplete='off' value={password} name="password" placeholder='请输入密码' onInput={valueChanage}  />
                </div>
              </form>
              <div>
                <button onClick={login}>登录</button>
              </div>
              <div>
                <button>注册</button>
              </div>
              <div>
                  <p>Copy-night 1990_13_14</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
