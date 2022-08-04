exercises = {legs:['Leg Press', 'Leg Extensions', 'Leg Curls', 'Hack Squats', 'Calf Raises', 'Back Squats', 'Hip Adductors'],
             push:['Bench Press' , 'Chest Press' , 'Cable Flys', 'Incline Bench Press', 'Decline Bench Press', 'Pectoral Fly Machine', 'Dumbell Fly' ],
             pull:['Lat Pulldowns','Barbell/Dumbell Bicep Curls', 'Overhead Triceps Extensions', 'Underhand Seated Row', 'Dumbell Fly', 'Tricep Dips', 'Tricep Pushdowns', 'Assisted Pull Ups']}
plan = []


const pictures = document.querySelectorAll(["data-category"]);

pictures.forEach((picture) => {
  const category = picture.getAttribute("data-category");
  const type = picture.getAttribute("data-type");

  picture.classList.toggle("has-background-light");
  picture.classList.toggle("has-background-warning");


});