import { useState } from "react";
import { FaBars, FaUser } from "react-icons/fa";
import { AiOutlineHome, AiOutlineUser } from "react-icons/ai";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";

const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <header className="bg-primary-light shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 flex items-center justify-between py-4">
        {/* Mobile Menu Toggle */}
        <div className="flex items-center lg:hidden">
          <button
            className="text-secondary-dark text-2xl focus:outline-none"
            onClick={() => setOpenMenu((prev) => !prev)}
          >
            <FaBars />
          </button>
        </div>

        {/* Logo */}
        <div className="flex items-center">
          <a href="/" className="flex items-center">
            <img
              src="/path-to-your-logo/logo.png"
              alt="Logo"
              className="w-32 h-auto"
            />
          </a>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden lg:flex space-x-8">
          <a
            href="/"
            className="text-secondary-dark hover:text-accent-muted font-medium"
          >
            Home
          </a>
          <div className="relative group">
            <button className="flex items-center space-x-1 text-secondary-dark hover:text-accent-muted font-medium">
              <span>Products</span>
              <svg
                width="8"
                height="6"
                viewBox="0 0 8 6"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4"
              >
                <path
                  d="M6.75 1.5L3.75 4.5L0.75 1.5"
                  stroke="currentColor"
                  strokeWidth="1.1"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <ul className="absolute hidden group-hover:block bg-primary-light shadow-lg rounded mt-2 py-2">
              <li>
                <a
                  href="/collections/backpacks"
                  className="block px-4 py-2 text-secondary-dark hover:bg-accent-muted hover:text-primary-light"
                >
                  Backpacks
                </a>
              </li>
              <li>
                <a
                  href="/collections/bags"
                  className="block px-4 py-2 text-secondary-dark hover:bg-accent-muted hover:text-primary-light"
                >
                  Bags
                </a>
              </li>
              <li>
                <a
                  href="/collections/leather-goods"
                  className="block px-4 py-2 text-secondary-dark hover:bg-accent-muted hover:text-primary-light"
                >
                  Leather Goods
                </a>
              </li>
              <li>
                <a
                  href="/collections/wallets"
                  className="block px-4 py-2 text-secondary-dark hover:bg-accent-muted hover:text-primary-light"
                >
                  Wallets
                </a>
              </li>
              <li>
                <a
                  href="/collections/all"
                  className="block px-4 py-2 text-secondary-dark hover:bg-accent-muted hover:text-primary-light"
                >
                  Shop All
                </a>
              </li>
            </ul>
          </div>
          <a
            href="/blogs/news"
            className="text-secondary-dark hover:text-accent-muted font-medium"
          >
            Journal
          </a>
          <a
            href="/pages/about"
            className="text-secondary-dark hover:text-accent-muted font-medium"
          >
            Our Story
          </a>
          <a
            href="/pages/contact"
            className="text-secondary-dark hover:text-accent-muted font-medium"
          >
            Contact
          </a>
        </nav>

        {/* Account Icon */}
        <div className="flex items-center">
          <a
            href="/account"
            className="text-secondary-dark hover:text-accent-muted text-xl"
          >
            <FaUser />
          </a>
        </div>

        {/* Mobile Menu */}
        <MobileMenu isOpen={openMenu} />
      </div>
    </header>
  );
};

export default Header;

// eslint-disable-next-line react/prop-types
const MobileMenu = ({ isOpen }) => {
  return (
    <nav
      id="mobile-menu"
      className={`fixed md:hidden top-14 inset-0 bg-gray-100 z-50 p-4 overflow-y-auto ${
        isOpen ? "block" : "hidden"
      }`}
      role="dialog"
      tabIndex="-1"
    >
      <div className="flex flex-col space-y-4">
        {/* Main Menu */}
        <ul className="space-y-2">
          <li>
            <a
              href="/"
              title="Home"
              className="flex items-center gap-2 text-gray-800 hover:text-black font-medium"
            >
              <AiOutlineHome size={20} />
              Home
            </a>
          </li>

          {/* Products Dropdown */}
          <li>
            <details className="group">
              <summary className="flex items-center justify-between gap-2 text-gray-800 hover:text-black font-medium cursor-pointer">
                Products
                <FiChevronRight size={20} className="group-open:hidden" />
                <FiChevronLeft size={20} className="hidden group-open:block" />
              </summary>
              <ul className="pl-4 mt-2 space-y-2 text-sm">
                <li>
                  <button className="flex items-center gap-2 text-gray-600 hover:text-black font-medium">
                    <FiChevronLeft size={16} />
                    Back to Products
                  </button>
                </li>
                <li>
                  <a
                    href="/collections/backpacks"
                    className="block text-gray-600 hover:text-black"
                  >
                    Backpacks
                  </a>
                </li>
                <li>
                  <a
                    href="/collections/bags"
                    className="block text-gray-600 hover:text-black"
                  >
                    Bags
                  </a>
                </li>
                <li>
                  <a
                    href="/collections/leather-goods"
                    className="block text-gray-600 hover:text-black"
                  >
                    Leather Goods
                  </a>
                </li>
                <li>
                  <a
                    href="/collections/wallets"
                    className="block text-gray-600 hover:text-black"
                  >
                    Wallets
                  </a>
                </li>
                <li>
                  <a
                    href="/collections/all"
                    className="block text-gray-600 hover:text-black"
                  >
                    Shop all
                  </a>
                </li>
              </ul>
            </details>
          </li>

          <li>
            <a
              href="/blogs/news"
              className="flex items-center gap-2 text-gray-800 hover:text-black font-medium"
            >
              Journal
            </a>
          </li>
          <li>
            <a
              href="/pages/about"
              className="flex items-center gap-2 text-gray-800 hover:text-black font-medium"
            >
              Our Story
            </a>
          </li>
          <li>
            <a
              href="/pages/contact"
              className="flex items-center gap-2 text-gray-800 hover:text-black font-medium"
            >
              Contact
            </a>
          </li>
        </ul>

        {/* Promotional Section */}
        <div className="relative">
          <a href="/collections/all" target="_blank" rel="noopener noreferrer">
            <img
              src="//reformation-mono.myshopify.com/cdn/shop/files/img21.jpg?v=1663687859&width=670"
              alt="Luxury Wallets"
              className="w-full rounded-md object-cover"
            />
          </a>
          <div className="absolute bottom-4 left-4 text-white">
            <p className="text-lg font-bold">Luxury Wallets</p>
            <a
              href="/collections/all"
              target="_blank"
              className="px-4 py-2 bg-black text-white rounded hover:bg-gray-800"
            >
              Products
            </a>
          </div>
        </div>

        {/* Footer */}
        <div className="pt-4 border-t border-gray-200">
          <a
            href="/account"
            className="flex items-center gap-2 text-gray-800 hover:text-black font-medium"
          >
            <AiOutlineUser size={20} />
            My Account
          </a>
        </div>
      </div>
    </nav>
  );
};
