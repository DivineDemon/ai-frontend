const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 text-sm font-medium text-white bg-gray-900 border-b border-gray-800/75">
      <div className="flex items-center justify-between h-16 max-w-screen-xl px-4 mx-auto sm:px-6 lg:px-8">
        <nav className="flex sm:items-center sm:gap-4 lg:gap-8">
          <a href="/" aria-current="page">
            Logo
          </a>
        </nav>
        <div className="flex md:items-center md:gap-4 lg:gap-8">
          <a
            href="/"
            target="_blank"
            rel="noreferrer"
            className="hidden md:block">
            Website Name
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
