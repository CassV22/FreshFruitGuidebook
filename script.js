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
        varities: "Honeycrisp, Granny Smith, Gala, Golden Delicious, McIntosh, Fuji"
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
        varieties: "Traditional, Red Bananas, Plantains"
    },
    {
        name: "Cherries",
        image: "./images/cherries.png",
        fall: false,
        winter: false,
        spring: false,
        summer: true,
        selection: "Look for cherries that are firm, plump, and shiny with the stems still attached. Avoid cherries that are mushy, hard, wrinkled, or have brown spots.",
        uses: "Rinse, remove stems, and enjoy (watch out for the pit in the center)! You can also add cherries to fruit salads or yogurt, or bake them into a delicious dessert, like cherry cobbler. Cherries go bad quickly, so store them in the refrigerator immediately after purchasing and eat them within 3 to 5 days. Cherries can also be frozen for later use.",
        varieties: "Chelan, Rainier, Lambert"
    }
];

const fruitImg = document.getElementById("fruitImage");
const fruitName = document.getElementById("fruit_name");
const seasons = document.getElementById("seasonality");
const falls = document.querySelector(".fall");
const winters = document.querySelector(".winter");
const springs = document.querySelector(".spring");
const summers = document.querySelector(".summer");

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
    // if (current.fall === true) {
    //     falls.style.visibility = "visible";
    // } else {
    //     falls.style.visibility = "hidden";
    // }
    // if (current.winter === true) {
    //     winters.style.visibility = "visible";
    // } else {
    //     winters.style.visibility = "hidden";
    // }
    // if (current.spring === true) {
    //     springs.style.visibility = "visible";
    // } else {
    //     springs.style.visibility = "hidden";
    // }
    // if (current.summer === true) {
    //     summers.style.visibility = "visible";
    // } else {
    //     summers.style.visibility = "hidden";
    // }
    if (current.fall === true) {
        falls.style.display = "block";
    } else {
        falls.style.display  = "none";
    }
    if (current.winter === true) {
        winters.style.display  = "block";
    } else {
        winters.style.display  = "none";
    }
    if (current.spring === true) {
        springs.style.display  = "block";
    } else {
        springs.style.display  = "none";
    }
    if (current.summer === true) {
        summers.style.display  = "block";
    } else {
        summers.style.display  = "none";
    }
    selectionTxt.textContent =  current.selection;
    useTxt.textContent = current.uses;
    varietyTxt.textContent = current.varieties; //need to add space between each
}