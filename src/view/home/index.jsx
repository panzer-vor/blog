import React from 'react'
import { connect } from 'react-redux'

const mapStateToProps = (state) => ({
  user: state.user
})
function Home(props) {
  return (
    <div>
      <input />
      <input />
      <div>{props.user.username}</div>
      <button>登入</button>
    </div>
  )
}
export default connect(mapStateToProps)(Home)