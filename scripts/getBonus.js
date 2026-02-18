let getBonusBtn = document.getElementById("get-bonus-btn");

getBonusBtn.addEventListener("click", function () {
  const couponCode = getValueFromInput("get-bonus-coupon").trim();
    if (couponCode === "") {
    alert("Coupon code required");
    return;
    }
    else{
        alert(`Congratulations! You have received a 1000tk bonus for using the coupon code: ${couponCode}`);
        const currentBalance = getBalance();
        const newBalance = currentBalance + 1000;
        setBalance(newBalance);
        addTransaction("Get Bonus", "N/A", 1000, "Success");

    }
    
    
});
