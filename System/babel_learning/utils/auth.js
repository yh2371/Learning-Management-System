import Router from 'next/router'
import nextCookie from 'next-cookies'
import { useEffect } from 'react'
import cookie from 'js-cookie'

export const auth = ctx => {
  const { token } = nextCookie(ctx)

  if (ctx.req && !token) {
    ctx.res.writeHead(302, { Location: '/login' })
    ctx.res.end()
    return
  }

  if (!token) {
    Router.push('/login')
  }

  return token
}

export const login = ({ token }) => {
  cookie.set('token', token, { expires: 1 })
  Router.push('/studentAccount')
}

export const logout = () => {
  cookie.remove("token");
  // To trigger the event listener we save some random data into the `logout` key
  window.localStorage.setItem("logout", Date.now()); // new
  Router.push("/login");
};

export const withAuthSync = WrappedComponent => {
    const Wrapper = props => {
      const syncLogout = event => {
        if (event.key === 'logout') {
          console.log('logged out from storage!')
          Router.push('/login')
        }
      }

      useEffect(() => {
        window.addEventListener('storage', syncLogout)

        return () => {
          window.removeEventListener('storage', syncLogout)
          window.localStorage.removeItem('logout')
        }
      }, [])

      return <WrappedComponent {...props} />
    }

    Wrapper.getInitialProps = async ctx => {
      const token = auth(ctx)

      const componentProps =
        WrappedComponent.getInitialProps &&
        (await WrappedComponent.getInitialProps(ctx))

      return { ...componentProps, token }
    }

    return Wrapper
  }
