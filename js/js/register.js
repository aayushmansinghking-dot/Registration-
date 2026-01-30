import { db } from "./firebase.js";
import { ref, set, get, child } from
"https://www.gstatic.com/firebasejs/10.7.1/firebase-database.js";

function generateJP() {
  return "JP" + Math.floor(1000 + Math.random() * 9000);
}
