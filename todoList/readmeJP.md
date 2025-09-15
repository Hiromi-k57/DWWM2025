# PHP TODO List ウェブアプリケーション

HTML、CSS、JavaScript、PHP、MySQLを使用して構築された、シンプルで直観的に使うことができるToDoリストWebアプリケーションです。
このアプリケーションでは、ユーザー登録、ユーザー削除、タスクの追加、削除、更新を行うことができます。

## 特徴

- ユーザー登録、削除
- タスク追加
- タスクを完了としてマークする
- タスクを削除
  
## 使用されるテクノロジー

- フロントエンド: HTML、CSS、JavaScript
- バックエンド: PHP、MySQL

## セットアップの手順

プロジェクトをローカルに設定するには、次の手順に従ってください。

1.レポジトリのクローンを作成する

```bash
   git clone --filter=blob:none --no-checkout https://github.com/Hiromi-k57/DWWM2025.git todolist
   cd todolist
   git sparse-checkout init --no-cone
   git sparse-checkout set "todoList/" "todoList/*"
   git checkout
   ```

2.``.env`` ファイルを作成し、DB_USER, DB_PASSWORD, DB_NAME を追加してください。

例:

```env
DB_USER=test
DB_PASSWORD=test
DB_NAME=to_do_list
```

3.Dockerを起動

``docker compose up -d --build``

4.環境カスタマイズ

- Port番号は compose.yaml の ports で変更可能（例: "8080:80" → "9090:80"）。

- タイムゾーンは compose.yaml の mysql: environment - TZ で変更可能（既定: Europe/Paris）。

- DB接続は `.env` で設定（``DB_USER, DB_PASSWORD, DB_NAME, DB_HOST``）。

5.アプリケーションを実行

phpMyAdminにアクセスし、app/_database/``to_do_list0905.sql`` をインポートしてデータベース ``to_do_list`` を作成します。

アプリ:  [http://localhost:8080/signup](http://localhost:8080/signup)

phpMyAdmin: [http://localhost:8081/](http://localhost:8081/)
  (`.env`のユーザー名とパスワードでログイン)

## カスタマイズ

スタイルを更新するには ``signup.css``, ``style.css`` を編集してください。

## 今後改善する機能

- 登録タスクの編集機能
- パスワード再設定

## 今後の改善（実装予定）

- 現在ブルートフォース対策はセッションで行っていますが、これはクッキーを削除したり、ブラウザを変えたり、プライベートブラウジングを使うと回避されてしまいます。より安全にするためには、ブルートフォース対策をデータベースに追加する必要があります。

## ライセンス

### 使用イラスト

- time.gif (Pixabay)
- check.jpg (Freep!k)

### 使用フォント

- Acme-Regular.ttf
- arial.ttf
- BlakaHollow-Regular.ttf
- typewriter.ttf
