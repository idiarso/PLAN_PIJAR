import AdminNav from '../../components/AdminNav';

export default function AdminSettings() {
  return (
    <div style={{ display: 'flex' }}>
      <AdminNav />
      <main style={{ padding: '2rem', flexGrow: 1 }}>
        <h1>Admin Settings</h1>
        <p>Manage application settings here. (Feature to be implemented)</p>
      </main>
    </div>
  );
}
