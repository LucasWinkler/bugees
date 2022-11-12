import DashboardHeader from '../../components/DashboardHeader';
import DashboardSidebar from '../../components/DashboardSidebar';

export default function DashboardLayout({ children }) {
  return (
    <>
      <DashboardHeader />
      <DashboardSidebar />

      <main>{children}</main>
    </>
  );
}
