function buyNow(){
    if(localStorage.getItem("loggedIn") !== "true"){
        alert("Please login first");
        openLogin();
        return;
    }

    alert("Proceeding to payment...");
}
