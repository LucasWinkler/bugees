import Navbar from '../common/Navbar';

export default function Account({ children }) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
    </>
  );
}
