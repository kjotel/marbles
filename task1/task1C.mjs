// Original Code

const presentCount = 0;
const defaultStatus = { present: false };

function registerAttendance(students) {
  return students.map((student) => {
    if (!student.status) {
      student.status = defaultStatus;
    }

    if ((student.status.present = true)) {
      presentCount++;
    }

    return student.name + " is present";
  });
}

const students = [
  { name: "Ava" },
  { name: "Noah", status: { present: false } },
  { name: "Mia", status: { present: true } },
];

console.log(registerAttendance(students));
console.log(presentCount);
console.log(students);

// Improved Version

export function registerAttendanceImproved(students) {
  let presentCount = 0;

  const result = students.map((student) => {
    const status = student.status ? { ...student.status } : { present: false };

    if (status.present === true) {
      presentCount++;
    }

    return `${student.name} is ${status.present ? "present" : "absent"}`;
  });

  return { result, presentCount };
}

// Example usage
const studentsList = [
  { name: "Ava" },
  { name: "Noah", status: { present: false } },
  { name: "Mia", status: { present: true } },
];

const output = registerAttendanceImproved(studentsList);

console.log(output.result);
console.log(output.presentCount);
console.log(studentsList);
