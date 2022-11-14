import DashboardHeader from '../components/Dashboard/Header';
import DashboardSidebar from '../components/Dashboard/Sidebar';

export default function Dashboard({ children }) {
  return (
    <>
      <DashboardHeader />
      <DashboardSidebar />
      <main>{children}</main>
    </>
  );
}
