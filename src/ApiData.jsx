import { useState } from "react";
import { useEffect } from "react";
import CartContainer from "./CartContainer";

export default function ApiData() {
  const [food, setFood] = useState([]);
  const [foodDetails, setFoodDetails] = useState(null);

  useEffect(() => {
    const loadData = async () => {
      const response = await fetch(
        "https://www.themealdb.com/api/json/v1/1/categories.php"
      );
      const data = await response.json();
      const details = data.categories;
      setFood(details); // problem for 2 undefined values return!!!
    };
    loadData();
  }, []);

  useEffect(() => {
    if (foodDetails) {
      const modal = document.getElementById("my_modal_4");
      if (modal) {
        modal.showModal();
      }
    }
  }, [foodDetails]);
  // handle button action
  const handleModalBox = (data) => {
    setFoodDetails(data);
  };

  const resetButton = ()=>{
    setFoodDetails(null);
  }
  return (
    <>
      <div className="max-w-screen-2xl mx-auto">
        <div>
          <h1 className="text-center text-3xl font-black py-10">
            Your Favourite Food
          </h1>
        </div>
        <div className="grid lg:grid-cols-3 gap-10 md:mb-20 my-10 px-5">
          <div className="md:col-span-2 grid md:grid-cols-2 gap-5">
            {food.map((detail) => (
              <CartContainer
                key={detail.idCategory}
                detail={detail}
                handleModalBox={handleModalBox}
              ></CartContainer>
            ))}
          </div>
          <div className="border shadow-xl rounded-xl">
            <h3 className="text-center py-3 text-xl font-bold uppercase">
              chose your favourite food items
            </h3>
            <hr />
            <div className=" grid grid-cols-3 gap-3 p-4">
              {/* right side box container  */}
            </div>
          </div>
        </div>
        {foodDetails && (
          <dialog id="my_modal_4" className="modal">
            <div className="modal-box w-11/12 max-w-3xl">
              <img className="w-screen mx-auto border border-2 rounded-xl" src={foodDetails.strCategoryThumb} alt="" />
              <h3 className="font-bold text-2xl">{foodDetails.strCategory}</h3>
              <p>details: {foodDetails.strCategoryDescription}</p>
              <div className="modal-action">
                <form className="w-full flex justify-center" method="dialog">
                  {/* if there is a button, it will close the modal */}
                  <button onClick={resetButton} className="btn w-2/4 btn-primary">Close</button>
                </form>
              </div>
            </div>
          </dialog>
        )}
      </div>
    </>
  );
}
