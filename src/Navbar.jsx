export default function Navbar({siteName}) {
  return (
    <>
    <div className="bg-base-200 py-5">
    <div className="navbar max-w-screen-2xl mx-auto">
        <div className="flex-1">
          <a className="btn btn-ghost text-2xl font-bold">{siteName}</a>
        </div>
        <div className="flex-none gap-2">
          <div className="">
            <button className="btn btn-warning text-xl font-bold">sign up</button>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
