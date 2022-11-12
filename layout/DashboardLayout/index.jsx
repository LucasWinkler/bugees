export default function DashboardLayout({ children }) {
  return (
    <>
      <header>
        <p>Dashboard Header</p>
      </header>
      <aside>
        <nav>
          <p>Dashboard Sidebar</p>
        </nav>
      </aside>

      <main>{children}</main>
    </>
  );
}
