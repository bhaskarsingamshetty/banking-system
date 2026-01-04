import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function LoginPage() {
  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:8081/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: username, password: password })
      });

      if (response.ok) {
        const data = await response.json();
        if (data.token) {
          localStorage.setItem('token', data.token);
          localStorage.setItem('id', data.id);
          const id = data.id;
          navigate('/index',{ state: { accountnumber: id } });
        } else {
          alert('Token not received.');
        }
      } else {
        const errorText = await response.text();
        console.error('Error response:', errorText);
        alert('Invalid username or password');
      }
    } catch (err) {
      console.error('Error:', err);
      alert('Something went wrong');
    }
  };

  function rendersignup() {
    navigate('/signup');
  }

  return (
    <div className="loginbox">
      <h1 className="loginheading">Trust One Bank</h1>
      <form onSubmit={handleSubmit} className="entryform">
        <h2 className="loginheading">Login</h2>

        <input
          type="text"
          placeholder="Email"
          required
          value={username}
          onChange={(e) => setUserName(e.target.value)}
          className="entryuserinput"
        />

        <input
          type="password"
          placeholder="Password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="entrypasswordinput"
        />

        <button className="entrybutton">Login</button>
        <p style={{ textAlign: 'center', color: 'blue', cursor: 'pointer' }} onClick={rendersignup}>
          Sign-up?
        </p>
      </form>
    </div>
  );
}

export default LoginPage;


