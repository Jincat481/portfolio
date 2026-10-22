"use strict";
(() => {
  const definitions = {
    264:{type:'linear',labels:['거리·방향·상태\n장애물 검사','시퀀스 선택\n캐릭터 연결','처형 배치\n시퀀스 재생','종료 후 상태·이동\n카메라 잠금 복원']},
    265:{type:'linear',labels:['기본 후보 확인','막히면 다른 각도\n후보 검사','주변 안전 후보\n재배치','모두 실패 시\n플레이어 기준 유지']},
    267:{type:'ladder',labels:['구간 끝 계산\n사이클 길이로 제한','현재보다\n뒤인가?','사이클 시작 + 구간 끝\n이동 종료점 반환','경계까지 몽타주 재생\n정지 포즈 유지','해당 구간 제외']},
    299:{type:'linear',labels:['사다리 메시 선택','상·하단 바닥\n높이 탐색','25cm 구간\n자동 조립','진입점·콜리전\n일괄 적용']},
    292:{type:'linear',labels:['카메라와 캐릭터\n거리 확인','시작·완전 숨김\n거리로 값 계산','FadeAmount 0~1\n메시마다 전달','0: 원래 머티리얼\n1: 완전 숨김']},
    294:{type:'linear',labels:['FadeAmount 전달','기존 알파 ×\n디더 마스크','표시 비율 제어\n경계 상태 복구']},
    295:{type:'linear',labels:['카메라–캐릭터 사이\n장애물 탐색','이미 처리한\n대상 제외','가림 물체에\n페이드 적용','뒤쪽 가림 물체\n추가 탐색']},
    296:{type:'linear',labels:['원본 트레이스 분석','반복 재진입 확인','제한 범위\n최적화 실험','동일 조건\n전후 비교']},
    297:{type:'linear',labels:['프롬프트 입력\n모션 생성','NPZ·JSON 보관\nFBX 변환','리타깃 자산\n자동 설정','완성 클립\n언리얼 재생']},
    298:{type:'linear',labels:['축·기준 포즈 확인','소스 포즈 재구성','엔진 IK 리타깃','FBX·라이브\n출력 비교']},
    274:{type:'pool',labels:['생성 요청','비활성 객체가\n있는가?','기존 객체\n가져오기','새 인스턴스\n생성','상태 복원 · 활성화']}
  };
  const mountedCharts = new WeakMap();
  const sourceFlows = new Map();
  let chartSequence = 0;
  let flowDialog = null;
  let returnFocus = null;
  let returnScroll = {left:0,top:0};
  const Escape = (Value) => String(Value ?? '').replace(/[&<>"']/g, Character => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[Character]));

  function ModelFor(Flow, SlideId) {
    return definitions[SlideId] || {type:'linear',labels:Flow.alt.split(' → ')};
  }

  function EdgesFor(Model) {
    if (Model.type === 'ladder') return [[0,1],[1,2,'예'],[2,3],[1,4,'아니요']];
    if (Model.type === 'pool') return [[0,1],[1,2,'예'],[1,3,'아니요'],[2,4],[3,4]];
    return Model.labels.slice(1).map((Label, Index) => [Index,Index+1]);
  }

  function Render(Flow, SlideId, Expanded = false) {
    const model = ModelFor(Flow, SlideId);
    sourceFlows.set(String(SlideId), Flow);
    const chartId = `flow-${SlideId}-${++chartSequence}`;
    const nodes = model.labels.map((Label, Index) => {
      const decision = model.type !== 'linear' && Index === 1;
      return `<li class="flow-node${decision ? ' flow-node-decision' : ''}" data-flow-node="${Index}"><div class="flow-node-surface">${decision ? '<svg class="flow-diamond" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true"><polygon points="50,1 99,50 50,99 1,50"/></svg>' : ''}<span>${Escape(Label).replace(/\n/g,'<br>')}</span></div></li>`;
    }).join('');
    const connections = EdgesFor(model).map(Edge => `<li>${Escape(model.labels[Edge[0]].replace(/\n/g,' '))}${Edge[2] ? `: ${Escape(Edge[2])}` : ''} → ${Escape(model.labels[Edge[1]].replace(/\n/g,' '))}</li>`).join('');
    return `<figure class="web-flow${Flow.large ? ' web-flow-main' : ''}"><figcaption class="web-flow-heading"><span id="${chartId}-title">처리 흐름</span>${Expanded ? '' : `<button type="button" data-flow-expand="${SlideId}" aria-haspopup="dialog">크게 보기 ↗</button>`}</figcaption><div class="flow-chart" data-flow-id="${SlideId}" data-flow-kind="${model.type}" data-flow-mode="wide" role="group" aria-labelledby="${chartId}-title"><svg class="flow-connectors" aria-hidden="true"><defs><marker id="${chartId}-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M 0 0 L 10 5 L 0 10 Z"/></marker></defs><g class="flow-paths" data-marker="${chartId}-arrow"></g></svg><ol class="flow-nodes">${nodes}</ol><ul class="flow-accessible">${connections}</ul></div></figure>`;
  }

  function PlaceNodes(Chart, Model, Mode) {
    const nodes = [...Chart.querySelectorAll('.flow-node')];
    if (Model.type === 'linear') {
      const columns = Mode === 'wide' ? nodes.length : Mode === 'medium' && nodes.length > 3 ? 2 : 1;
      Chart.style.setProperty('--flow-columns', columns);
      nodes.forEach((Node, Index) => {
        const row = Math.floor(Index / columns);
        const column = row % 2 === 1 ? columns - (Index % columns) : Index % columns + 1;
        Node.style.gridRow = String(row + 1);
        Node.style.gridColumn = String(column);
      });
      return;
    }
    Chart.style.setProperty('--flow-columns', Model.type === 'ladder' && Mode === 'wide' ? 4 : 2);
    const positions = Model.type === 'pool'
      ? [[1,'1 / -1'],[2,'1 / -1'],[3,'1'],[3,'2'],[4,'1 / -1']]
      : Mode === 'wide'
        ? [[1,'1'],[1,'2'],[1,'3'],[1,'4'],[2,'2']]
        : [[1,'1'],[1,'2'],[2,'2'],[3,'2'],[2,'1']];
    nodes.forEach((Node, Index) => {
      Node.style.gridRow = String(positions[Index][0]);
      Node.style.gridColumn = positions[Index][1];
    });
  }

  function Connector(From, To) {
    const sameRow = Math.abs(From.cy - To.cy) < 2;
    if (sameRow) {
      const forward = To.cx > From.cx;
      const startX = forward ? From.right + 1 : From.left - 1;
      const endX = forward ? To.left - 5 : To.right + 5;
      return {path:`M ${startX} ${From.cy} L ${endX} ${To.cy}`,labelX:(startX+endX)/2,labelY:From.cy-13};
    }
    const startX = From.cx;
    const endX = To.cx;
    const startY = From.bottom + 1;
    const endY = To.top - 5;
    const middleY = (startY + endY) / 2;
    if (Math.abs(startX-endX) < 2) return {path:`M ${startX} ${startY} L ${endX} ${endY}`,labelX:startX+16,labelY:middleY,vertical:true};
    return {path:`M ${startX} ${startY} L ${startX} ${middleY} L ${endX} ${middleY} L ${endX} ${endY}`,labelX:(startX+endX)/2,labelY:middleY-12};
  }

  function Draw(Chart) {
    if (!Chart.isConnected || Chart.clientWidth < 1) return;
    const flow = sourceFlows.get(Chart.dataset.flowId);
    const model = ModelFor(flow, Chart.dataset.flowId);
    const mode = Chart.clientWidth >= 680 ? 'wide' : Chart.clientWidth >= 480 ? 'medium' : 'narrow';
    Chart.dataset.flowMode = mode;
    PlaceNodes(Chart, model, mode);
    const bounds = Chart.getBoundingClientRect();
    const nodes = [...Chart.querySelectorAll('.flow-node-surface')].map(Node => {
      const rect = Node.getBoundingClientRect();
      return {left:rect.left-bounds.left,right:rect.right-bounds.left,top:rect.top-bounds.top,bottom:rect.bottom-bounds.top,cx:rect.left-bounds.left+rect.width/2,cy:rect.top-bounds.top+rect.height/2};
    });
    const svg = Chart.querySelector('.flow-connectors');
    svg.setAttribute('viewBox',`0 0 ${bounds.width} ${bounds.height}`);
    const paths = svg.querySelector('.flow-paths');
    const marker = paths.dataset.marker;
    paths.innerHTML = EdgesFor(model).map(Edge => {
      const connector = Connector(nodes[Edge[0]], nodes[Edge[1]]);
      const label = Edge[2];
      let text = '';
      if (label) {
        const width = label.length * 16 + 12;
        const x = connector.vertical ? connector.labelX+width/2 : connector.labelX;
        text = `<g class="flow-edge-label"><rect x="${x-width/2}" y="${connector.labelY-12}" width="${width}" height="24" rx="3"/><text x="${x}" y="${connector.labelY}" dominant-baseline="central" text-anchor="middle">${Escape(label)}</text></g>`;
      }
      return `<path class="flow-edge" d="${connector.path}" marker-end="url(#${marker})"/>${text}`;
    }).join('');
  }

  function Mount(Root = document) {
    Root.querySelectorAll('.flow-chart').forEach(Chart => {
      if (mountedCharts.has(Chart)) return;
      let pending = false;
      const observer = new ResizeObserver(() => {
        if (pending) return;
        pending = true;
        requestAnimationFrame(() => {pending = false; Draw(Chart);});
      });
      mountedCharts.set(Chart, observer);
      observer.observe(Chart);
      Draw(Chart);
    });
  }

  function Unmount(Root) {
    Root.querySelectorAll('.flow-chart').forEach(Chart => {
      mountedCharts.get(Chart)?.disconnect();
      mountedCharts.delete(Chart);
    });
  }

  function Open(SlideId, Trigger) {
    if (!flowDialog) {
      flowDialog = document.createElement('dialog');
      flowDialog.className = 'flow-dialog';
      flowDialog.setAttribute('aria-labelledby','flow-dialog-title');
      flowDialog.innerHTML = '<div class="flow-dialog-header"><h2 id="flow-dialog-title">처리 흐름</h2><button type="button" class="icon-button" aria-label="흐름도 닫기">×</button></div><div class="flow-dialog-content"></div>';
      document.body.append(flowDialog);
      flowDialog.querySelector('button').addEventListener('click',() => flowDialog.close());
      flowDialog.addEventListener('click',Event => {if (Event.target === flowDialog) flowDialog.close();});
      flowDialog.addEventListener('close',() => {
        Unmount(flowDialog);
        flowDialog.querySelector('.flow-dialog-content').replaceChildren();
        document.body.classList.remove('zoom-open');
        requestAnimationFrame(() => {
          window.scrollTo({...returnScroll,behavior:'instant'});
          returnFocus?.focus({preventScroll:true});
        });
      });
    }
    const source = sourceFlows.get(String(SlideId));
    if (!source) return;
    returnFocus = Trigger;
    returnScroll = {left:window.scrollX,top:window.scrollY};
    const content = flowDialog.querySelector('.flow-dialog-content');
    Unmount(content);
    content.innerHTML = Render(source, SlideId, true);
    flowDialog.showModal();
    document.body.classList.add('zoom-open');
    Mount(content);
  }

  document.addEventListener('click',Event => {
    const button = Event.target.closest('[data-flow-expand]');
    if (button) Open(button.dataset.flowExpand, button);
  });
  document.fonts.ready.then(() => document.querySelectorAll('.flow-chart').forEach(Draw));
  window.portfolioFlowcharts = {Render,Mount};
})();
