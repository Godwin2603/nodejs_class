window.addEventListener("load", () => {
    const params = new URLSearchParams(window.location.search);

    if (params.get("signup") === "sucess") {
        alert("Signup successful!");
    } else if (params.get("signup") === "error") {
        alert("Signup failed. Please fill all fields.");
    }
});

