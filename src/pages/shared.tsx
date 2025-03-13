import { ChevronRight, Share2 } from "lucide-react";
import { ReactElement } from "react";
const recipe = {
  title: "Grilled Cheese Sandwich",
  steps: [
    "Butter one side of two slices of bread.",
    "Place a slice of cheese between the unbuttered sides.",
    "Heat a pan and place the sandwich in it.",
    "Cook until golden brown on both sides.",
    "Serve hot.",
  ],
};
export function Shared(): ReactElement {
  return (
    <div className="grid place-items-center w-screen bg-gray-100">
      <div className="relative  w-[calc(100%-10rem)] h-[calc(100%-10rem)] bg-white rounded-xl">
        <button title="Share" className="fixed top-10 right-10 z-[1000] cursor-pointer">
          <Share2 size={36} className=" bg-white p-2 rounded-sm" />
        </button>
        <div className="w-full h-full p-5 shadow-lg rounded-xl">
          <div className="w-full h-full flex flex-col-reverse lg:flex-row rounded-lg overflow-hidden">
            <div className="w-full h-full">
              <div className="grid place-items-center h-full w-full p-10">
                <div className="w-full flex flex-col gap-4 h-full">
                  <h2 className="text-2xl lg:text-4xl font-bold uppercase h-min">{recipe.title}</h2>
                  <ul className="flex flex-col gap-2 text-md lg:text-lg">
                    {recipe.steps.map((step) => {
                      return (
                        <li className="flex items-start">
                          <ChevronRight className="text-accent" />
                          <p>{step}</p>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </div>
            <div className="w-full h-max max-h-[400px] lg:max-h-full lg:h-full">
              <img data-rellax-speed="-4" className="w-full h-full object-cover" src="../assets/food.jpg" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
