window.portfolioData = {
  "categories": [
    {
      "id": "moonlight",
      "title": "월하일검",
      "subtitle": "잠입 액션 게임 · 전투·파쿠르·카메라·플레이어 액션",
      "pages": [
        {
          "page": 2,
          "slideId": 258,
          "title": "월하일검",
          "rows": [
            {
              "heading": "개발 기간",
              "body": "2026.03 ~ 2026.11\n8개월"
            },
            {
              "heading": "개발 인원",
              "body": "총 6명, 기획 4명 · 프로그래밍 2명"
            },
            {
              "heading": "개발 환경",
              "body": "Unreal Engine, C++ · Blueprint"
            },
            {
              "heading": "담당 업무",
              "body": "전투\n파쿠르 \n카메라 액션\n플레이어 액션"
            }
          ],
          "images": [
            {
              "src": "assets/ppt/slide258-image8.webp",
              "width": 1431,
              "height": 816,
              "aspect": 1.753425,
              "label": "",
              "alt": "월하일검",
              "video": "assets/ppt/slide258-video8.mp4"
            }
          ],
          "links": [
            "https://youtu.be/dlEksnzpNKM"
          ],
          "flow": null,
          "extra": []
        },
        {
          "page": 3,
          "slideId": 259,
          "title": "월하일검 · 담당 구현 범위",
          "rows": [
            {
              "heading": "전투",
              "body": "처형, 무기 트레이스·피격 판정, 넉백\n패링·가드·스턴 상태 연결\n전투 효과와 발소리"
            },
            {
              "heading": "파쿠르와 카메라 액션",
              "body": "파쿠르·사다리·락온\n카메라 추적과 충돌\n오브젝트 가림·플레이어 근접 페이드"
            },
            {
              "heading": "능력과 플레이어 액션",
              "body": "발각도·은신, 포션·대시·웅크리기\n상호작용 대상 선택과 안내 UI·입력\n무기 납도·발도"
            }
          ],
          "images": [],
          "links": [],
          "flow": null,
          "extra": [],
          "scope": true
        },
        {
          "page": 4,
          "slideId": 264,
          "title": "대상 판정부터 처형 종료까지",
          "rows": [
            {
              "heading": "대상 판정",
              "body": "거리 · 방향 · 상태 · 장애물 검사\n처형 가능한 대상 확인"
            },
            {
              "heading": "배치·재생",
              "body": "선택한 시퀀스와 실제 캐릭터 연결\n처형 위치와 재생 대상 설정"
            },
            {
              "heading": "종료·복원",
              "body": "처형 종료 후 상태와 입력 복원"
            }
          ],
          "images": [
            {
              "src": "assets/ppt/slide264-image17.webp",
              "width": 695,
              "height": 542,
              "aspect": 1.282565,
              "label": "배치·재생",
              "alt": "배치·재생",
              "video": "assets/ppt/slide264-video17.mp4"
            },
            {
              "src": "assets/ppt/slide264-image20.webp",
              "width": 695,
              "height": 542,
              "aspect": 1.282565,
              "label": "시퀀스",
              "alt": "시퀀스",
              "video": "assets/ppt/slide264-video20.mp4"
            }
          ],
          "links": [
            "https://youtu.be/3V3XkjqNfy8"
          ],
          "flow": {
            "src": "assets/ppt/slide264-flow.webp",
            "width": 1429,
            "height": 111,
            "alt": "거리·방향·상태 장애물 검사 → 시퀀스 선택 캐릭터 연결 → 처형 배치 시퀀스 재생 → 종료 후 상태 이동, 카메라 잠금 복원",
            "large": false
          },
          "extra": []
        },
        {
          "page": 5,
          "slideId": 265,
          "title": "처형 상황에 따른 배치 선택",
          "rows": [
            {
              "heading": "기본·회전 배치",
              "body": "장애물 없음: 기본 방향 선택\n기본 후보가 막힘: 다른 각도 선택"
            },
            {
              "heading": "주변 후보 재배치",
              "body": "후보 위치 조건에 따라 재배치\n몬스터 또는 두 캐릭터 위치 조정"
            },
            {
              "heading": "최종 강제 배치",
              "body": "안전 후보가 모두 실패한 경우\n원래 플레이어 기준점 유지"
            }
          ],
          "images": [
            {
              "src": "assets/ppt/slide265-image17.webp",
              "width": 695,
              "height": 375,
              "aspect": 1.856148,
              "label": "기본 배치",
              "alt": "기본 배치"
            },
            {
              "src": "assets/ppt/slide265-image20.webp",
              "width": 695,
              "height": 375,
              "aspect": 1.856148,
              "label": "회전 배치",
              "alt": "회전 배치"
            },
            {
              "src": "assets/ppt/slide265-image23.webp",
              "width": 695,
              "height": 375,
              "aspect": 1.856148,
              "label": "주변 재배치",
              "alt": "주변 재배치"
            }
          ],
          "links": [],
          "flow": {
            "src": "assets/ppt/slide265-flow.webp",
            "width": 1429,
            "height": 111,
            "alt": "기본 후보 확인 → 막히면 다른 각도 후보 검사 → 주변 안전 후보 재배치 → 모두 실패 시 플레이어 기준 유지",
            "large": false
          },
          "extra": []
        },
        {
          "page": 6,
          "slideId": 267,
          "title": "사다리 이동의 정지 경계 선택",
          "rows": [
            {
              "heading": "동작 구성",
              "body": "진입 → 반복 이동 → 상단 이동\n애니메이션 구간 단위로 이동 구성"
            },
            {
              "heading": "다음 경계 판정",
              "body": "구간 끝을 사이클 길이 이내로 제한\n현재 위치보다 뒤인 경계만 선택\n허용 오차를 더해 경계 비교"
            },
            {
              "heading": "이동 종료·포즈 유지",
              "body": "사이클 시작 + 구간 끝으로 종료점 설정\n해당 경계까지 몽타주 재생\n자동 Blend Out 제한으로 포즈 유지"
            }
          ],
          "images": [
            {
              "src": "assets/ppt/slide267-image17.webp",
              "width": 477,
              "height": 377,
              "aspect": 1.262963,
              "label": "진입",
              "alt": "진입"
            },
            {
              "src": "assets/ppt/slide267-image20.webp",
              "width": 477,
              "height": 377,
              "aspect": 1.262963,
              "label": "반복 이동",
              "alt": "반복 이동"
            },
            {
              "src": "assets/ppt/slide267-image23.webp",
              "width": 477,
              "height": 377,
              "aspect": 1.262963,
              "label": "상단 이동",
              "alt": "상단 이동"
            }
          ],
          "links": [
            "https://youtu.be/7o07m2XqvJQ"
          ],
          "flow": {
            "src": "assets/ppt/slide267-flow-v2.webp",
            "width": 1443,
            "height": 180,
            "alt": "구간 끝 계산 사이클 길이로 제한 → 현재보다 뒤인가? → 사이클 시작 + 구간 끝 이동 종료점 반환 → 경계까지 몽타주 재생 정지 포즈 유지 → 예 → 아니요 · 해당 구간 제외",
            "large": false
          },
          "extra": []
        },
        {
          "page": 7,
          "slideId": 301,
          "title": "사다리 IK 적용 시 자세 변형",
          "rows": [
            {
              "heading": "IK 적용 시 문제",
              "body": "이동해야 할 손발까지 목표에 고정\n팔다리 교차와 원본 동작 변형"
            },
            {
              "heading": "원인 확인",
              "body": "사지별 접촉 상태 구분 없이 IK 적용\n애니메이션 보폭과 이동 거리 불일치"
            },
            {
              "heading": "현재 적용 범위",
              "body": "사다리 손 IK 기본 비활성\n원본 애니메이션과 루트 모션 유지\n이동 종료 후 정지 자세 연결"
            }
          ],
          "images": [
            {
              "src": "assets/ppt/slide301-ik-problem.webp",
              "width": 954,
              "height": 564,
              "aspect": 1.6921052508968923,
              "label": "과거 적용 시험 · 이동 중 손발 고정",
              "alt": "과거 사다리 IK 시험에서 손발 고정으로 자세가 변형된 화면"
            }
          ],
          "links": [],
          "flow": null,
          "extra": [
            "당시 애니메이션·IK 설정에서 재현한 화면 · 2026.07\n현재 사다리는 손 IK를 기본 비활성으로 운용"
          ]
        },
        {
          "page": 8,
          "slideId": 299,
          "title": "사다리 자동 배치 툴",
          "rows": [
            {
              "heading": "작업 시간이 길었던 문제",
              "body": "사다리 길이 · 진입점 · 콜리전 위치를\n레벨 디자이너가 높이에 맞춰 \n콜리전 및 사다리 수동 조정"
            },
            {
              "heading": "배치 자동화",
              "body": "상·하단 바닥 높이 탐색\n25cm 구간 조립과 진입점 · 콜리전\n위치를 한 번에 적용"
            },
            {
              "heading": "자동화 툴에 따른 시간 단축",
              "body": "사다리 1개 배치\n수동 10분 내외 → 툴 2분 내외\n약 80% 단축"
            }
          ],
          "images": [
            {
              "src": "assets/ppt/slide299-image4.webp",
              "width": 695,
              "height": 521,
              "aspect": 1.333333,
              "label": "배치 설정 · Preview",
              "alt": "배치 설정 · Preview"
            },
            {
              "src": "assets/ppt/slide299-image16.webp",
              "width": 695,
              "height": 521,
              "aspect": 1.333333,
              "label": "자동 조립 · Apply",
              "alt": "자동 조립 · Apply"
            }
          ],
          "links": [
            "https://youtu.be/ImEcaClffQU"
          ],
          "flow": {
            "src": "assets/ppt/slide299-flow.webp",
            "width": 1429,
            "height": 111,
            "alt": "사다리 메시 선택 → 상·하단 바닥 높이 탐색 → 25cm 구간 자동 조립 → 진입점·콜리전 일괄 적용",
            "large": false
          },
          "extra": []
        },
        {
          "page": 9,
          "slideId": 292,
          "title": "플레이어 페이드",
          "rows": [
            {
              "heading": "근접 시야 확보",
              "body": "좁은 공간에서 캐릭터가 화면을 가림\n카메라 근접 시 몸체 페이드 적용"
            },
            {
              "heading": "거리 기반 제어",
              "body": "시작 거리와 완전 숨김 거리 사이\nFadeAmount를 0~1로 계산\n여러 메시에 같은 값 전달"
            },
            {
              "heading": "경계 상태 처리",
              "body": "0: 원래 머티리얼로 복귀\n1: 메시 완전 숨김\n중간 구간: 디더 마스크 사용"
            }
          ],
          "images": [
            {
              "src": "assets/ppt/slide292-image17.webp",
              "width": 695,
              "height": 694,
              "aspect": 1.0,
              "label": "적용 전",
              "alt": "적용 전"
            },
            {
              "src": "assets/ppt/slide292-image20.webp",
              "width": 695,
              "height": 694,
              "aspect": 1.0,
              "label": "적용 후",
              "alt": "적용 후"
            }
          ],
          "links": [
            "https://youtu.be/vuIYejyGsJw"
          ],
          "flow": {
            "src": "assets/ppt/slide292-flow.webp",
            "width": 1429,
            "height": 111,
            "alt": "카메라와 캐릭터 거리 확인 → 시작·완전 숨김 거리로 값 계산 → FadeAmount 0~1 메시마다 전달 → 0: 원래 머티리얼 1: 완전 숨김",
            "large": false
          },
          "extra": []
        },
        {
          "page": 10,
          "slideId": 293,
          "title": "정렬 문제와 비용을 고려한 디더 선택",
          "rows": [
            {
              "heading": "비교한 문제",
              "body": "Translucent로 머리를 흐리게 해도\n겹친 머리카드의 정렬 대응 필요"
            },
            {
              "heading": "대응 방법 검토",
              "body": "Sort Priority 조정으로 순서 대응\n시점이 바뀐 뒤의 겹침도 추가 검증"
            },
            {
              "heading": "선택한 방식",
              "body": "정렬 관리와 반투명 비용을 고려해\nMasked + 디더로 전환 방식 선택"
            }
          ],
          "images": [
            {
              "src": "assets/ppt/slide293-image8.webp",
              "width": 623,
              "height": 467,
              "aspect": 1.333333,
              "label": "Masked + 디더",
              "alt": "Masked + 디더"
            },
            {
              "src": "assets/ppt/slide293-image11.webp",
              "width": 623,
              "height": 467,
              "aspect": 1.333333,
              "label": "Translucent",
              "alt": "Translucent"
            },
            {
              "src": "assets/ppt/slide293-image14.webp",
              "width": 623,
              "height": 467,
              "aspect": 1.333333,
              "label": "숨김",
              "alt": "숨김"
            }
          ],
          "links": [],
          "flow": null,
          "extra": []
        },
        {
          "page": 11,
          "slideId": 294,
          "title": "거리 변화에 맞춘 표시 비율 제어",
          "rows": [
            {
              "heading": "화면 가림",
              "body": "카메라가 캐릭터에 가까워질 때\n몸체와 머리가 전방 시야를 가림"
            },
            {
              "heading": "단계적 전환",
              "body": "거리 기준으로 FadeAmount 계산\n기존 알파에 디더 마스크 결합"
            },
            {
              "heading": "복구와 완전 숨김",
              "body": "중간 구간에서만 디더 재질 사용\n범위를 벗어나면 원래 재질로 복귀\n완전 페이드는 메시 숨김으로 처리"
            }
          ],
          "images": [
            {
              "src": "assets/ppt/slide294-image17.webp",
              "width": 455,
              "height": 455,
              "aspect": 1.0,
              "label": "FadeAmount 0",
              "alt": "FadeAmount 0"
            },
            {
              "src": "assets/ppt/slide294-image20.webp",
              "width": 455,
              "height": 455,
              "aspect": 1.0,
              "label": "FadeAmount 0.5",
              "alt": "FadeAmount 0.5"
            },
            {
              "src": "assets/ppt/slide294-image23.webp",
              "width": 455,
              "height": 455,
              "aspect": 1.0,
              "label": "FadeAmount 1",
              "alt": "FadeAmount 1"
            }
          ],
          "links": [],
          "flow": {
            "src": "assets/ppt/slide294-flow.webp",
            "width": 1409,
            "height": 111,
            "alt": "FadeAmount 전달 → 기존 알파 × 디더 마스크 → 표시 비율 제어 경계 상태 복구",
            "large": false
          },
          "extra": []
        },
        {
          "page": 12,
          "slideId": 295,
          "title": "오브젝트 페이드",
          "rows": [
            {
              "heading": "가림 물체 탐색",
              "body": "카메라와 캐릭터 사이 장애물 탐색\n겹쳐 있는 가림 물체까지 추가 검사"
            },
            {
              "heading": "페이드 적용 전",
              "body": "시야를 가리는 물체로 인해\n캐릭터와 전투 상황 확인 제한"
            },
            {
              "heading": "페이드 적용 후",
              "body": "가림 물체에 페이드 적용\n중복 처리 방지 · 최대 검사 횟수 제한"
            }
          ],
          "images": [
            {
              "src": "assets/ppt/slide295-image17.webp",
              "width": 695,
              "height": 649,
              "aspect": 1.069892,
              "label": "적용 전",
              "alt": "적용 전"
            },
            {
              "src": "assets/ppt/slide295-image20.webp",
              "width": 695,
              "height": 649,
              "aspect": 1.069892,
              "label": "적용 후",
              "alt": "적용 후"
            }
          ],
          "links": [
            "https://youtu.be/eEJtQI8Z8t8"
          ],
          "flow": {
            "src": "assets/ppt/slide295-flow.webp",
            "width": 1429,
            "height": 111,
            "alt": "카메라–캐릭터 사이 장애물 탐색 → 이미 처리한 대상 제외 → 가림 물체에 페이드 적용 → 뒤쪽 가림 물체 추가 탐색",
            "large": false
          },
          "extra": []
        },
        {
          "page": 13,
          "slideId": 296,
          "title": "최적화",
          "rows": [
            {
              "heading": "반복 진입 확인",
              "body": "한 틱 안에서 순찰 진입과\n이동 요청 실패가 연속 발생"
            },
            {
              "heading": "재진입 제한 실험",
              "body": "같은 프레임에 끝난 요청에만\n기본 0.1초 대기 적용\n목표·속도·경로 순서는 유지"
            },
            {
              "heading": "비용 변화 확인",
              "body": "StateTree 14.46 → 2.88 ms\n특정 레벨에서의 FPS 개선 약 1.6%"
            }
          ],
          "images": [
            {
              "src": "assets/ppt/slide296-image3.webp",
              "width": 695,
              "height": 694,
              "aspect": 1.0,
              "label": "Unreal Insights · 실험 전",
              "alt": "Unreal Insights · 실험 전"
            },
            {
              "src": "assets/ppt/slide296-image5.webp",
              "width": 695,
              "height": 694,
              "aspect": 1.0,
              "label": "Unreal Insights · 실험 후",
              "alt": "Unreal Insights · 실험 후"
            }
          ],
          "links": [],
          "flow": {
            "src": "assets/ppt/slide296-flow.webp",
            "width": 1429,
            "height": 111,
            "alt": "원본 트레이스 분석 → 반복 재진입 확인 → 제한 범위 최적화 실험 → 동일 조건 전후 비교",
            "large": false
          },
          "extra": []
        }
      ]
    },
    {
      "id": "mjbuilding",
      "title": "모듈식 건물 생성 툴",
      "subtitle": "에디터 툴 · 건물 생성·배치와 층별 평면도 편집",
      "pages": [
        {
          "page": 14,
          "slideId": 300,
          "title": "모듈식 건물 생성 툴",
          "rows": [
            {
              "heading": "반복 배치 문제",
              "body": "벽 · 바닥 · 계단을 모듈별로 배치\n층 연결·조명·아이템 지점 반복 설정"
            },
            {
              "heading": "생성·배치 자동화",
              "body": "크기 · 층수 · 시드로 평면 생성\n층 연결 후처리와 Unreal 배치 일괄 처리\n세부 구성은 생성 후 직접 편집"
            },
            {
              "heading": "시간 단축 예시",
              "body": "5 × 5칸 · 3층 · 수동 30분 → 툴 5분 가정\n약 83% 단축"
            }
          ],
          "images": [
            {
              "src": "assets/ppt/slide300-image8.webp",
              "width": 695,
              "height": 694,
              "aspect": 1.0,
              "label": "자동 생성 · 건물 외부",
              "alt": "자동 생성 · 건물 외부"
            },
            {
              "src": "assets/ppt/slide300-image11.webp",
              "width": 695,
              "height": 694,
              "aspect": 1.0,
              "label": "자동 배치 · 실내 구성",
              "alt": "자동 배치 · 실내 구성"
            }
          ],
          "links": [
            "https://github.com/Jincat481/MJBuilding"
          ],
          "flow": null,
          "extra": []
        },
        {
          "page": 15,
          "slideId": 282,
          "title": "층별 평면도 편집 후 Unreal에 적용",
          "rows": [
            {
              "heading": "공간 수정",
              "body": "벽·문·창문 전환\n계단 위치 이동 · 방향 회전"
            },
            {
              "heading": "배치 수정",
              "body": "조명·아이템 지점 추가·이동·삭제\n도달 불가 칸 표시 · 편집 취소"
            },
            {
              "heading": "에디터 반영",
              "body": "대상 건물 설정 불러오기\n편집 결과를 Unreal 액터에 적용"
            },
            {
              "heading": "코드 재사용성",
              "body": "게임 콘텐츠 의존성 0개\n독립 프로젝트 cold-load 확인"
            }
          ],
          "images": [
            {
              "src": "assets/ppt/slide282-image7.webp",
              "width": 1347,
              "height": 974,
              "aspect": 1.384103,
              "label": "",
              "alt": "층별 평면도 편집 후 Unreal에 적용"
            }
          ],
          "links": [],
          "flow": null,
          "extra": []
        }
      ]
    },
    {
      "id": "ardy",
      "title": "ARDY 애니메이션 생성 툴",
      "subtitle": "생성 모션의 Unreal 연동과 리타깃",
      "pages": [
        {
          "page": 16,
          "slideId": 297,
          "title": "생성 모션을 실제 캐릭터 재생까지 연결",
          "rows": [
            {
              "heading": "구현한 연결 도구",
              "body": "NVIDIA ARDY 생성 결과를 받아\n좌표 변환·FBX 출력·리타깃 연결"
            },
            {
              "heading": "반복 설정 자동화",
              "body": "애니메이션 소스 임포트와 IK 자산 생성 자동화\n대상 메시 선택 후 UE4·Manny 재생"
            },
            {
              "heading": "문제",
              "body": "AI 생성 모션을 그대로 전달할 때\nUnreal 캐릭터와 본 기준 불일치"
            }
          ],
          "images": [
            {
              "src": "assets/ppt/ardy-reference-console.webp",
              "width": 800,
              "height": 800,
              "aspect": 1,
              "label": "생성 모션 · 원본 확인",
              "alt": "생성 모션 · 원본 확인",
              "video": "assets/ppt/ardy-reference-console.mp4"
            },
            {
              "src": "assets/ppt/ardy-manny-console.webp",
              "width": 800,
              "height": 800,
              "aspect": 1,
              "label": "언리얼 캐릭터 · 재생",
              "alt": "언리얼 캐릭터 · 재생",
              "video": "assets/ppt/ardy-manny-console.mp4"
            }
          ],
          "links": [
            "assets/ppt/ardy-reference-manny-comparison.mp4"
          ],
          "flow": {
            "src": "assets/ppt/slide297-flow.webp",
            "width": 1429,
            "height": 111,
            "alt": "프롬프트 입력 모션 생성 → NPZ·JSON 보관 FBX 변환 → 리타깃 자산 자동 설정 → 완성 클립 언리얼 재생",
            "large": false
          },
          "extra": []
        },
        {
          "page": 17,
          "slideId": 298,
          "title": "리타깃 과정의 본 회전 오류 보정",
          "rows": [
            {
              "heading": "팔다리가 꼬인 원인",
              "body": "축과 기준 포즈가 다른 회전을\n본 이름 기준으로 바로 전달"
            },
            {
              "heading": "보정한 기준",
              "body": "축·관절 방향·좌우 체인 대응 정리\n애니메이션 소스 포즈 복원 후 엔진 리타깃 적용"
            },
            {
              "heading": "확인한 결과",
              "body": "UE4·Manny 117프레임 검증\nFBX와 라이브 경로의 출력 포즈 비교"
            }
          ],
          "images": [
            {
              "src": "assets/ppt/slide298-image42.webp",
              "width": 695,
              "height": 694,
              "aspect": 1.0,
              "label": "보정 전 · 회전 직접 전달",
              "alt": "보정 전 · 회전 직접 전달"
            },
            {
              "src": "assets/ppt/slide298-image20.webp",
              "width": 695,
              "height": 694,
              "aspect": 1.0,
              "label": "보정 후 · 엔진 IK 리타깃",
              "alt": "보정 후 · 엔진 IK 리타깃"
            }
          ],
          "links": [],
          "flow": {
            "src": "assets/ppt/slide298-flow.webp",
            "width": 1429,
            "height": 111,
            "alt": "축·기준 포즈 확인 → 소스 포즈 재구성 → 엔진 IK 리타깃 → FBX·라이브 출력 비교",
            "large": false
          },
          "extra": []
        }
      ]
    },
    {
      "id": "ddd",
      "title": "DDD",
      "subtitle": "Unity 러닝 액션 게임 · 전반적인 게임 개발",
      "pages": [
        {
          "page": 18,
          "slideId": 271,
          "title": "DDD",
          "rows": [
            {
              "heading": "개발 기간",
              "body": "2024.08 ~ 2024.11"
            },
            {
              "heading": "개발 형태",
              "body": "팀 프로젝트\nG-STAR 2024 전시"
            },
            {
              "heading": "개발 환경",
              "body": "Unity · C#"
            },
            {
              "heading": "담당 업무",
              "body": "프로그래밍\n레벨 기획 제외"
            }
          ],
          "images": [
            {
              "src": "assets/ppt/slide271-image8.webp",
              "width": 1431,
              "height": 803,
              "aspect": 1.781737,
              "label": "",
              "alt": "DDD"
            }
          ],
          "links": [],
          "flow": null,
          "extra": []
        },
        {
          "page": 19,
          "slideId": 274,
          "title": "반복 생성·제거를 오브젝트 재사용으로 전환",
          "rows": [
            {
              "heading": "조회 단위",
              "body": "프리팹별 비활성 객체 조회\n없을 때만 새 인스턴스 생성"
            },
            {
              "heading": "재사용 전 복원",
              "body": "위치·회전·크기 복원\n선형·각속도 초기화"
            },
            {
              "heading": "사용 후 반환",
              "body": "코루틴 중지 · 자식 객체 반환\n이동 상태와 소유 참조 정리"
            }
          ],
          "images": [],
          "links": [],
          "flow": {
            "src": "assets/ppt/slide274-flow.webp",
            "width": 1431,
            "height": 1100,
            "alt": "생성 요청 → 비활성 객체가 있는가? → 기존 객체 가져오기 → 새 인스턴스 생성 → 예 → 아니요 → 상태 복원 · 활성화",
            "large": true
          },
          "extra": []
        },
        {
          "page": 20,
          "slideId": 275,
          "title": "동일한 패턴에서 풀링 ON / OFF 비교",
          "rows": [
            {
              "heading": "비교 조건",
              "body": "같은 씬 · 같은 패턴\n배치당 생성 개수 100개로 통일"
            },
            {
              "heading": "구간 분리",
              "body": "Spawn · Create · Release\nProfilerMarker로 비용 구분"
            },
            {
              "heading": "확인 항목",
              "body": "최초 생성과 재사용 구간 분리\n생성·재사용·반환 횟수 확인"
            }
          ],
          "images": [
            {
              "src": "assets/ppt/slide275-image3.webp",
              "width": 1431,
              "height": 395,
              "aspect": 3.623637,
              "label": "OFF · 생성 / 파괴",
              "alt": "OFF · 생성 / 파괴"
            },
            {
              "src": "assets/ppt/slide275-image5.webp",
              "width": 1431,
              "height": 395,
              "aspect": 3.623637,
              "label": "ON · 비활성 객체 재사용",
              "alt": "ON · 비활성 객체 재사용"
            }
          ],
          "links": [],
          "flow": null,
          "extra": [
            "100개 생성 배치 평균: OFF 8.09 ms → ON 3.43 ms\nOFF 114회 / ON 118회"
          ]
        }
      ]
    }
  ],
  "source": {
    "file": "전진오_포트폴리오_좌설명_우자료_레이아웃.pptx",
    "sha256": "19b0248dd08c69e03f5cef085d883920172e817ebf1593c959d77aff34b7bb9e",
    "slideCount": 21
  }
};
