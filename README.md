# Word Stocker

Word Stocker は Chrome 拡張です。
<img src='./public/book.png' width="20%" align="right">

Web ページで範囲選択した英単語を後で見る為に作成しました。  
クリップボード代わりとしても使えます。

# 機能

- Web ページで範囲選択したテキストを保存します。
- 半角スペースを含む文章を選択すると、1 単語/秒で保存されます。

## popup.html

- 保存したテキストの一覧を表示します。
- テキストをクリックするとクリップボードに格納されます。
- テキストをダブルクリックすると Chrome Storage から削除されます。

## ボタン

- ON/OFF
  - 拡張機能の有効・無効を指定します。
- 表示
  - リストが更新されます。
- 削除
  - 保存されているテキスト全件削除します。
- 出力
  - csv ファイルが出力されます。
  - Google 翻訳のリンクを生成するようにしています。

# インストール方法

1. Git からクローンしてください。  
   `git clone https://github.com/dmpfile/WordStocker.git`

2. [Chrome Extention](chrome://extensions/)にアクセスしてください。
3. **パッケージ化されていない拡張機能を読み込む**をクリックして、**dist**フォルダを選択してくだい。

# 著者

©️ Ryosuke Nakui
