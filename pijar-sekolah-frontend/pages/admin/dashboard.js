import AdminNav from '../../components/AdminNav';

export default function AdminDashboard() {
  return (
    <div style={{ display: 'flex' }}>
      <AdminNav />
      <main style={{ padding: '2rem', flexGrow: 1 }}>
        <h1>Admin Dashboard</h1>
        <p>Welcome to the admin dashboard. Use the navigation menu to manage the system.</p>
        {/* Additional dashboard content can be added here */}
      </main>
    </div>
  );
}
