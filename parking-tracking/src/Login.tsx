import styles from './Login.module.css';

const Login = () => {
  const loginUser = () => {
    // your login logic here later
    console.log("Signing in...");
  };

  return (
    <>
    <div >
        <h1 className={styles.csusmParking}>CSUSM Parking</h1>
    </div>

    <div>
        <label>Username: <input type="text" name='username' defaultValue="username"/></label>
        <br />
        <label>Password: <input type="text" name="password" defaultValue="password"/></label>
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