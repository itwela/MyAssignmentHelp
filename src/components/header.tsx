export const Header = () => {
  return (
    <header className="p-5 fixed w-full md:flex justify-center gap-10 items-center z-[2]">
      <img src="https://cdn1.myassignmenthelp.com/seo-revamp-assets/logo-icon.svg" alt="" className="logo" />
      
      {/* Navigation Sections */}
      <nav className="hidden md:flex items-center space-x-4">
        <a href="#" className="hover:text-gray-400">Services</a>
        <a href="#" className="hover:text-gray-400">Experts</a>
        <a href="#" className="hover:text-gray-400">Reviews</a>
        <a href="#" className="hover:text-gray-400">About Us</a>
        <a href="#" className="hover:text-gray-400">Resources</a>
        <a href="#" className="hover:text-gray-400">Academic Tools</a>
      </nav>

      {/* Mobile Navigation Button */}
      <div className="md:hidden">
        {/* Add your mobile navigation button here */}
      </div>
    </header>
  );
};
