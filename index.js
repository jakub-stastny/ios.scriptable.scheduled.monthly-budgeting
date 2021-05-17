const fm = FileManager.iCloud()
const base_dir = fm.joinPath(fm.documentsDirectory(), 'page')
const index_path = fm.joinPath(base_dir, 'page.html')
console.log(base_dir)

// We have to use the static function, since configured WebView
// instance is not supported from within Shortcuts.
//
// For that reason we cannot just loadHTML() from string and
// neither can we use evaluateJavaScript().
WebView.loadFile(index_path)
