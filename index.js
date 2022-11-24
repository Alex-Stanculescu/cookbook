const popoverTriggerList = document.querySelectorAll(
  '[data-bs-toggle="popover"]'
);
const popoverList = [...popoverTriggerList].map(
  (popoverTriggerEl) => new bootstrap.Popover(popoverTriggerEl)
);

const myFunction = () => {
  alert("Enjoy your meal🧁");
};

const recipeHeader = document.getElementById("recipe-header");
const recipePicture = document.getElementById("recipe-picture");
const recipeTitle = document.getElementById("recipe-title");
const recipeTitle2 = document.getElementById("recipe-title2");
const recipeDescription = document.getElementById("recipe-description");
const recipeIngredients = document.getElementById("recipe-ingredients");

const recipes = {
  "chocolate cookies": {
    header: "Chocolate Cookies",
    picture:
      "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=80",
    title: "Chocolate Cookies",
    description: `<p>
        These cookies are soft, chewy and golden like a good chocolate chip
        cookie should be. If you’ve tried making gluten-free chocolate chip
        cookies before you probably know they can turn out dry, grainy and
        pale.
      </p>
      <p>
        The first secret ingredient is brown butter. Sometimes gluten-free
        cookies can lack a depth of flavor. Brown butter gives these cookies
        a delectable nutty, toasty almost caramelized flavor that you can’t
        get from anything else.
      </p>`,
    ingredients: [
      {
        ingredient: "Butter",
        amount: "1/2 cup",
      },
      {
        ingredient: "Almond milk",
        amount: "1 tbsp",
      },
      {
        ingredient: "Brown sugar",
        amount: "3/4 cup",
      },
      {
        ingredient: "White sugar",
        amount: "1/4 cup",
      },
      {
        ingredient: "Egg",
        amount: "1",
      },
      {
        ingredient: "Gluten free flour",
        amount: "1 1/3 cups",
      },
      {
        ingredient: "Vanilla",
        amount: "1 tsp",
      },
    ],
  },
  "vanilla cake": {
    header: "Vanilla cake",
    picture:
      "https://images.unsplash.com/photo-1568051243857-068aa3ea934d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
    title: "Vanilla cake",
    description: `<p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
        Assumenda provident corporis sequi laboriosam natus saepe voluptate! Nesciunt veniam eum ipsum minima odio? 
        Quibusdam reprehenderit a repudiandae odit similique numquam tempore voluptas cupiditate quod amet incidunt animi facere, 
        consequatur repellat, nihil vero officia quidem ex suscipit. Temporibus nam earum magnam quos.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Quia quisquam dolores doloremque accusamus odio nulla! Sapiente doloribus rerum molestias odio delectus cupiditate, 
        quam eveniet, maxime esse quia, optio ad voluptatibus non! 
        Molestiae aut ducimus ex beatae quibusdam totam fugit rerum.
      </p>`,
    ingredients: [
      {
        ingredient: "Butter",
        amount: "1/2 cup",
      },
      {
        ingredient: "Almond milk",
        amount: "1 tbsp",
      },
    ],
  },

  /// Other keys are:
  "strawberry cake": undefined,
  "carrot cake": undefined,
  "orange cake": undefined,
};

const recipeList = document.getElementById("recipe-list");
for (const link of recipeList.children) {
  console.log(link);
  link.addEventListener("click", () => {
    console.log("clicked on", link.dataset.name);
    // now we can put recipe data onto the page
    const key = link.dataset.name;
    if (!key) return;
    const data = recipes[key];
    if (!data) return;

    // now setting the properties
    recipeHeader.innerHTML = data.header ?? "No header provided";
    recipePicture.src = data.picture ?? "https://unsplash.it/500";
    recipeTitle.innerHTML = data.title ?? data.header ?? "No title provided";
    recipeTitle2.innerHTML = data.title ?? data.header ?? "No title provided";
    recipeDescription.innerHTML = data.description ?? "No description provided";
    const tableHtml = data.ingredients.map(
      (ingredient) =>
        `<tr><td> ${ingredient.ingredient} </td><td> ${ingredient.amount} </td></tr>`
    );
    recipeIngredients.innerHTML = tableHtml.join("");

    const activeMenuItem = document.querySelector("#recipe-list .active");
    if (activeMenuItem) {
      activeMenuItem.classList.remove("active");
    }
    link.classList.add("active");
  });
}
