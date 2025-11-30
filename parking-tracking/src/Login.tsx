import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();

  const loginUser = () => {
    console.log("Login successful - going to homepage");
    navigate("/homepage");
  };

  const signUp = () => {
    console.log("Sign up clicked");
    alert("Sign up coming soon!");
  };

  return (
    <div style={{ 
      padding: '20px', 
      textAlign: 'center', 
      fontFamily: 'Arial',
      width: '100%',
      height: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#f5f5f5'
    }}>
      <h1 style={{ 
        color: '#1a5276', 
        fontSize: '64px', 
        marginBottom: '40px',
        fontFamily: 'serif'
      }}>
        CSUSM Parking
      </h1>
      
      <div style={{ margin: '20px 0', width: '300px' }}>
        <div style={{ margin: '20px 0', textAlign: 'left' }}>
          <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold' }}>
            Username:
          </label>
          <input 
            type="text" 
            defaultValue="test" 
            style={{ 
              width: '100%', 
              padding: '10px',
              border: '1px solid #ccc',
              borderRadius: '4px',
              fontSize: '16px'
            }} 
          />
        </div>
        <div style={{ margin: '20px 0', textAlign: 'left' }}>
          <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold' }}>
            Password:
          </label>
          <input 
            type="password" 
            defaultValue="test" 
            style={{ 
              width: '100%', 
              padding: '10px',
              border: '1px solid #ccc',
              borderRadius: '4px',
              fontSize: '16px'
            }} 
          />
        </div>
      </div>

      <div style={{ margin: '30px 0' }}>
        <button 
          onClick={loginUser}
          style={{ 
            padding: '12px 30px', 
            margin: '0 10px',
            backgroundColor: '#1a5276',
            color: 'white',
            border: 'none',
            borderRadius: '6px',
            cursor: 'pointer',
            fontSize: '16px',
            fontWeight: 'bold'
          }}
        >
          Login
        </button>
        <button 
          onClick={signUp}
          style={{ 
            padding: '12px 30px', 
            margin: '0 10px',
            backgroundColor: '#666',
            color: 'white',
            border: 'none',
            borderRadius: '6px',
            cursor: 'pointer',
            fontSize: '16px'
          }}
        >
          Sign Up
        </button>
      </div>

      <div>
        <a href="#" style={{ color: '#1a5276', textDecoration: 'underline' }}>
          Forgot Password?
        </a>
      </div>
    </div>
  );
};

export default Login;