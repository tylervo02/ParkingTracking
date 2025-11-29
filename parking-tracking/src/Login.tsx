import { useNavigate } from 'react-router-dom';
import styles from './Login.module.css';
import ServerRequester from './middle/ServerRequester';

const Login = () => {
  const navigate = useNavigate();
  const loginUser = async () => {
    // your login logic here later
    const server = new ServerRequester();
    console.log("Signing in...");
    await server.testConnection();
    navigate("/homepage");
  };

  return (
    <>
    <div >
        <h1 className={styles.csusmParking}>CSUSM Parking</h1>
    </div>

    <div>
        <label>Username: <input type="text" name='username'/></label>
        <br />
        <label>Password: <input type="text" name="password"/></label>
    </div>

    <div className={styles.headerAuth}>
        <button type='button' onClick={loginUser} className={styles.button2}>Login</button>
        <button type='button'>Sign Up</button>
    </div>

    <div>
        <a href="">Forgot Password?</a>
    </div>
    </>
  );


}

export default Login;