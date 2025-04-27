function validateLogin() {
    var userId = document.getElementById("userId").value;
    var password = document.getElementById("password").value;
    var role = document.getElementById("role").value;

    // Hardcoded credentials
    if (role === "student" && userId === "S001" && password === "student123") {
        window.location.href = "student.html";
        return false;
    } else if (role === "teacher" && userId === "T001" && password === "teacher123") {
        window.location.href = "teacher.html";
        return false;
    } else if (role === "manager" && userId === "M001" && password === "admin123") {
        window.location.href = "manager.html";
        return false;
    } else {
        alert("Invalid credentials. Please try again!");
        return false;
    }
}
