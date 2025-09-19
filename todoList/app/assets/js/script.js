// ==========================================================
// script.js (vanilla JS, simple)
// - Utilise le jeton CSRF depuis <meta name="csrf_token">
// - Bascule d’état et suppression via fetch POST
// - Messages en français / Commentaires FR + JP
// ==========================================================

document.addEventListener("DOMContentLoaded", function () {
  // Récupérer le jeton CSRF depuis la balise <meta>
  // （<meta> から CSRF トークンを取得）
  const csrfMeta = document.querySelector('meta[name="csrf_token"]');
  const csrfToken = csrfMeta ? csrfMeta.getAttribute("content") : "";

  // -------- Bascule de l’état “checked” （チェック状態の切り替え）--------
  document.querySelectorAll(".check-box").forEach(function (checkBtn) {
    // Ajouter un écouteur d’événement sur chaque case à cocher
    // 各チェックボックスにクリックイベントを追加
    checkBtn.addEventListener("click", function (e) {
      e.preventDefault();// Empêcher le comportement par défaut（デフォルト動作を無効化）
      // Récupérer l’ID de la tâche à partir de l’attribut data-todo-id
      // クリックするとdata-todo-id属性から対象タスクのIDを取得
      const id = this.getAttribute("data-todo-id");
      if (!id) return;// Si pas d’ID, on arrête（IDが無ければ処理中止）

      // Envoyer une requête POST à check.php avec fetch()
      // fetch()を使ってcheck.php(URL:/check)にPOST=「サーバーにデータを送る」リクエスト送信
      // リクエストヘッダーを設定:HTMLフォームと同じContent-Typeでデータを送る指定
      fetch("/check", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8" },
        body: `id=${encodeURIComponent(id)}&csrf=${encodeURIComponent(csrfToken)}`
        // Envoyer l’ID de la tâche + le jeton CSRF
        // タスクのIDとCSRFトークンを送信,　安全にURLエンコード(スペース等を記号変換)するための関数
      })
        .then((res) => res.text())// Lire la réponse comme texte（レスポンスをテキストとして取得）
        .then((data) => {
            // Vérifier la réponse envoyée par le serveur
            // サーバーから返ってきたデータを確認
          if (data === "0" || data === "1") {
            location.reload();// Succès → recharger la page（成功したらページ更新）
          } else if (data === "error_csrf") {
            alert("Échec de la vérification CSRF. Veuillez réessayer.");// CSRFトークン不一致 → エラー    
          } else if (data === "error_auth") {
            alert("Veuillez vous reconnecter.");// 非ログイン状態            
          } else if (data === "error_id") {
            alert("ID invalide.");// 不正なID        
          } else if (data === "error_not_found") {
            alert("Tâche introuvable.");// 該当タスクなし            
          } else if (data === "error_method") {
            alert("Méthode non autorisée.");// 不正なHTTPメソッド            
          } else if (data === "error_update") {
            alert("La mise à jour a échoué.");// 更新失敗
          } else {
            alert("Erreur inconnue : " + data);// その他予期しないエラー
          }
        })
        .catch(() => {
          alert("Erreur réseau. Veuillez réessayer.");// ネットワークエラー:通信失敗時レスポンスが無い場合の処理
        });
    });
  });

  // -------- Suppression d’une tâche （タスク削除）--------
  document.querySelectorAll(".remove-to-do").forEach(function (removeBtn) {
    // 各remove-to-doにクリックイベントを追加
    removeBtn.addEventListener("click", function (e) {
      e.preventDefault();
      const id = this.getAttribute("data-todo-id");
      if (!id) return;

      fetch("/remove", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8" },
        body: `id=${encodeURIComponent(id)}&csrf=${encodeURIComponent(csrfToken)}`
      })
        .then((res) => res.text())
        .then((data) => {
          if (data === "success") {
            location.reload();
          } else if (data === "error_csrf") {
            alert("Échec de la vérification CSRF. Veuillez réessayer.");
          } else if (data === "error_auth") {
            alert("Veuillez vous reconnecter.");
          } else if (data === "error_id") {
            alert("ID invalide.");
          } else if (data === "error_not_found") {
            alert("Tâche introuvable ou déjà supprimée."); // 該当タスクなし or すでに削除済み
          } else if (data === "error_method") {
            alert("Méthode non autorisée.");
          } else if (data === "error_delete") {
            alert("La suppression a échoué.");// 削除失敗（DBエラーなど）
          } else {
            alert("Erreur inconnue : " + data);
          }
        })
        .catch(() => {
          alert("Erreur réseau. Veuillez réessayer.");
        });
    });
  });
});