const banner = document.getElementById("banner");
const today = new Date().getDay();

if (today >= 1 && today <= 3) {
  banner.style.display = "block";
} else {
  banner.style.display = "none";
}
