import * as React from 'react'
import { useMappedState } from 'redux-react-hook';

const mapState = (state: any) => ({
  user: state.user,
});
function Home(props: any) {
  const { user } = useMappedState(mapState);
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
export default Home