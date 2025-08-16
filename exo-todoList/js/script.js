document.addEventListener("DOMContentLoaded", function() {

    // CSRFトークンを<meta>から取得
    const csrfToken = document.querySelector('meta[name="csrf_token"]').getAttribute("content");

    // タスク完了状態の切り替え
    document.querySelectorAll(".check-box").forEach(function(checkBtn) {
        checkBtn.addEventListener("click", function(e) {
            e.preventDefault();
            const id = this.getAttribute("data-todo-id");

            fetch("app/check.php", {
                method: "POST",
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded"
                },
                body: `id=${encodeURIComponent(id)}&csrf_token=${encodeURIComponent(csrfToken)}`
            })
            .then(res => res.text())
            .then(data => {
                if (data === "error_csrf") {
                    alert("La sécurité CSRF a échoué.");
                } else {
                    location.reload();
                }
            });
        });
    });

    // タスク削除
    document.querySelectorAll(".remove-to-do").forEach(function(removeBtn) {
        removeBtn.addEventListener("click", function(e) {
            e.preventDefault();
            const id = this.getAttribute("data-todo-id");

            fetch("app/remove.php", {
                method: "POST",
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded"
                },
                body: `id=${encodeURIComponent(id)}&csrf_token=${encodeURIComponent(csrfToken)}`
            })
            .then(res => res.text())
            .then(data => {
                console.log("remove.php の返り値:", data);
                if (data === "success") {
                    location.reload();
                } else if (data === "error_csrf") {
                    alert("CSRFトークンが一致しません");
                } else if (data === "error_auth") {
                    alert("ログイン状態を確認してください");
                } else if (data === "error_id") {
                    alert("削除するIDが不正です");
                } else if (data === "error_delete") {
                    alert("削除できませんでした（権限またはDBエラー）");
                } else {
                    alert("予期しないエラー: " + data);
                }
            });
        });
    });

});
