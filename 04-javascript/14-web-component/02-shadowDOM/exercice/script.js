/* 
    課題 1：Shadow DOM のみ — 天気ウィジェット（Custom Element は使わない）

    目的：
    Shadow DOM を使って、カプセル化された UI（ユーザーインターフェース）を作成する。カスタム要素（Custom Element）は使わない。

    ユーザー説明：
    Shadow DOM のみを使用して、天気ウィジェットを作成してください。スタイルは完全に隔離（他と混ざらない）されている必要があります。

    技術的な条件：
    - createWeatherWidget(data) という JavaScript 関数を作成する。
    - その関数は Shadow DOM を持つ HTML 要素を返す。
    - その返された要素を body に挿入する。
    - DOM 内にスタイル、アイコン、気温、都市名を含める。

    例として、data は以下のような形になります：
        { 
        city: 'Paris', 
        temp: 18, 
        icon: 'cheminVersIcon.jpg' 
        }

    改良点（オプション）：
    - 実際の天気を取得するために、天気APIを fetch する。
    - 天気に合わせたアニメーションを追加する。
*/


"use strict";

import { createWeatherWidget } from './SuperBalise.js';

async function main() { //非同期で処理を行う関数
  // Open Meteo APIから天気情報を取得する
  const res = await fetch('https://api.open-meteo.com/v1/forecast?latitude=48.85&longitude=2.35&current=temperature_2m,weathercode&timezone=auto');
  //サーバーから送られてきたJSON形式のデータを、完了するまで待って、変換された JS オブジェクトを取得,JSONデータを data 変数に格納する
  const data = await res.json();

  const widgetData = {
    city: 'Paris',
    temp: data.current.temperature_2m, //現在の気温（2m 高さ）を表す数値
    icon: getIcon(data.current.weathercode) //現在の天気コードを表す数値
  };

  const widget = createWeatherWidget(widgetData);
  document.body.appendChild(widget);
}

function getIcon(code) { //天気コードに基づいてアイコンを取得する関数
  if (code === 0) return '☀️';
  if (code <= 3) return '⛅';
  if (code >= 45 && code <= 48) return '🌫️';
  if (code >= 51 && code <= 67) return '🌧️';
  if (code >= 71 && code <= 77) return '❄️';
  if (code >= 80) return '⛈️';
  return '❓';
}

main();//非同期関数を実行する
