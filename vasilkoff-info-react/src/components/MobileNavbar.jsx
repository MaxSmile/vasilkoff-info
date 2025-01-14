
import navbar from "../data/navbar.json";

const MobileNavbar = ({className}) => {
    return (
        <nav className={`bg-black overflow-hidden duration-300 sm:hidden ${className ?? ""}`}>
            <ul className="nav p-2">
                {navbar.map(item => (
                    <li key={item.id}>
                        <a
                            href={item.href}
                            className={`block text-white font-medium text-sm relative cursor-pointer py-1 px-3 duration-400 hover:bg-white hover:text-dark`}
                        >
                            {item.name}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default MobileNavbar;
