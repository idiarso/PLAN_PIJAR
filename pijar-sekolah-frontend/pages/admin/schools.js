import AdminNav from '../../components/AdminNav';

export default function AdminSchools() {
  return (
    <div style={{ display: 'flex' }}>
      <AdminNav />
      <main style={{ padding: '2rem', flexGrow: 1 }}>
        <h1>Admin Schools</h1>
        <p>Manage schools here. (Feature to be implemented)</p>
      </main>
    </div>
  );
}
