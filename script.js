document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // フォームのデフォルト動作を防止

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    const validUsername = "mod1414"; // 正しいユーザーID
    const validPassword = "sutekinasaba55"; // 正しいパスワード

    if (username === validUsername && password === validPassword) {
        window.location.href = "https://sites.google.com/view/moderator51424049205jssjfj7bde/home"; // リダイレクトするURL
    } else {
        document.getElementById("error").textContent = "ユーザーIDまたはパスワードが間違っています。もう一度お確かめの上、再度お試しください";
    }
});
