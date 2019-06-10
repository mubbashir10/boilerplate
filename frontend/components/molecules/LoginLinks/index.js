import Link from "next/link"
import ForgotPasswordLink from '../../atoms/ForgotPasswordLink'
import NeedAccountLink from '../../atoms/NeedAccountLink'

const LoginLinks = () => {
  return <div className="login-links">
    <div className="level">
      <div className="level-item has-text-centered">
        <ForgotPasswordLink/>
      </div>
      <div className="level-item has-text-centered">
        <NeedAccountLink/>
      </div>
    </div>
  </div>
}

export default LoginLinks