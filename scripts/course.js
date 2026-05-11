// course.js

const courses = [
  {
    code: "WDD 130",
    subject: "WDD",
    credits: 2,
    completed: true
  },
  {
    code: "WDD 131",
    subject: "WDD",
    credits: 2,
    completed: true
  },
  {
    code: "WDD 231",
    subject: "WDD",
    credits: 2,
    completed: false
  },
  {
    code: "CSE 110",
    subject: "CSE",
    credits: 2,
    completed: true
  },
  {
    code: "CSE 111",
    subject: "CSE",
    credits: 2,
    completed: false
  }
];

const courseContainer = document.querySelector("#courses");
const creditsContainer = document.querySelector("#credits");

function displayCourses(courseList) {

  courseContainer.innerHTML = "";

  courseList.forEach(course => {

    const div = document.createElement("div");

    div.classList.add("course");

    if (course.completed) {
      div.classList.add("completed");
    } else {
      div.classList.add("not-completed");
    }

    div.textContent = course.code;

    courseContainer.appendChild(div);
  });

  const totalCredits = courseList.reduce(
    (total, course) => total + course.credits, 0
  );

  creditsContainer.textContent =
    `Total Credits: ${totalCredits}`;
}

displayCourses(courses);

document.querySelector("#all").addEventListener("click", () => {
  displayCourses(courses);
});

document.querySelector("#wdd").addEventListener("click", () => {

  const filtered = courses.filter(course =>
    course.subject === "WDD"
  );

  displayCourses(filtered);
});

document.querySelector("#cse").addEventListener("click", () => {

  const filtered = courses.filter(course =>
    course.subject === "CSE"
  );

  displayCourses(filtered);
});