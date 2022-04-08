window.garby.main = function () {
    alert("Hello World!");
    const params = new URLSearchParams(window.location.search);
    a = params.get('f');
    b = params.get("l");
    n = params.get("n");
    const random = /r(\d|\d\d|100)-(\d|\d\d|100)$/.test(n);
    if (random) {
        z = n.replace("r", "").split("-");
    }

    
    if (n == null) {
        alert("Please enter a number");
        n = "error";

    } else {
        x = document.getElementsByClassName("bold");
        for (var i = 0; i < x.length; i++) {
            if (random) {
                use = Math.floor(Math.random() * (z[1] - z[0] + 1)) + parseInt(z[0]);
            } else { use = n; }
            x[i].innerText = use + "\n" + use;
        }

    }


    if (a != null && b != null) {
        document.getElementsByTagName("h1")[0].innerText = "Grades and Attendance: " + b + ", " + a;
        document.getElementById("firstlast").innerText = a + " " + b;
    } 0;
}