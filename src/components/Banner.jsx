const Banner = () => {
  return (
    <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8 lg:py-32 text-center">
      <div className="mx-auto flex max-w-3xl flex-col">
        <h1 className="mt-1 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 bg-clip-text text-4xl font-extrabold uppercase tracking-tighter text-transparent sm:text-5xl lg:text-7xl">
          Website Name
        </h1>{" "}
        <h2 className="order-first bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 bg-clip-text font-medium tracking-wide text-transparent">
          AI Services on a Click
        </h2>
      </div>{" "}
      <p className="mx-auto mt-8 max-w-2xl text-xl font-medium text-white">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum dolore,
        quisquam id aperiam, ea sed dolorem laborum exercitationem nihil
        deserunt odit repellat, amet ipsum omnis ipsa sequi optio tempora
        inventore.
      </p>
    </div>
  );
};

export default Banner;
