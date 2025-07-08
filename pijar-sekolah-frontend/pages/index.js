import { useState } from 'react';
import axios from 'axios';

export default function Home() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [token, setToken] = useState(null);
  const [schools, setSchools] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const login = async () => {
    try {
      const response = await axios.post('http://localhost:4000/api/login', {
        username,
        password,
      });
      setToken(response.data.token);
      alert('Login successful');
    } catch (error) {
      alert('Login failed: ' + error.response?.data?.message || error.message);
    }
  };

  const fetchSchools = async () => {
    if (!token) {
      alert('Please login first');
      return;
    }
    try {
      const response = await axios.get('http://localhost:4000/api/schools', {
        headers: { Authorization: `Bearer ${token}` },
      });
      setSchools(response.data);
    } catch (error) {
      alert('Failed to fetch schools: ' + error.message);
    }
  };

  const filteredSchools = schools.filter(school =>
    school.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div style={{ padding: '2rem' }}>
      <h1>SIM Sekolah SMKN 1 Punggelan</h1>
      <div>
        <input
          type="text"
          placeholder="Email or Username"
          value={username}
          onChange={e => setUsername(e.target.value)}
          style={{ marginRight: '1rem' }}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          style={{ marginRight: '1rem' }}
        />
        <button onClick={login}>Login</button>
      </div>
      <div style={{ marginTop: '2rem' }}>
        <button onClick={fetchSchools}>Load Schools</button>
      </div>
      {schools.length > 0 && (
        <div style={{ marginTop: '2rem' }}>
          <input
            type="text"
            placeholder="Search schools"
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
            style={{ marginBottom: '1rem' }}
          />
          <ul>
            {filteredSchools.map(school => (
              <li key={school.id}>
                {school.name} (NPSN: {school.npsn})
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
