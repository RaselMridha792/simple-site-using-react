export default function BodyContent() {
  return (
    <>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage:
            " url(https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp)",
        }}
      >
        <div className="hero-overlay bg-black bg-opacity-60"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-xl">
            <h1 className="mb-5 text-5xl font-black ">
              Taste Our Delicious Best Foods
            </h1>
            <p className="mb-5">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <div className="join">
              <input
                type="text"
                placeholder="search your food"
                className="input input-bordered join-item"
              />
              <button className="btn btn-warning join-item">Search</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
