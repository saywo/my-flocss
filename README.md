## MindBEMding
blockName_elementName
-modifier
elementは入れ子にしてはいけない
elementの下の要素は、cssでは親と同階層のelemeent。htmlとcssの分離

エレメントは全て「ブロックのエレメント」として定義する。これができない場合、すでにそれは別のブロックなのではないかを疑う。

innerやwrapはelementとして扱う。
divはblock,elementどちらにもなりうる

## block
header, footer, main, article, section, aside, nav, div

## element
| クラス名<br>(BEM のクラス名) | 説明 | タグ要素 |
| --- | --- | --- |
| ttl<br>(block_ttl) | 見出しにつけるクラス名。| h, p |
|txt<br>(block_txt)|文章につけるクラス名|p|
|btn<br>(block_btn)|ボタンにつけるクラス名|p, a, button, span|
|link<br>(block_link)|リンクテキストにつけるクラス名|a|
|pic<br>(block_pic)|画像（figture 要素）につけるクラス名|figture|
|img<br>(block_img)|画像（img 要素）につけるクラス名|img|
|list<br>(block_list)|リスト要素につけるクラス名|ul, ol|
|list-item<br>(block_item) |li 要素につけるクラス名|li|
|table<br>(block_table)|table 要素につけるクラス名|table|
|table-row<br>(block_tr)|tr 要素につけるクラス名|tr|
|table-head<br>(block_th)|th 要素につけるクラス名 |th|
|table-data<br>(block_td)|td 要素につけるクラス名|td|
|def<br>(block_dl)|dl 要素につけるクラス名|dl|
|def-tit<br>(block_dt)|dt 要素につけるクラス名|dt|
|def-data<br>(block_dd)|dd 要素につけるクラス名|dd|
|form<br>(block_form)|form 要素につけるクラス名|form|
|select<br>(block_select)|select 要素につけるクラス名|select|
|input<br>(block_input)|input 要素につけるクラス名|input|
|textarea<br>(block_textarea)|textarea 要素につけるクラス名|textarea|
|inner<br>(block_inner)|インナーにつけるクラス名|div|
|icon<br>(block_icon)|アイコンにつけるクラス名|span|
|mark<br>(block_mark)|マークにつけるクラス名|span|
|TD|TD|TD|
|TD|TD|TD|

## 悩みそうな箇所
* .nav_list
* .nav_item
* .nav_link
* .nav_txt
