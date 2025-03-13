import { ReactElement } from "react";
import { ChevronRight } from "lucide-react";
import Header from "@/components/shared/Header";

const recipes = [
  {
    title: "Grilled Cheese Sandwich",
    steps: [
      "Butter one side of two slices of bread.",
      "Place a slice of cheese between the unbuttered sides.",
      "Heat a pan and place the sandwich in it.",
      "Cook until golden brown on both sides.",
      "Serve hot.",
    ],
  },
  {
    title: "Scrambled Eggs",
    steps: [
      "Crack eggs into a bowl and whisk with salt and pepper.",
      "Heat butter in a pan over medium heat.",
      "Pour in the eggs and let them cook slightly.",
      "Gently stir until the eggs are soft and fluffy.",
      "Serve immediately.",
    ],
  },
  {
    title: "Fruit Smoothie",
    steps: [
      "Add banana, berries, and yogurt to a blender.",
      "Pour in a cup of milk or juice.",
      "Blend until smooth.",
      "Taste and add honey if needed.",
      "Pour into a glass and enjoy.",
    ],
  },
  {
    title: "Avocado Toast",
    steps: [
      "Toast a slice of bread until golden brown.",
      "Mash avocado in a bowl and season with salt and pepper.",
      "Spread mashed avocado on the toast.",
      "Top with optional ingredients like tomato or egg.",
      "Serve immediately.",
    ],
  },
  {
    title: "Oatmeal",
    steps: [
      "Boil water or milk in a pot.",
      "Stir in oats and reduce heat.",
      "Cook while stirring occasionally until thickened.",
      "Remove from heat and let sit for a minute.",
      "Serve with fruits, nuts, or honey.",
    ],
  },
];

export function Home(): ReactElement {
  return (
    <>
      <Header />
      <div className=" w-screen h-svh">
        {recipes.map((r: { title: string; steps: string[] }, idx: number) => {
          return (
            <div key={idx} className={"w-full h-full flex " + (idx % 2 === 0 ? "flex-row" : "flex-row-reverse")}>
              <div className="w-full h-full">
                <div className="grid place-items-center h-full w-full p-10">
                  <div className="flex flex-col gap-4">
                    <h2 className="text-4xl font-bold uppercase">{r.title}</h2>
                    <ul className="flex flex-col gap-2 text-lg">
                      {r.steps.map((step) => {
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
              <div className="w-full h-full overflow-hidden">
                <img data-rellax-speed="-4" className="w-full h-full object-cover scale-125" src="../assets/food.jpg" />
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
