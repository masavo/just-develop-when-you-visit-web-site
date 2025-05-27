// ==UserScript==
// @name         Just Develop When You Visit Web Site
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Visit web sites and encourage development
// @author       masavo
// @match        https://www.amazon.co.jp/*
// @match        https://tver.jp/*
// @match        https://abema.tv/*
// @match        https://www.youtube.com/*
// @match        https://x.com/*
// @match        https://gigazine.net/*
// @grant        none
// ==/UserScript==

(function () {
  "use strict";

  // 開発を促すメッセージ
  const messages = [
    "開発の時間です！",
    "コードを書きましょう！",
    "新しい機能を実装しましょう！",
    "バグを修正しましょう！",
    "リファクタリングの時間です！",
    "テストを書きましょう！",
    "ドキュメントを更新しましょう！",
    "コードレビューをしましょう！",
    "パフォーマンスを改善しましょう！",
    "セキュリティを強化しましょう！",
  ];

  // ランダムなメッセージを取得
  function getRandomMessage() {
    return messages[Math.floor(Math.random() * messages.length)];
  }

  // 通知を表示
  function showNotification() {
    const notification = document.createElement("div");
    notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background-color: #4CAF50;
            color: white;
            padding: 15px 25px;
            border-radius: 5px;
            z-index: 10000;
            font-family: Arial, sans-serif;
            box-shadow: 0 2px 5px rgba(0,0,0,0.2);
            cursor: pointer;
            transition: all 0.3s ease;
            transform: translateX(0);
            opacity: 1;
        `;
    notification.textContent = getRandomMessage();

    // ホバー効果
    notification.addEventListener("mouseover", () => {
      notification.style.transform = "translateX(-5px)";
      notification.style.backgroundColor = "#45a049";
    });
    notification.addEventListener("mouseout", () => {
      notification.style.transform = "translateX(0)";
      notification.style.backgroundColor = "#4CAF50";
    });

    // クリックでCursorを開く
    notification.addEventListener("click", () => {
      window.open("cursor://");
      notification.style.transform = "translateX(100px)";
      notification.style.opacity = "0";
    });

    document.body.appendChild(notification);

    // 5秒後に通知を消す
    setTimeout(() => {
      notification.style.transform = "translateX(100px)";
      notification.style.opacity = "0";
      setTimeout(() => notification.remove(), 500);
    }, 5000);
  }

  // ページ読み込み完了時に通知を表示
  window.addEventListener("load", () => {
    setTimeout(showNotification, 2000);
  });
})();
