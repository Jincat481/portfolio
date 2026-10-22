# 전진오 웹 포트폴리오

소개 → 프로젝트 → 연락처로 이어지는 정적 사이트입니다. 최신 PPT의 본문을 월하일검·건물 제작 도구·ARDY·DDD 네 카테고리로 나누어 처음부터 펼쳐 보여줍니다. 카테고리별 접기와 전체 접기·펼치기를 지원합니다.

공개 주소: https://jincat481.github.io/portfolio/

저장소: https://github.com/Jincat481/portfolio

## 로컬 확인

`index.html`을 브라우저에서 열면 됩니다. 외부 패키지나 빌드는 필요 없습니다. 프로젝트 상세의 직접 링크와 새 탭 열기는 HTTP 서버에서 확인하세요.

```powershell
python -m http.server 8765 --bind 127.0.0.1
```

http://127.0.0.1:8765/ 에 접속합니다.

## GitHub Pages 준비

1. 이 폴더 내용을 사용할 GitHub 저장소에 올립니다. 원본 PPT·GIF·로컬 `tools/`는 올리지 않습니다.
2. 저장소의 **Settings → Pages → Source → GitHub Actions**를 선택합니다.
3. `main` 브랜치에 올리면 포함된 워크플로가 정적 사이트를 배포합니다.
4. 현재 `Jincat481/portfolio` 저장소의 `main` 브랜치와 GitHub Pages가 연결되어 있습니다. 이후 웹 파일을 수정해 올리면 같은 공개 주소에 반영됩니다.

하위 경로에서도 동작하도록 모든 로컬 파일 주소는 상대 경로입니다. 서버·데이터베이스·로그인·추적 스크립트는 없습니다.

## 내용 수정

- `index.html`: 상단 소개, 메뉴, 기술 목록, 연락처
- `portfolio-data.js`: PPT 페이지 순서의 설명, 이미지·영상 링크, 카테고리 구성
- `style.css`: PC·모바일 배치
- `app.js`: 카테고리 접기·펼치기, 사진·플로우차트 확대 보기
- `assets/ppt/`: 현재 PPT에서 추출한 WebP 이미지·플로우차트와 MP4 영상
- `assets/stack/`: 기술 아이콘 SVG ([Devicon](https://devicon.dev/), MIT 라이선스)

영상은 웹 재생용 MP4로 변환했으며 자동 재생하지 않습니다. PPT에서 지정한 자르기와 표시 비율을 유지하고, 재생 전에는 포스터만 표시합니다. 카테고리를 접으면 해당 영상이 일시 정지됩니다. 기존 YouTube 링크도 별도로 남겼습니다.

PPT 추출 도구와 검토 기록은 로컬 `tools/` 안에만 보관하고 Git 및 배포 대상에서 제외합니다. 현재 PPT를 변경해도 웹 내용은 자동 갱신되지 않습니다.
