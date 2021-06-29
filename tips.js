const tips = [
    "Make sure today's shower is under 7 minutes. Set a timer!", // water 
    "Today, take public transportation or walk/bike instead of driving!",
    "Wash your laundry with cold water today",
    "Turn the shower off while lathering today", 
    "Bring a reusable water bottle with you today", // litter
    "Avoid plastic cups/cutlery today. Bring a travel mug!",
    "Try to pick up some litter while walking outside today",
    "Make sure that nothing you throw in the garbage today could be recycled",
    "Look into composting at home",
    "Walk, bike or take public transit instead of driving today", // Emissions
    "Carpool instead of driving alone today. Consider using a carpool app!",
    "Drive the speed limit and accelerate gently to save gas (and money!)",
    "Turn the heat down in your house and wear a sweater",
    "Remember to turn lights off in rooms you aren't in!", // Energy
    "Use cold water to wash your laundry today",
    "Spin or hang dry your laundry today",
    "Turn all your lights off for two hours today (candles are a good light source, and very pretty!)",
    "Try to avoid eating meet (or at least beef) today", // Food
    "Do your best to eat everything you cook today. Don't make more than you can eat!",
    "Try to cook using local ingredients today",
    "Donate some old clothing today", // Donations
    "Research the environmental effects of a company you buy from regularly", // Education
    "Research one environmental charity you could donate to",
    "Teach yourself about an environmental issue today, and how you can help prevent it"
];

const getTipButton = document.getElementById("getTipButton");
const tip = document.getElementById("tip");

getTipButton.addEventListener("click", getTip);
window.onload = getTip;

function getTip() {
    var index = Math.round(Math.random() * (tips.length - 1));
    console.log(index);
    tip.textContent = tips[index];
}