// ==UserScript==
// @name         Just Develop When You Visit Web Site
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Visit web sites and encourage development
// @author       Your name
// @match        https://www.amazon.co.jp/*
// @match        https://tver.jp/*
// @match        https://abema.tv/*
// @match        https://www.youtube.com/*
// @match        https://x.com/*
// @match        https://gigazine.net/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // 開発を促すメッセージ
    const messages = [
        "開発の時間です！",
        "コードを書きましょう！",
        "新しい機能を実装しましょう！",
        "バグを修正しましょう！",
        "リファクタリングの時間です！"
    ];

    // ランダムなメッセージを取得
    function getRandomMessage() {
        return messages[Math.floor(Math.random() * messages.length)];
    }

    // 通知を表示
    function showNotification() {
        const notification = document.createElement('div');
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
        `;
        notification.textContent = getRandomMessage();

        // クリックでCursorを開く
        notification.addEventListener('click', () => {
            window.open('cursor://');
        });

        document.body.appendChild(notification);

        // 5秒後に通知を消す
        setTimeout(() => {
            notification.style.opacity = '0';
            notification.style.transition = 'opacity 0.5s';
            setTimeout(() => notification.remove(), 500);
        }, 5000);
    }

    // ページ読み込み完了時に通知を表示
    window.addEventListener('load', () => {
        setTimeout(showNotification, 2000);
    });
})();
