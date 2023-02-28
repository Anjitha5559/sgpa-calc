
btn1.addEventListener("click", function() {
let selectElement = document.getElementById("opt1");
let selectedValue = selectElement.value;
if (selectedValue === "SGPA") {
    console.log("SGPA");}
  else if (selectedValue === "CGPA") {
      console.log("CGPA");}
  });


var data = {
    branches: [
        {
            name: "CSE",
            semesters: [
                {
                    name: "Semester 1",
                    subjects: [
                        {
                            name: "Maths",
                            credits: 4
                        },
                        {
                            name: "Physics/Chemistry",
                            credits: 4
                        },
                    ]
                }
                
            ]
        }
    ]
}