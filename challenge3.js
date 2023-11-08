function check_range(n1, n2) {
  return ((n1 >= 50 && n1 <= 99) || (n2 >= 50 && n2 <= 99));
}
const num_1 = 60;
const num_2 = 100;
if (check_range(num_1, num_2))
  console.log("One of the numbers is within the range 50 to 99");
else
  console.log("None of the numbers is within the range 50 to 99");
