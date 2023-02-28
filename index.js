const selectElement = document.getElementById("GPA");
const selectedValue = selectElement.value;




if (selectedValue === "SGPA") {
  console.log("SGPA");}
else if (selectedValue === "CGPA") {
    console.log("CGPA");}

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
                            name: "Physics",
                            credits: 4
                        },
                    ]
                }
                
            ]
        }
    ]
}