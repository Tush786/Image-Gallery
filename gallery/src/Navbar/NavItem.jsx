function NavItem({ children }) {
    return (
      <div className="text-gray-500 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
        {children}
      </div>
    );
  }
  
  export default Navbar;