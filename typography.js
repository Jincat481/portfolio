"use strict";
(() => {
  const phrases = ['UI와 전투, 카메라 액션', '반복 작업을 줄이고', '수정과 확장이 쉬운 구조'];
  document.querySelectorAll('.intro-detail').forEach(Paragraph => {
    for (const phrase of phrases) {
      const walker = document.createTreeWalker(Paragraph, NodeFilter.SHOW_TEXT);
      let textNode;
      while ((textNode = walker.nextNode())) {
        const offset = textNode.textContent.indexOf(phrase);
        if (offset < 0) continue;
        const matchedNode = textNode.splitText(offset);
        matchedNode.splitText(phrase.length);
        const emphasis = document.createElement('strong');
        emphasis.className = 'intro-emphasis';
        matchedNode.replaceWith(emphasis);
        emphasis.append(matchedNode);
        break;
      }
    }
  });
  const resultPhrases = ['약 80% 단축','약 83% 단축','StateTree 14.46 → 2.88 ms','약 1.6%','OFF 8.09 ms → ON 3.43 ms'];
  document.querySelectorAll('.slide-note p,.slide-measurement').forEach(Paragraph => {
    for (const phrase of resultPhrases) {
      const walker = document.createTreeWalker(Paragraph, NodeFilter.SHOW_TEXT);
      let textNode;
      while ((textNode = walker.nextNode())) {
        const offset = textNode.textContent.indexOf(phrase);
        if (offset < 0) continue;
        const matchedNode = textNode.splitText(offset);
        matchedNode.splitText(phrase.length);
        const emphasis = document.createElement('strong');
        emphasis.className = 'result-emphasis';
        matchedNode.replaceWith(emphasis);
        const numberPattern = /\d+(?:\.\d+)?\s*(?:%|ms)?/g;
        let position = 0;
        for (const match of phrase.matchAll(numberPattern)) {
          emphasis.append(document.createTextNode(phrase.slice(position,match.index)));
          const value = document.createElement('span');
          value.className = 'result-value';
          value.textContent = match[0];
          emphasis.append(value);
          position = match.index + match[0].length;
        }
        emphasis.append(document.createTextNode(phrase.slice(position)));
        Paragraph.classList.add('result-copy');
        Paragraph.closest('.slide-note')?.classList.add('result-note');
        break;
      }
    }
  });
})();
