//declaring variables for each product
var ontrack = 0;
var companyOps = 0;
var splashkit = 0;
var artGallery = 0;
var courseFlow = 0;

var onboardingData = [
  {
    name: "front end development",
    ontrack: 1,
    companyOperations: 1,
    splashkit: 0,
    artGallery: 1,
    courseflow: 1,
  },
  {
    name: "back end development",
    ontrack: 1,
    companyOperations: 0,
    splashkit: 0,
    artGallery: 1,
    courseflow: 1,
  },
  {
    name: "documentation",
    ontrack: 0,
    companyOperations: 1,
    splashkit: 1,
    artGallery: 0,
    courseflow: 0,
  },
  {
    name: "software development",
    ontrack: 0,
    companyOperations: 0,
    splashkit: 1,
    artGallery: 0,
    courseflow: 0,
  },
];

//new and improved function for toggling variables and setting values
function trueToggleButton(currentButton) {
  var button = document.getElementById(currentButton);
  if (button.style.color === "orange") {
    //first change color
    button.style.color = "black";
    //then adjust variables using values in onboardingData
    ontrack -= onboardingData[currentButton].ontrack;
    companyOps -= onboardingData[currentButton].companyOperations;
    splashkit -= onboardingData[currentButton].splashkit;
    artGallery -= onboardingData[currentButton].artGallery;
    courseFlow -= onboardingData[currentButton].courseflow;
  } else {
    button.style.color = "orange";
    ontrack += onboardingData[currentButton].ontrack;
    companyOps += onboardingData[currentButton].companyOperations;
    splashkit += onboardingData[currentButton].splashkit;
    artGallery += onboardingData[currentButton].artGallery;
    courseFlow += onboardingData[currentButton].courseflow;
  }
}

//function for printing buttons based on the length of onboardingData
function printButton() {
  for (var i = 0; i < onboardingData.length; i++) {
    //create button. Give it the id of the current loop value
    var button = document.createElement("button");
    button.setAttribute("id", i);

    //set onclick to run the toggle button function on the
    button.onclick = function () {
      trueToggleButton(this.id);
    };
    var text = document.createTextNode(onboardingData[i].name);
    button.appendChild(text);
    document.body.appendChild(button);
  }
}
