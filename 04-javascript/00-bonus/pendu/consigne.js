/* 

Jeu du pendu
ハングマンゲームを開発する必要があります。ユーザーには秘密の単語の文字数が表示されます。
たとえば、4 文字の単語「----」の場合。
次に、文字を 1 つずつ選択して、単語全体を見つけ出そうとします。ユーザーは、どの文字がすでに使用されているかを知る必要があります。
単語の文字を見つけたら、その文字を表示しなければなりません。たとえば、「e」という文字を見つけたら、「e--e」と表示します。間違いが多すぎると（たとえば 6 回または 7 回）、ゲームに負けてしまいます。ユーザーは、自分の障害がどこにあるのかを知らされる必要があります。ゲームの名前は、失敗するたびに少しずつ描かれ、最終的に完全に描かれる絞首台に置かれた棒人間の表現にリンクされているため、このテーマをそのままにすることも、変更することもできます。

パート1
HTML 側では次の操作を行う必要があります: エラーの数を表示します。 (最初はシンプルにしておいてください。数字は 1 つで十分です。) 見つかった文字を表示します。選択可能な文字を表示します。

CSS 側: デザインは自由ですが、レスポンシブなものを作成するようにしてください。
JS 側: 絞首刑にされた男を表す単語を推測する必要があります。変数内の 1 つの単語から始めます。単語に含まれる文字数をユーザーに表示する必要があります。すべてのボタンがクリックに反応する必要があります。
コンソール ログをいくつか実行して、ボタンに対応する文字を取得できるかどうかを確認します。ボタンの文字を取得したら、その文字が単語に含まれているかどうかを確認する必要があります。

はいの場合は、単語内のどこにその単語があるのか​​をユーザーに示す必要があります。 (単語をうまく表示できたら、単語によっては同じ文字が複数回含まれる場合があることを覚えておく必要があります。)
いいえの場合、ユーザーには間違いがあり終了が近づいていることが通知されます。ユーザーがすべての文字を見つけると、勝利したことが通知されます。最大ターン数に達した場合は、負けたことを伝えなければなりません。

パート2
単一の単語を複数の単語を含む配列に置き換え、ランダムに 1 つを選択します。失敗カウンターを、失敗ごとに変化する描画またはアニメーションに置き換えます。ユーザーがキーボードのキーを押して文字を検証できるようにします。すでに使用された文字を再度選択できないようにすれば、ユーザーにとっては便利です。負けたときも勝ったときも、その単語が何だったかを表示します。
ページを手動でリロードしなくても、プレーヤーがゲームを再開できるようにします。

パート3
単語テーブルを JSON ファイルのクエリに置き換えます (独自のものを作成することも、「words.json」を使用することもできます)。ゲームの最後に単語が表示されたら、クリックしてその単語の Google 検索にリダイレクトされるようにすると良いでしょう。ゲームの開始時に難易度の選択肢を追加し、簡単モードでは単語の最初の文字を表示することもできます。

パート4
2 番目の JSON ファイル (themes.json) を使用します。その構造はより複雑なので、次の操作を行う必要があります: ランダムなテーマとランダムな文字を選択します。
ランダムな単語。
このリストには多くの単語が含まれているため、選択した単語にボタンに対応する文字だけが含まれていることを確認する必要があります。 (選択した単語に文字「â」または「-」が含まれているが、ボタンがそれをサポートしていない場合は、単語検索を再開するか、これらの文字をユーザーに提供するか、これらの文字がサポートされるようにキーを調整するかのいずれかを選択する必要があります。)

このリストには、一部のテーマの単語のない文字も含まれているため、コードでこの可能性を処理するように注意してください。 選択した単語に対応するテーマを表示します。単語テーマを非表示にする難しい難易度モードを追加します。



*/