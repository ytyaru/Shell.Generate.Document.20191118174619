//function getIconDir() { return "./src/00_denv/01_md/00_icon"; }
//function getIconDir() { return "//src/00_denv/01_md/00_icon"; }
function getIconDir() { return "/src/00_denv/01_md/00_icon"; } // ドメインからの相対パス短縮記法
function getIconPath(id) { return getIconDir() + "/" + id.toLowerCase() + ".svg"; } 
//function getIconPath(id) { return getHomeDir(id.toLowerCase() + ".svg"); } 
/*
// https://qiita.com/richmikan@github/items/f6546c1cb913c78a6338
function getHomeDir(this_filename) {
  // --- 自分自身に関する情報の設定(自分の位置を検出するために必要) --
//  var sThis_filename    = 'relocatable.js'; // 自分が置かれているファイルの名前(*1)
  var sThis_filename    = this_filename;
  var sPath_to_the_home = '..';             // ↑自身からホームdirへの相対パス
  // --- その他変数定義 ----------------------------------------------
  var i, s, le; // 汎用変数
  var sUrl = null; // 戻り文字列格納用
  // --- 自JavaScriptを読んでいるタグを探し、homedir(相対の場合あり)を生成
  le = document.getElementsByTagName('script');
  for (i=0; i<le.length; i++) {
    s = le[i].getAttribute('src');
    if (s.length < sThis_filename.length) {continue;}
    if (s.substr(s.length-sThis_filename.length) !== sThis_filename) {continue;}
    s = s.substr(0,s.length-sThis_filename.length);
    if ((s.length>0) && s.match(/[^\/]$/)) {continue;}
    sUrl = s + sPath_to_the_home;
    sUrl = (sUrl.match(/\/$/)) ? sUrl : sUrl+'/';
    break;
  }
  // タグが見つからなかったらnullを返して終了
  if (i >= le.length) { return null; }

  // --- 絶対パス化(.や..は含む) -------------------------------------
  if (     sUrl.match(/^http/i)) {
    // httpから始まるURLになっていたらそのままでよい
  }
  else if (sUrl.match(/^\//)   ) {
    // httpから始まらないが絶対パスになっている場合はhttp～ドメイン名までを先頭に付ける
    if (! location.href.match(/^(https?:\/\/[a-z0-9.-]+)/i)) {return null;}
    sUrl = RegExp.$1 + sUrl;
  }
  else                           {
    // 相対パスになっている場合は呼び出し元URLのディレクトリまでの部分を先頭に付ける
    sUrl = location.href.replace(/\?.*$/,'').replace(/\/[^\/]*$/, '/') + sUrl;
  }

  // --- カレントディレクトリ表記(.)を除去 ---------------------------
  while (sUrl.match(/\/\.\//)) {
    sUrl = sUrl.replace(/\/\.\//g, '/');
  }

  // --- 親ディレクトリ表記(..)を除去 --------------------------------
  sUrl.match(/^(https?:\/\/[A-Za-z0-9.-]+)(\/.*)$/);
  s    = RegExp.$1;
  sUrl = RegExp.$2;
  while (sUrl.match(/\/\.\.\//)) {
    while (sUrl.match(/^\/\.\.\//)) {
      sUrl = sUrl.replace(/^\/\.\.\//, '/');
    }
    sUrl = sUrl.replace(/^\/\.\.$/, '/');
    while (sUrl.match(/\/[^\/]+\/\.\.\//)) {
      sUrl = sUrl.replace(/\/[^\/]+\/\.\.\//, '/');
    }
  }
  sUrl = s + sUrl;

  // --- 正常終了 ----------------------------------------------------
  return sUrl;
}
*/
