document.getElementById("registerForm").addEventListener("submit", function (e) {
    e.preventDefault();
    let name = document.getElementById("name").value;
    let phone = document.getElementById("phone").value;

    if (name && phone) {
        alert(`Cảm ơn ${name}, chúng tôi sẽ liên hệ sớm qua số ${phone}`);
        this.reset();
    } else {
        alert("Vui lòng nhập đầy đủ thông tin");
    }
});
