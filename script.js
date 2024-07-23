function Check() {
  const str = document.getElementById("txt").value;
  const cstr = str.split(" ").join("").toLowerCase();
  const rstr = cstr.split("").reverse().join("").toLowerCase();
  const result = document.getElementById("result");
  if (cstr == rstr) {
    result.innerHTML = "Yes, it is a Palindrom";
  } else {
    result.innerHTML = "Not a Palindrom";
  }
}
