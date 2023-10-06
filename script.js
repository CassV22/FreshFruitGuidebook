const fruits = [
    {
        name: "Apples",
        image: "./images/apples.png",
        fall: true,
        winter: true,
        spring: true,
        summer: true,
        selection: "Look for firm, shiny apples with smooth skin and stems. Apples should smell fresh.",
        uses: "Rinse before eating. Apples can be peeled or eaten as is, and can be used in many ways, such as sliced with caramel or peanut butter, mashed into applesauce, squeezed into a fresh glass of apple juice, or baked in the oven with spices and vanilla.",
        varities: ["Honeycrisp", "Granny Smith", "Gala", "Golden Delicious", "McIntosh", "Fuji"]
    }, 
    {
        name: "Bananas",
        image: "./images/bananas.png",
        fall: true,
        winter: true,
        spring: true,
        summer: true,
        selection: "Look for bananas that are firm without any cuts or bruises. Choose bananas with greener skin to store and eat later and bananas with yellow skin to eat right away.",
        uses: "Peel and eat or try adding bananas to some of your favorite dishes, such as slicing and adding to a fruit smoothie for extra creaminess, using them as a topping for cereal or oatmeal, cutting into halves and putting on popsicle sticks in the freezer to make banana popsicles, or blending to make banana ice cream.",
        varieties: ["Traditional", "Red Bananas", "Plantains"]
    }
];

const fruitImg = document.getElementById("fruitImage");
const fruitName = document.getElementById("fruit_name");
const seasons = document.getElementById("seasonality");
const fall = document.querySelector(".fall");
const winter = document.querySelector(".winter");
const spring = document.querySelector(".spring");
const summer = document.querySelector(".summer");

const selectionTxt = document.getElementById("selecting");
const useTxt = document.getElementById("uses");
const varietyTxt = document.getElementById("variety");

const leftArrow = document.querySelector(".leftArrow");
const rightArrow = document.querySelector(".rightArrow");

const supriseBtn = document.getElementById("random");

let currentItem = 0;

rightArrow.addEventListener("click", () =>{
    alert('Clicked!');
    currentItem++;
    newCard(currentItem);
});

//to fix: need to make text headers stay; need to adjust display for longer texts

function newCard(currentItem) {
    const current = fruits[currentItem];
    fruitImg.src = current.image;
    fruitName.textContent = current.name;
    // if current.fall === true, then show .fall image, else hide it; same for all seasons
    selectionTxt.textContent = current.selection;
    useTxt.textContent = current.uses;
    varietyTxt.textContent = current.varieties;
}