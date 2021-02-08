## 0.ソースコード管理
git, githubで行う。  

さうなしのorganizationアカウントにprivateリポジトリ作る。  
過去の保守案件も適宜githubに移行。
https://github.com/saunashi-admin

## 1.ディレクトリ構造
### 1-1.公開フォルダ これはいじらない！
```
dist/
  assets/
    css/...
    img/...
    js/...
    meta/... ファビコンなど
  page/...
  index.html
wp_theme
  assets/...
  index.php
  ※assetsへのアクセスは関数 img
   homeURLにするなら関数に
```
### 1-2.開発フォルダ
```
src/    
  img/...
  scss/...
  js/...
    main.js→エントリーのみ、基本import
    ※どこまで分けるかは要検討
  meta/... ファビコンなど→distにコピーする
　(pug/...) pugを使わない場合はフォルダ名をhtml,phpなどにしてdistにコピーする
```

## 2.タスクランナー
npm-scriptsでもwebpackでもgulpでもなんでもいいです。  
以下のタスクは行いましょう  
* Browsersync等によるローカルサーバーの起動
* 画像圧縮
* scssのコンパイル
* jsのバンドル（webpack）
* jsのトランスパイル（babel）
* css,jsファイルのminify

### 2-1.導入を検討中
* stylelint
* eslint
* prettier
* husky, lint-stagedによるcommit時のlint, format
 
## 3scss

### 3-1.css設計
2020年はBEM的なので統一していたが、拡張性に難があったため2021年1月からFLOCSSを導入  
クラスの命名時に迷った時は周りに確認。

- 接頭辞のルールはFLOCSSを遵守する(l-,p-,c-,u-)
- 同じデザインが3つ以上でてきたらcomponentにする(2つまではproject)
- インナーはelementとして定義する（p-sectionName_inner）
- ブロック分けはキャメルケース1個までとする。（× p-sectionNameName）
- tr,th,td,dl,dt,ddはクラス無しでもOK。
- JSを当てる記述はjs-接頭辞をつける。
- 命名時略さない(txt→text,ttl→title)
- Sassのmixinをキャメルケースにする。
    
### 3-2.メディアクエリ
```
  $breakpoints: (
    'xs': 'screen and (max-width: 480px)',
    'sm': 'screen and (max-width: 768px)',
    'md': 'screen and (max-width: 1024px)',
    'lg': 'screen and (min-width: 1025px)',
    'xl': 'screen and (min-width: 1280px)',
    'se': 'screen and (max-width: 320px)',
    "ie":
    "screen and (-ms-high-contrast: active), screen and (-ms-high-contrast: none)",
  ) !default;
  @mixin mq($breakpoint: tab) {
    @media #{map-get($breakpoints, $breakpoint)} {
      @content;
    }
  }
```
  
### 3-3.ヘルパークラス
全てのメディアクエリに対して作る
`.xs_show`,`.xs_hide`
  
### 3-4.mixin 
#### 3-4-1.注意点
- 命名はキャメルケース
- extendは基本書かない

#### 3-4-2.みんなで使うmixin
- mq
- aspectRatio
- lineHeight
- spのみhover
- absoluteで中央寄せ
    
### 3-4.reset
- bodyに`line-height`は書かない、_text.scssに書く。
- _reset.scssは末廣resetを使用する。
    
### 3-5.変数
#### 3-5-1.color
- 色は基本全て変数にする。
`color_red_01`
#### 3-5-2.font 
- `_font.scss` に設定、
	font-familyを変数に。$ff-フォント名
  
## 4.画像命名ルール
- 画像の名前 アンスコ統一 1枚しかなくても01つける
- spは `_sp`
```
  pagename/
    img_section_01.jpg
    thumb_section_01.jpg 小さめなやつ
    bg_　背景のレイヤー
    obj_ 背景のオブジェクト
    fig_section_01.jpg 図形、グラフ
		illust_ 
    kv.jpg
    kv_sp.jpg
    child/... 下層フォルダ
  common/
    logo.svg
    logo_header.svg
    icon_btn_arrow.svg
    icon_arrow.svg
    icon_arrow_blue.svg
    icon_sns_twitter.svg
    icon_sns_facebook.svg
    icon_sns_line.svg
    icon_header.svg
```
