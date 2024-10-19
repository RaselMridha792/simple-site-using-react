export default function CartContainer({ detail, handleModalBox }) {
  console.log(detail);
  const { idCategory, strCategory, strCategoryThumb, strCategoryDescription } =
    detail;

  return (
    <>
      <div className="card lg:card-side bg-base-100 shadow-xl w-auto">
        <figure className="w-full">
          <img className="" src={strCategoryThumb} alt="Album" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{strCategory}</h2>
          <p>{strCategoryDescription.slice(0, 100)}</p>
          <div className="card-actions justify-start">
            <button
              onClick={() => handleModalBox(detail)}
              className="link text-yellow-500">
              View details...
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
