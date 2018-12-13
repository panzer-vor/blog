import * as React from 'react'
import { useMappedState } from 'redux-react-hook';
import http from '@tools/http'

const { useEffect } = React
const mapState = (state: any) => ({
  user: state.user,
});
function Home(props: any) {
  const { user } = useMappedState(mapState);
  useEffect(() => {
    http.get('/auth/checklogin')
  })
  const con = () => {
    console.log(user);
  }
  return (
    <div>
      <input />
      <input />
      {user.username}
      <button onClick={con}>登入</button>
    </div>
  )
}
// export default connect(mapStateToProps)(Home)
export default Home