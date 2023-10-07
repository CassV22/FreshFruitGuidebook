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
    },
    {
        name: "Dragonfruit (aka pitaya or strawberry pear)",
        image: "./images/dragonfruit.png",
        fall: true,
        winter: false,
        spring: true,
        summer: false,
        selection: "Choose dragon fruit that has red or yellow skin that is bright with little to no dark spots; the fruit should feel soft, but not mushy when touched. Buy dragon fruit with greener skin to ripen at home to enjoy a few days later.",
        uses: "Dragon fruit is a delicious subtropical fruit that can be sliced and eaten as is, cut and added to fruit salads or smoothies, blended into lemonades or other cold drinks, or preserved as jam or compote for longer storage.",
        varieties: "Sour, Sweet"
    },
    {
        name: "Eggplant",
        image: "./images/eggplant.png",
        fall: false,
        winter: false,
        spring: false,
        summer: true,
        selection: "Choose eggplants that are heavy, shiny, and are without cracks or bruises.",
        uses: "Although they are typically thought of as a vegetable, eggplants are technically a fruit since they contain seeds. Despite this classification, eggplants are eaten differently than most fruits. They are often used in savory dishes such as lasagna or casseroles, and are enjoyed in many ways including diced and sauteed in a vegetable stir-fry, cubed and put on top of pizza, and sliced and tossed in breadcrumbs and parmesan cheese then baked in the oven for a crispy eggplant parmesan.",
        varieties: "Traditional, Chinese"
    },
    {
        name: "Figs",
        image: "./images/figs.png",
        fall: false,
        winter: false,
        spring: false,
        summer: true,
        selection: "Look for figs that are soft, but not mushy.",
        uses: "Figs can be used for both sweet and savory dishes; they can be sliced and tossed into a salad, paired with different cheeses, heated and reduced into a filling for cookies or a glaze for meat, or preserved for a tasty jam.",
        varieties: "Black Mission, Turkish, Adriatic"
    },
    {
        name: "Grapes",
        image: "./images/grapes.png",
        fall: true,
        winter: false,
        spring: false,
        summer: false,
        selection: "Choose grapes that are plump, firm, and firmly attached to the stem.",
        uses: "Rinse and eat right off the stem. Grapes can also be enjoyed frozen for a cold snack, grilled and added to a skewer of other fruits and vegetables, mixed in a fruit salad, or preserved for jams or jellies.",
        varieties: "Red, Green, Cotton Candy, Black-blue"
    },
    {
        name: "Honeydew",
        image: "./images/honeydew.png",
        fall: false,
        winter: false,
        spring: false,
        summer: true,
        selection: "Choose honeydews that are round in shape. The skin of the fruit can be white or yellow, but avoid any that look fuzzy. Honeydews should also feel heavy and firm.",
        uses: "Honeydew can be enjoyed in many ways! Slice it and eat it raw or add to a fruit salad, blend it with ice and fruit juice to make a slushy drink, dice it and add onions and cilantro to make a fruity salsa, or scoop it into balls with a melon scoop and wrap with prosciutto (Italian ham) for a delicious snack or appetizer.",
        varieties: "Bitter Melon, Persian Melon, Cantaloupe"
    },
    {
        name: "Kiwifruit (kiwi)",
        image: "./images/kiwi.png",
        fall: true,
        winter: true,
        spring: true,
        summer: false,
        selection: "Choose kiwis that feel firm, but not too hard; hard kiwis have a sour taste. Avoid kiwis that are mushy, wrinkled, or bruised.",
        uses: "Kiwis can be peeled, sliced, and eaten raw, diced and used as a garnish for cereal or yogurt, sliced and tossed into a fruit salad or added to a fruit tart, or blended with lime or banana and ice for a refreshing fruit smoothie or drink.",
        varieties: "N/A"
    },
    {
        name: "Lemon",
        image: "./images/lemon.png",
        fall: true,
        winter: true,
        spring: true,
        summer: true,
        selection: "Choose lemons that are firm and feel heavy for their size.",
        uses: "Rinse and cut. Lemons can be used in just about everything in a variety of ways, from using the juice to make fresh lemonade or add flavor to water, to adding a squeeze of juice to meat or seafood for a citrus tang, to zesting the skin to bring tartness to a dish. The possibilities are endless, and the entire fruit can be used.",
        varieties: "Regular, Meyer Lemons"
    },
    {
        name: "Mango",
        image: "./images/mango.png",
        fall: true,
        winter: false,
        spring: false,
        summer: true,
        selection: "Choose mangos that are plump and firm, but not hard. Mangoes should have smooth yellow or red skin and smell sweet.",
        uses: "Rinse, then cut in half around the pit. Cut into slices and peel skin, or make a grid of horizontal and vertical lines along the flesh and cut out the cubes from the skin. Mangos can be blended with ice and fruit juice for a cold drink or smoothie, diced and placed on top of yogurt or added with jalapeno and onion to make a tropical salsa, or cut and enjoyed as is or sprinkled with lime, honey, and/or chili powder for extra flavor.",
        varieties: "N/A"
    },
    {
        name: "Nectarine",
        image: "./images/nectarine.png",
        fall: false,
        winter: false,
        spring: false,
        summer: true,
        selection: "Choose nectarines that are firm with smooth, dark skin; the darker the skin, the sweeter the fruit will taste.",
        uses: "Rinse and slice for a quick and tasty snack! Peaches can also be added to beverages to enhance flavor, puréed and dehydrated or baked slowly at a very low temperature to create fruit leather, grilled and put over vanilla ice cream, preserved as jams or jellies, or diced and added to cereal, waffles, pancakes, or yogurt.",
        varieties: "Peaches, White Peaches, Yellow Peaches"
    },
    {
        name: "Oranges",
        image: "./images/orange.png",
        fall: false,
        winter: true,
        spring: false,
        summer: false,
        selection: "Choose oranges the have smooth skin and feel firm and heavy for their size.",
        uses: "Rinse and slice to enjoy. Oranges last up to a week at room temperature and up to 3 weeks, and can be used in many ways. Slice and eat as is or add orange slices to fruit salad, juice oranges and mix with lemon juice to make a refreshing orange lemonade, cut into chunks and add to a salad for extra sweetness, or juice or slices to meat to add some tang.",
        varieties: "Blood Orange, Clementines, Kumquats, Cara Cara Navel, Tangerine, Valencia Orange"
    },
    {
        name: "Pineapple",
        image: "./images/pineapple.png",
        fall: true,
        winter: true,
        spring: true,
        summer: false,
        selection: "Choose pineapples that feel heavy for their size and are free of soft spots, bruises, or darkened spots. A pineapple that is well ripened should look brown and yellow and smell slightly sweet.",
        uses: "Rinse, cut off the leaves, and peel the skin. Cut into slices or cubes and enjoy! Pineapple can be eaten in many ways such as blended with ice and fruit juice to make a refreshing slushy, sliced and grilled for a caramelized flavor, diced with lime juice and other fruits to make a fruity salsa, or pureed and combined with spices and seasonings to make a marinade for Hawaiian chicken.",
        varieties: "N/A"
    },
    {
        name: "Raspberries",
        image: "./images/raspberries.png",
        fall: true,
        winter: false,
        spring: false,
        summer: true,
        selection: "Choose raspberries that are dry, plump, and firm. Avoid berries that look wet or moldy.",
        uses: "Rinse and eat as is, or dice and bake into muffins or bread, add on top of yogurt or salad, use as a garnish for water, or heat up in a sauce pan on the stove with a splash or fruit juice to create a delicious sauce to enjoy with pancakes, waffles, or ice cream.",
        varieties: "Boysenberries, Loganberries, Blackberries"
    },
    {
        name: "Strawberries",
        image: "./images/strawberry.png",
        fall: false,
        winter: false,
        spring: true,
        summer: true,
        selection: "Choose strawberries that are shiny, firm, and bright red with green caps. Avoid berries that appear, shriveled, mushy, or leaky.",
        uses: "Rinse thoroughly and remove caps. Strawberries can be chopped and enjoyed in salads or be used as a topping for cereal or pancakes, blended with ice and fruit for a refreshing smoothie, boiled in a saucepan on the stove with juice or balsamic vinegar to create a sweet syrup for ice cream or yogurt, or sliced and dipped in dark chocolate for a healthy and simple dessert.",
        varieties: "N/A"
    },
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
    // alert('Clicked!');
    currentItem++;
    newCard(currentItem);
});

//to fix: need to make text headers stay; need to adjust display for longer texts

function newCard(currentItem) {
    const current = fruits[currentItem];
    fruitImg.src = current.image;
    fruitName.textContent = current.name;   
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