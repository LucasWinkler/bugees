export default function HomeLayout({ children }) {
  return (
    <>
      <header>
        <nav>
          <p>Landing Page Navbar</p>
        </nav>
      </header>

      <main>{children}</main>
    </>
  );
}
