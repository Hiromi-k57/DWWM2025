"use strict";
document.addEventListener('DOMContentLoaded', function() {
    // 削除ボタン
    document.querySelectorAll('.remove-to-do').forEach(function(btn) {
        btn.addEventListener('click', function() {
            const id = this.getAttribute('id');
            fetch('./app/remove.php', {
                method: 'POST',
                headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                body: 'id=' + encodeURIComponent(id)
            })
            .then(response => response.text())
            .then(data => {
                if(data){
                    this.parentElement.style.transition = "opacity 0.6s";
                    this.parentElement.style.opacity = 0;
                    setTimeout(() => {
                        this.parentElement.style.display = "none";
                    }, 600);
                }
            });
        });
    });

    // チェックボックス
    document.querySelectorAll('.check-box').forEach(function(box) {
        box.addEventListener('click', function() {
            const id = this.getAttribute('data-todo-id');
            fetch('./app/check.php', {
                method: 'POST',
                headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                body: 'id=' + encodeURIComponent(id)
            })
            .then(response => response.text())
            .then(data => {
                if(data !== 'error'){
                    const h2 = this.nextElementSibling;
                    if(data === '1'){
                        h2.classList.remove('checked');
                    } else {
                        h2.classList.add('checked');
                    }
                }
            });
        });
    });
});
