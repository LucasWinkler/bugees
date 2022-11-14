import DashboardHeader from '../components/dashboard/Header';
import DashboardSidebar from '../components/dashboard/Sidebar';

export default function Dashboard({ children }) {
  return (
    <>
      <DashboardHeader />
      <DashboardSidebar />
      <main>{children}</main>
    </>
  );
}
