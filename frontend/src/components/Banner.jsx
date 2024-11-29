const Banner = () => {
  return (
    <div className="w-full flex flex-col items-center">
      <div className="min-h-80 w-full flex flex-col items-center">
        {/* Breadcrumbs */}
        <div className="container relative">
          <nav className="text-sm md:text-base p-4 text-white absolute top-0 left-0 right-0 z-10">
            <a href="/" className="hover:text-gray-300 underline underline-offset-4">
              Home
            </a>
            <span className="mx-2 opacity-20">/</span>
            <a href="/collections/all" className="hover:text-gray-300 underline underline-offset-4">
              Products
            </a>
            <span className="mx-2 opacity-20">/</span>
            <span>Backpacks</span>
          </nav>
        </div>

        {/* Banner Content */}
        <div
          className="relative w-full bg-cover bg-center flex flex-col items-center"
          style={{
            backgroundImage:
              "url('//reformation-mono.myshopify.com/cdn/shop/collections/backpacks.jpg?v=1663485713')",
          }}
        >
          <div className="container flex justify-center items-center py-24 px-4 md:px-12">
            <div className="text-center text-white rounded-md">
              <h1 className="text-3xl sm:text-4xl font-bold mb-4">Backpacks</h1>
              <p className="text-sm sm:text-base max-w-md text-wrap">
                Find here a selection of derivative products, caps, tote bags,
                and accessories signed with the acronym of the brand.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
