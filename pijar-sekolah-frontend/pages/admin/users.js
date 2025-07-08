import AdminNav from '../../components/AdminNav';

export default function AdminUsers() {
  return (
    <div style={{ display: 'flex' }}>
      <AdminNav />
      <main style={{ padding: '2rem', flexGrow: 1 }}>
        <h1>Admin Users</h1>
        <p>Manage users here. (Feature to be implemented)</p>
      </main>
    </div>
  );
}
