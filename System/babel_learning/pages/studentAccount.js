//import Router from 'next/router'
import fetch from 'isomorphic-unfetch'
import nextCookie from 'next-cookies'
import Account from '../components/account'
import '../semantic/dist/semantic.min.css'
import '../node_modules/antd/dist/antd.min.css'
import '../node_modules/jquery/dist/jquery.min.js'
import { withAuthSync } from '../utils/auth'
import { logout } from '../utils/auth'

const StudentAccount = props => {
  const { name, login, courses, notifications, posts } = props.data

  return (
    <Account>
      <div className="sidebar">
        <div className="ui vertical menu">
          <img src="../static/materials/babel.png"/>
          <button className="link item active">Overview</button>
          <button className="link item">Profile</button>
          <button className="link item">Notifications</button>
          <button className="link item">Resources</button>
          <button className="link item">Course Manager</button>
          <button className="link item">Gallery</button>
          <div className="item"></div>
        </div>
      </div>
      <div className="ui search topbar">
        <input type="text" className="ui search prompt" placeholder="Search"/>
        <div className="rightlogout">
          <p>Welcome {login}</p>
          <img src="../static/materials/person.png"/>
          <button onClick={logout}>Logout</button>
        </div>
      </div>
      <div className="tab">
        <div className="ui tabular menu">
          <button className="item active">Home</button>
          <button className="item">Chinese</button>
          <button className="item">Arabic</button>
          </div>
      </div>
      <style jsx>{`
        .tab{
          position: absolute;
          top: 12vh;
          left: 20vw;
          width: 80vw;
          height: 88vh;
          z-index: 1;
          background: #FAF4EF;
        }
        .topbar{
          height: 100vh;
          min-width: 100px;
          width: 80vw;
          background-color: white;
          padding: 10px;
          position: absolute;
          top: 0;
          left: 20vw;
        }
        .rightlogout{
          float: right;
          margin: 20px 2vw;
        }
        .rightlogout button{
          display: inline-block;
          background-color: white;
          border:none;
          cursor: pointer;
          font-family: avenir;
          font-size: 18px;
        }
        .rightlogout p{
          display: inline-block;
          margin: 0px 30px;
          font-family: avenir;
          font-size: 18px;
        }
        .rightlogout img{
          display: inline-block;
          height: 20px;
          margin: 0px 20px 5px 0px;
        }
        .rightlogout button:hover{
          text-decoration: underline;
        }
        .ui.search.prompt{
          postion: relative;
          left: 2.5vw;
          top: 2vh;
          width: 40vw;
        }
        .ui.tabular.menu{
          z-index: 2;
          background-color: white;
        }
        .ui.tabular.menu.item:hover{
          background-color: #FAF4EE;
        }
        .ui.tabular.menu .active.item{
          background-color: #FAF4EF;
        }
        .sidebar{
          width: 20vw;
          height: 100vh;
        }
        .sidebar img{
          width: 100%;
          padding: 7vh 0px;
        }
        .ui.vertical.menu{
          width: 100%;
          height: 100%;
        }
        .ui.vertical.menu .item.active{
          background-color: #43425D;
          color: white;
        }
        .ui.vertical.menu .item{
          width: 100%;
          color: #43425D;
          border: 0px 3px 3px 3px solid #43425D;
          border-radius: 0;
          text-align: left;
          padding: 20px;
          font-family: avenir;
        }
        button{
          border:none;
          cursor: pointer;
        }
        .lead {
          margin-top: 0;
          font-size: 1.5rem;
          font-weight: 300;
          color: #666;
        }
        p {
          color: #6a737d;
        }
      `}</style>
    </Account>
  )
}

StudentAccount.getInitialProps = async ctx => {
  // We use `nextCookie` to get the cookie and pass the token to the
  // frontend in the `props`.
  const { token } = nextCookie(ctx)
  const protocol = process.env.NODE_ENV === 'production' ? 'https' : 'http'

  const apiUrl = process.browser
    ? `${protocol}://${window.location.host}/api/studentAccount.js`
    : `${protocol}://${ctx.req.headers.host}/api/studentAccount.js`

  const redirectOnError = () =>
    process.browser
      ? Router.push('/login')
      : ctx.res.writeHead(301, { Location: '/login' })

  try {
    const response = await fetch(apiUrl, {
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
        Authorization: JSON.stringify({ token })
      }
    })

    if (response.ok) {
      return await response.json()
    } else {
      // https://github.com/developit/unfetch#caveats
      return redirectOnError()
    }
  } catch (error) {
    // Implementation or Network error
    return redirectOnError()
  }
}

export default withAuthSync(StudentAccount)
