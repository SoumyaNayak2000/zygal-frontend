// Function to set a cookie with a given name, value
function setCookie(name, value) {
  document.cookie = `${name}=${value};path=/frontend/pages/page2.html`;
}

// Function to get the value of a cookie by name
function getCookie(name) {
  const decodedCookie = decodeURIComponent(document.cookie);
  const cookieArray = decodedCookie.split(";");
  for (let i = 0; i < cookieArray.length; i++) {
    let cookie = cookieArray[i].trim();
    if (cookie.startsWith(name + "=")) {
      return cookie.substring(name.length + 1);
    }
  }
  return "";
}

// Function to submit data and store it in a cookie
function submitData() {
  const data = document.getElementById("input1").value;
  setCookie("userData", data);
}

// Function to search for data in the cookie and display results
function searchData() {
  const searchData = document.getElementById("input2").value;
  const storedData = getCookie("userData");

  if (storedData.includes(searchData)) {
    document.getElementById(
      "searchResults"
    ).innerText = `Matching data found: ${storedData}`;
  } else {
    document.getElementById("searchResults").innerText =
      "No matching data found.";
  }
}

// Function to clear all cookies related to "/page2.html"
function clearCookies() {
  document.cookie =
    "userData=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/frontend/pages/page2.html;";
}

// function to prevent back after logout
function preventBack() {
  window.history.forward();
}

function logout() {
  // Redirect to the login page
  window.location.href = "login.html";
}

setTimeout("preventBack()", 0);
window.onunload = function () {
  null;
};

 
 