import Navbar from '../common/Navbar';
import DashboardSidebar from '../dashboard/Sidebar';

export default function Dashboard({ children }) {
  return (
    <>
      <Navbar />
      <DashboardSidebar />
      <main>{children}</main>
    </>
  );
}
