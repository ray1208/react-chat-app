import React, { Component } from 'react'
import { connect } from 'react-redux'
import { login, getUserData } from './auth.redux'
import { Redirect } from 'react-router-dom'
// import axios from 'axios'

//两个reducers 每个reducers都有一个state
//合并reducers
@connect(
  state => state.auth,
  { login, getUserData }
)

class Auth extends Component {
  // constructor(props) {
  //   super(props)
  //   this.state = {
  //     data: {}
  //   }
  // }
  componentDidMount() {
    this.props.getUserData()
    // axios.get('/data')//返回是一个promise对象
    //   .then(res => {
    //     res.status === 200 && this.setState({ data: (res.data)[0] })
    //     // console.log(res)
    //     console.log(res.data[0])
    //   })
  }

  render() {
    return (
      <div>
        <div>我的名字是{this.props.user}，年龄{this.props.age}</div>
        {this.props.isAuth ? <Redirect to='/dashboard'></Redirect> : null}
        <h2>你没有权限，需要登录才能查看</h2>
        <button onClick={this.props.login}>登录</button>
      </div>
    )
  }
}

export default Auth