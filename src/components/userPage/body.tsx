import { Button } from "../ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { Minus, Plus } from "lucide-react";

const recips = [
  {
    title: "Spaghetti Carbonara",
    category: "Italian",
    createdat: "2025-03-10",
    image: "/assets/food.jpg",
  },
  {
    title: "Chicken Tikka Masala",
    category: "Indian",
    createdat: "2025-03-08",
    image: "/assets/food.jpg",
  },
  {
    title: "Classic Caesar Salad",
    category: "Italian",
    createdat: "2025-03-10",
    image: "/assets/food.jpg",
  },
  {
    title: "Classic Caesar Salad",
    category: "Italian",
    createdat: "2025-03-10",
    image: "/assets/food.jpg",
  },
  {
    title: "Spaghetti Carbonara",
    category: "Italian",
    createdat: "2025-03-10",
    image: "/assets/food.jpg",
  },
];

export default function Body() {
  const [expand, setExpand] = useState(false);

  const handleExpand = () => {
    setExpand((exp) => !exp);
  };
  return (
    <div className=" bg-background w-full grid h-svh items-start">
      <div className="w-full flex flex-col gap-4 p-8 max-w-[1200px] mx-auto mt-20">
        <div className="w-full h-full">
          <h3 className="w-full flex justify-between py-5 text-xl font-bold text-text uppercase">
            Your Recipes
          </h3>
          <div className="flex flex-col items-center gap-2  p-4  rounded-md  min-h-1/2 bg-background-middle">
            {recips.map((recipe) => (
              <div className="flex w-full rounded-md cursor-pointer gap-10 text-background p-2 bg-background shadow-sm">
                <div className="flex items-center justify-between flex-grow">
                  <div className="flex flex-col gap-2 text-xl text-text">
                    {recipe.title}
                  </div>
                  <div className="text-md bg-accent-faded rounded-md px-5 py-1">
                    <p className="rounded-md text-accent">{recipe.category}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="cursor-pointer " onClick={handleExpand}>
          {expand ? <Minus className="text-3xl" /> : <Plus />}
        </div>
        {/* <Plus /> */}

        <div className={` w-full ${expand ? "" : "hidden"}`}>
          <h3 className="w-full flex justify-between py-5 text-xl font-bold text-text uppercase">
            Create new recipe
          </h3>
          <form className="flex w-full flex-col gap-6  p-8 rounded-md bg-background-middle">
            <div className="flex flex-col gap-3">
              <div>
                <label className="font-bold mb-2">Title</label>
                <Input
                  className="focus:outline-0 focus:border-2 bg-background"
                  type="text"
                />
              </div>
              <div>
                <label className="font-bold mb-2">Steps</label>
                <Textarea
                  className="bg-background"
                  placeholder="Write the steps of recipe"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="" className="font-bold">
                  Image
                </label>
                <input
                  type="file"
                  accept="image/png, image/jpg, image/jpeg"
                  className="h-20 border rounded-md bg-background p-2"
                />
              </div>
            </div>

            <Button
              type="submit"
              className=" items-center text-background bg-accent w-max text-xl cursor-pointer"
            >
              Create Recipe
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}
