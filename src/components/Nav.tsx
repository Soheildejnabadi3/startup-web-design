import Link from 'next/link';

interface NavItem {
  label: string;
  href: string;
}

const Nav: React.FC = () => {
  const navItems: NavItem[] = [
    {label:'Home', href:'/'},
    {label:'Features', href:'/features'},
    {label:'About', href:'/about'},
  ];

  return (
    <section className="top-0 left-0 w-full h-16 bg-blue-300 opacity-60 text-black flex justify-center items-center z-50">
        <nav className="flex justify-between items-center py-4">
            <ul className="flex justify-center">
                {navItems.map((item, index) => (
                <li key={index} className="mx-4">
                    <Link href={item.href} className="text-lg font-bold hover:text-gray-600">
                        {item.label}
                    </Link>
                </li>
                ))}
            </ul>
        </nav>
    </section>
    
  );
};

export default Nav;
