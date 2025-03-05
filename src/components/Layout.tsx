import Nav from './Nav';
import Footer from './Footer';

interface Props {
  children: React.ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Nav />
        <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;