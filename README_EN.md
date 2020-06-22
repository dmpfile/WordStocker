# Word Stocker

Word Stocker is a Chrome Extention.
<img src='./public/book.png' width="20%" align="right">

I develop this extention to put together English words that selected in web page.  
You can be used instead of Clipboard.

# function

## Basic

- Save the text you selected in web page.
- If you selected the paragraph including half-width space, split it into word and then every word is saved per second.

## popup.html

- Popup.html shows a list of saved texts.
- Click the text in popup.html to set the clipboard.
- Double-click the text in popup.html to delete it from chrome storage.

## Buttons

- ON/OFF
  - Can select activating or deactivating word stocker.
- 表示(display)
  - Update lists in popup.html.
- 削除(delete)
  - Delete all saved texts.
- 出力(output)
  - Output the text/csv file.
  - Each words has Google Translate link in text/csv file.

# Get Started

1. Clone program  
   `git clone https://github.com/dmpfile/WordStocker.git`

2. Access to [Chrome Extention](chrome://extensions/)
3. Click **LOAD UNPACKED** and select the **dist** directory.

# Author

©️ Ryosuke Nakui
