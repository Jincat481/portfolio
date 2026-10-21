window.portfolioData = {
  "name": "전진오",
  "email": "wjswlsdh159@gmail.com",
  "github": "https://github.com/Jincat481",
  "intro": "플레이어가 느끼는 작은 불편함도 그냥 넘기지 않고,\n하나씩 고민하고 개선하는 전진오입니다.",
  "portrait": "assets/s1-19.webp",
  "projects": [
    {
      "id": "moonlight",
      "title": "월하일검",
      "kicker": "잠입 액션 게임",
      "period": "2026.03 ~ 2026.11\n8개월",
      "stack": [
        "Unreal Engine",
        "C++",
        "Blueprint"
      ],
      "summary": "전투\n파쿠르 \n카메라 액션\n플레이어 액션",
      "overview": {
        "title": "월하일검",
        "rows": [],
        "images": [
          {
            "video": "assets/moonlight-gameplay.mp4",
            "src": "assets/moonlight-gameplay.webp",
            "alt": "플레이 영상",
            "kind": "video"
          }
        ],
        "links": [
          "https://youtu.be/dlEksnzpNKM"
        ],
        "texts": [
          "프로젝트 01 · Unreal Engine",
          "월하일검",
          "04",
          "구현 영상 · 전체 플레이 흐름   youtu.be/dlEksnzpNKM"
        ],
        "table": [
          [
            "개발 기간",
            "2026.03 ~ 2026.11\n8개월"
          ],
          [
            "개발 인원",
            "총 6명, 기획 4명 · 프로그래밍 2명"
          ],
          [
            "개발 환경",
            "Unreal Engine, C++ · Blueprint"
          ],
          [
            "담당 업무",
            "전투\n파쿠르 \n카메라 액션\n플레이어 액션"
          ]
        ],
        "flow": null
      },
      "features": [
        {
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
              "src": "assets/s5-1009.webp",
              "alt": "오브젝트 페이드",
              "width": 1600,
              "height": 718,
              "kind": "image",
              "label": "적용 전"
            },
            {
              "src": "assets/s5-1011.webp",
              "alt": "오브젝트 페이드",
              "width": 1600,
              "height": 718,
              "kind": "image",
              "label": "적용 후"
            }
          ],
          "links": [
            "https://youtu.be/eEJtQI8Z8t8"
          ],
          "texts": [
            "월하일검 · 카메라",
            "오브젝트 페이드",
            "기능 구현 영상 · 오브젝트 페이드   youtu.be/eEJtQI8Z8t8",
            "06",
            "가림 물체 탐색",
            "카메라와 캐릭터 사이 장애물 탐색\n겹쳐 있는 가림 물체까지 추가 검사",
            "페이드 적용 전",
            "시야를 가리는 물체로 인해\n캐릭터와 전투 상황 확인 제한",
            "페이드 적용 후",
            "가림 물체에 페이드 적용\n중복 처리 방지 · 최대 검사 횟수 제한",
            "처리 흐름",
            "적용 전",
            "적용 후",
            "카메라–캐릭터\n사이 장애물 탐색",
            "이미 처리한\n대상 제외",
            "가림 물체에\n페이드 적용",
            "뒤쪽 가림 물체\n추가 탐색"
          ],
          "table": [],
          "flow": "assets/flow-5.svg",
          "sourcePage": 5,
          "anchor": "moonlight-5"
        },
        {
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
              "src": "assets/s6-1009.webp",
              "alt": "플레이어 페이드",
              "width": 880,
              "height": 880,
              "kind": "image",
              "label": "적용 전"
            },
            {
              "src": "assets/s6-1011.webp",
              "alt": "플레이어 페이드",
              "width": 880,
              "height": 880,
              "kind": "image",
              "label": "적용 후"
            }
          ],
          "links": [
            "https://youtu.be/vuIYejyGsJw"
          ],
          "texts": [
            "월하일검 · 카메라",
            "플레이어 페이드",
            "기능 구현 영상 · 플레이어 페이드   youtu.be/vuIYejyGsJw",
            "07",
            "근접 시야 확보",
            "좁은 공간에서 캐릭터가 화면을 가림\n카메라 근접 시 몸체 페이드 적용",
            "거리 기반 제어",
            "시작 거리와 완전 숨김 거리 사이\nFadeAmount를 0~1로 계산\n여러 메시에 같은 값 전달",
            "경계 상태 처리",
            "0: 원래 머티리얼로 복귀\n1: 메시 완전 숨김\n중간 구간: 디더 마스크 사용",
            "처리 흐름",
            "적용 전",
            "적용 후",
            "카메라와 캐릭터\n거리 확인",
            "시작·완전 숨김\n거리로 값 계산",
            "FadeAmount 0~1\n메시마다 전달",
            "0: 원래 머티리얼\n1: 완전 숨김"
          ],
          "table": [],
          "flow": "assets/flow-6.svg",
          "sourcePage": 6,
          "anchor": "moonlight-6"
        },
        {
          "title": "페이드 사용 기술",
          "rows": [
            {
              "heading": "FadeAmount 0",
              "body": "원래 픽셀 표시\n머티리얼의 기존 형태 유지"
            },
            {
              "heading": "FadeAmount 0.5",
              "body": "디더 마스크로 일부 픽셀만 표시\n반투명도 대신 표시 픽셀 비율 조절"
            },
            {
              "heading": "FadeAmount 1",
              "body": "표시 픽셀 제거 · 메시 숨김"
            }
          ],
          "images": [
            {
              "src": "assets/s7-1009.webp",
              "alt": "페이드 사용 기술",
              "width": 724,
              "height": 724,
              "kind": "image",
              "label": "FadeAmount 0"
            },
            {
              "src": "assets/s7-1011.webp",
              "alt": "페이드 사용 기술",
              "width": 724,
              "height": 724,
              "kind": "image",
              "label": "FadeAmount 0.5"
            },
            {
              "src": "assets/s7-1013.webp",
              "alt": "페이드 사용 기술",
              "width": 724,
              "height": 724,
              "kind": "image",
              "label": "FadeAmount 1"
            }
          ],
          "links": [],
          "texts": [
            "월하일검 · 페이드 원리",
            "페이드 사용 기술",
            "08",
            "FadeAmount 0",
            "원래 픽셀 표시\n머티리얼의 기존 형태 유지",
            "FadeAmount 0.5",
            "디더 마스크로 일부 픽셀만 표시\n반투명도 대신 표시 픽셀 비율 조절",
            "FadeAmount 1",
            "표시 픽셀 제거 · 메시 숨김",
            "처리 흐름",
            "FadeAmount 0",
            "FadeAmount 0.5",
            "FadeAmount 1",
            "FadeAmount\n전달",
            "디더 마스크\n계산",
            "표시할 픽셀\n비율 조절"
          ],
          "table": [],
          "flow": "assets/flow-7.svg",
          "sourcePage": 7,
          "anchor": "moonlight-7"
        },
        {
          "title": "페이드 표현 방식 비교",
          "rows": [],
          "images": [
            {
              "src": "assets/s8-8.webp",
              "alt": "페이드 표현 방식 비교",
              "width": 600,
              "height": 450,
              "kind": "image",
              "label": "Masked + 디더",
              "caption": "일부 픽셀 표시\n기존 알파 유지"
            },
            {
              "src": "assets/s8-10.webp",
              "alt": "페이드 표현 방식 비교",
              "width": 600,
              "height": 450,
              "kind": "image",
              "label": "Translucent",
              "caption": "연속적인 반투명\n겹침·정렬 고려"
            },
            {
              "src": "assets/s8-12.webp",
              "alt": "페이드 표현 방식 비교",
              "width": 600,
              "height": 450,
              "kind": "image",
              "label": "즉시 숨김",
              "caption": "표시 여부 전환\n전환 구간 없음"
            }
          ],
          "links": [],
          "texts": [
            "월하일검 · 기술 선택",
            "페이드 표현 방식 비교",
            "10",
            "Masked + 디더",
            "일부 픽셀 표시\n기존 알파 유지",
            "Translucent",
            "연속적인 반투명\n겹침·정렬 고려",
            "즉시 숨김",
            "표시 여부 전환\n전환 구간 없음"
          ],
          "table": [],
          "flow": null,
          "sourcePage": 8,
          "anchor": "moonlight-8"
        },
        {
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
              "video": "assets/execution-gameplay.mp4",
              "src": "assets/execution-gameplay.webp",
              "alt": "플레이 영상",
              "kind": "video",
              "label": "배치·재생"
            },
            {
              "video": "assets/execution-sequence.mp4",
              "src": "assets/execution-sequence.webp",
              "alt": "플레이 영상",
              "kind": "video",
              "label": "시퀀스"
            }
          ],
          "links": [
            "https://youtu.be/3V3XkjqNfy8"
          ],
          "texts": [
            "월하일검 · 처형 1/3",
            "대상 판정부터 처형 종료까지",
            "기능 구현 영상 · 처형·전투   youtu.be/3V3XkjqNfy8",
            "11",
            "대상 판정",
            "거리 · 방향 · 상태 · 장애물 검사\n처형 가능한 대상 확인",
            "배치·재생",
            "선택한 시퀀스와 실제 캐릭터 연결\n처형 위치와 재생 대상 설정",
            "종료·복원",
            "처형 종료 후 상태와 입력 복원",
            "처리 흐름",
            "배치·재생",
            "시퀀스",
            "거리·방향·상태\n장애물 검사",
            "시퀀스 선택\n캐릭터 연결",
            "처형 배치\n시퀀스 재생",
            "종료 후 상태\n이동, 카메라 잠금 복원"
          ],
          "table": [],
          "flow": "assets/flow-9.svg",
          "sourcePage": 9,
          "anchor": "moonlight-9"
        },
        {
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
              "src": "assets/s10-1009.webp",
              "alt": "처형 상황에 따른 배치 선택",
              "width": 1600,
              "height": 862,
              "kind": "image",
              "label": "기본 배치"
            },
            {
              "src": "assets/s10-1011.webp",
              "alt": "처형 상황에 따른 배치 선택",
              "width": 1600,
              "height": 862,
              "kind": "image",
              "label": "회전 배치"
            },
            {
              "src": "assets/s10-1013.webp",
              "alt": "처형 상황에 따른 배치 선택",
              "width": 1600,
              "height": 862,
              "kind": "image",
              "label": "주변 재배치"
            }
          ],
          "links": [],
          "texts": [
            "월하일검 · 처형 2/3",
            "처형 상황에 따른 배치 선택",
            "12",
            "기본·회전 배치",
            "장애물 없음: 기본 방향 선택\n기본 후보가 막힘: 다른 각도 선택",
            "주변 후보 재배치",
            "후보 위치 조건에 따라 재배치\n몬스터 또는 두 캐릭터 위치 조정",
            "최종 강제 배치",
            "안전 후보가 모두 실패한 경우\n원래 플레이어 기준점 유지",
            "처리 흐름",
            "기본 배치",
            "회전 배치",
            "주변 재배치",
            "기본 후보\n확인",
            "막히면 다른 각도\n후보 검사",
            "주변 안전 후보\n재배치",
            "모두 실패 시\n플레이어 기준 유지"
          ],
          "table": [],
          "flow": "assets/flow-10.svg",
          "sourcePage": 10,
          "anchor": "moonlight-10"
        },
        {
          "title": "처형 종료 후 입력·상태 복원",
          "rows": [
            {
              "heading": "남은 능력 정리",
              "body": "처형 시작 시 취소 태그 적용\nParryHit · Attacking · Crouching\n남아 있던 패링 능력 취소"
            },
            {
              "heading": "잠금 소유 확인",
              "body": "처형이 소유한 시점 잠금만 해제\n소유하지 않은 잠금 해제는 건너뜀"
            },
            {
              "heading": "참조·상태 초기화",
              "body": "컨트롤러 참조 해제\n입력·시점 잠금 소유 플래그 초기화\n처형 종료 후 입력 복원"
            }
          ],
          "images": [],
          "links": [],
          "texts": [
            "월하일검 · 처형 3/3",
            "처형 종료 후 입력·상태 복원",
            "13",
            "남은 능력 정리",
            "처형 시작 시 취소 태그 적용\nParryHit · Attacking · Crouching\n남아 있던 패링 능력 취소",
            "잠금 소유 확인",
            "처형이 소유한 시점 잠금만 해제\n소유하지 않은 잠금 해제는 건너뜀",
            "참조·상태 초기화",
            "컨트롤러 참조 해제\n입력·시점 잠금 소유 플래그 초기화\n처형 종료 후 입력 복원",
            "처리 흐름",
            "처형 시작",
            "능력 활성화\n취소 태그 적용",
            "정리 대상",
            "ParryHit\nAttacking\nCrouching",
            "처형 종료",
            "소유한 잠금 해제\n참조·플래그 초기화",
            "처형 종료",
            "잠금\n소유?",
            "시점 입력\n잠금 해제",
            "컨트롤러 참조·\n소유 플래그 초기화",
            "예",
            "아니요"
          ],
          "table": [],
          "flow": "assets/flow-11.svg",
          "diagram": [
            {
              "heading": "처형 시작",
              "body": "능력 활성화\n취소 태그 적용"
            },
            {
              "heading": "정리 대상",
              "body": "ParryHit\nAttacking\nCrouching"
            },
            {
              "heading": "처형 종료",
              "body": "소유한 잠금 해제\n참조·플래그 초기화"
            }
          ],
          "sourcePage": 11,
          "anchor": "moonlight-11"
        },
        {
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
              "src": "assets/s12-1009.webp",
              "alt": "사다리 이동의 정지 경계 선택",
              "width": 1364,
              "height": 1080,
              "kind": "image",
              "label": "진입"
            },
            {
              "src": "assets/s12-1011.webp",
              "alt": "사다리 이동의 정지 경계 선택",
              "width": 1364,
              "height": 1080,
              "kind": "image",
              "label": "반복 이동"
            },
            {
              "src": "assets/s12-1013.webp",
              "alt": "사다리 이동의 정지 경계 선택",
              "width": 1364,
              "height": 1080,
              "kind": "image",
              "label": "상단 이동"
            }
          ],
          "links": [
            "https://youtu.be/7o07m2XqvJQ"
          ],
          "texts": [
            "월하일검 · 사다리",
            "사다리 이동의 정지 경계 선택",
            "기능 구현 영상 · 사다리   youtu.be/7o07m2XqvJQ",
            "14",
            "동작 구성",
            "진입 → 반복 이동 → 상단 이동\n애니메이션 구간 단위로 이동 구성",
            "다음 경계 판정",
            "구간 끝을 사이클 길이 이내로 제한\n현재 위치보다 뒤인 경계만 선택\n허용 오차를 더해 경계 비교",
            "이동 종료·포즈 유지",
            "사이클 시작 + 구간 끝으로 종료점 설정\n해당 경계까지 몽타주 재생\n자동 Blend Out 제한으로 포즈 유지",
            "처리 흐름",
            "진입",
            "반복 이동",
            "상단 이동",
            "구간 끝 계산\n사이클 길이로 제한",
            "현재보다\n뒤인가?",
            "사이클 시작 + 구간 끝\n이동 종료점 반환",
            "경계까지 몽타주 재생\n정지 포즈 유지",
            "예",
            "아니요 · 해당 구간 제외"
          ],
          "table": [],
          "flow": "assets/flow-12.svg",
          "sourcePage": 12,
          "anchor": "moonlight-12"
        }
      ],
      "cover": "assets/moonlight-gameplay.webp"
    },
    {
      "id": "idle",
      "title": "Idle Dungeon Gear Hunter",
      "kicker": "방치형 게임",
      "period": "1인 개인 프로젝트",
      "stack": [
        "Unity",
        "C#"
      ],
      "summary": "자동 전투 · 아이템 수집\n장비 교체와 능력치 성장",
      "overview": {
        "title": "Idle Dungeon Gear Hunter",
        "rows": [],
        "images": [
          {
            "src": "assets/s13-4.webp",
            "alt": "Idle Dungeon Gear Hunter",
            "width": 1578,
            "height": 886,
            "kind": "image"
          }
        ],
        "links": [],
        "texts": [
          "프로젝트 02 · Unity C# · 개인 개발",
          "Idle Dungeon Gear Hunter",
          "15"
        ],
        "table": [
          [
            "개발 형태",
            "1인 개인 프로젝트"
          ],
          [
            "개발 환경",
            "Unity · C#"
          ],
          [
            "게임 방식",
            "자동 전투 · 아이템 수집\n장비 교체와 능력치 성장"
          ],
          [
            "구현 내용",
            "인벤토리·장비 UI\n게임 상태 저장·불러오기"
          ]
        ],
        "flow": null
      },
      "features": [
        {
          "title": "아이템 수량 변경과 UI 갱신",
          "rows": [
            {
              "heading": "이동 수량 계산",
              "body": "같은 ItemId·중첩 가능 여부 확인\n남은 공간과 출발 수량 중 작은 값 선택"
            },
            {
              "heading": "수량 반영·잔량 판정",
              "body": "도착 수량 증가 · 출발 수량 감소\n출발 수량이 0 이하면 슬롯 비우기"
            },
            {
              "heading": "변경 통지·UI 갱신",
              "body": "수량 변경 후 NotifyChanged 통지\nPresenter에서 화면 다시 표시\n데이터와 수량 표시 연결 유지"
            }
          ],
          "images": [
            {
              "src": "assets/s14-1008.webp",
              "alt": "아이템 수량 변경과 UI 갱신",
              "width": 425,
              "height": 297,
              "kind": "image"
            }
          ],
          "links": [],
          "texts": [
            "Idle Dungeon Gear Hunter · 인벤토리",
            "아이템 수량 변경과 UI 갱신",
            "16",
            "이동 수량 계산",
            "같은 ItemId·중첩 가능 여부 확인\n남은 공간과 출발 수량 중 작은 값 선택",
            "수량 반영·잔량 판정",
            "도착 수량 증가 · 출발 수량 감소\n출발 수량이 0 이하면 슬롯 비우기",
            "변경 통지·UI 갱신",
            "수량 변경 후 NotifyChanged 통지\nPresenter에서 화면 다시 표시\n데이터와 수량 표시 연결 유지",
            "처리 흐름",
            "이동 수량 계산\n남은 공간·출발 중 작은 값",
            "도착 수량 증가\n출발 수량 감소",
            "출발 수량\n0 이하?",
            "출발 슬롯\n비우기",
            "변경 통지\nUI 갱신",
            "예",
            "아니요"
          ],
          "table": [],
          "flow": "assets/flow-14.svg",
          "sourcePage": 14,
          "anchor": "idle-14"
        },
        {
          "title": "게임 상태와 UI 복원 순서",
          "rows": [
            {
              "heading": "로드 결과 반영",
              "body": "파일 존재와 Load 결과 확인\n파일 없음 안내 · 현재 상태 유지\n로드 성공 시 게임 상태 복사"
            },
            {
              "heading": "능력치·변경 통지",
              "body": "상태 복사 후 파생 능력치 재계산\n인벤토리 → 장비 → 전투 → 강화\n순서에 따라 변경 알림"
            },
            {
              "heading": "복원 완료",
              "body": "각 UI에 복원된 게임 상태 표시\n불러오기 완료 알림 발행"
            }
          ],
          "images": [
            {
              "src": "assets/s15-1008.webp",
              "alt": "게임 상태와 UI 복원 순서",
              "width": 347,
              "height": 151,
              "kind": "image"
            }
          ],
          "links": [],
          "texts": [
            "Idle Dungeon Gear Hunter · 저장과 복원",
            "게임 상태와 UI 복원 순서",
            "17",
            "로드 결과 반영",
            "파일 존재와 Load 결과 확인\n파일 없음 안내 · 현재 상태 유지\n로드 성공 시 게임 상태 복사",
            "능력치·변경 통지",
            "상태 복사 후 파생 능력치 재계산\n인벤토리 → 장비 → 전투 → 강화\n순서에 따라 변경 알림",
            "복원 완료",
            "각 UI에 복원된 게임 상태 표시\n불러오기 완료 알림 발행",
            "처리 흐름",
            "로드 성공 시\n게임 상태 복사",
            "파생 능력치\n재계산",
            "서비스 변경 통지\n인벤토리→장비→전투→강화",
            "UI 복원\n완료 알림"
          ],
          "table": [],
          "flow": "assets/flow-15.svg",
          "sourcePage": 15,
          "anchor": "idle-15"
        }
      ],
      "cover": "assets/s13-4.webp"
    },
    {
      "id": "ddd",
      "title": "DDD",
      "kicker": "러닝 액션 게임",
      "period": "2024.08 ~ 2024.11",
      "stack": [
        "Unity",
        "C#",
        "2D"
      ],
      "summary": "프로그래밍\n레벨 기획 제외",
      "overview": {
        "title": "DDD",
        "rows": [],
        "images": [
          {
            "src": "assets/s16-4.webp",
            "alt": "DDD",
            "width": 1600,
            "height": 898,
            "kind": "image"
          }
        ],
        "links": [],
        "texts": [
          "프로젝트 03 · Unity 2D · 1학년 팀 프로젝트",
          "DDD",
          "18"
        ],
        "table": [
          [
            "개발 기간",
            "2024.08 ~ 2024.11"
          ],
          [
            "개발 형태",
            "팀 프로젝트\nG-STAR 2024 전시"
          ],
          [
            "개발 환경",
            "Unity · C#"
          ],
          [
            "담당 업무",
            "프로그래밍\n레벨 기획 제외"
          ]
        ],
        "flow": null
      },
      "features": [
        {
          "title": "화면·캐릭터 크기의 기준 통일",
          "rows": [
            {
              "heading": "화면 월드 크기 계산",
              "body": "화면 높이 = 2 × orthographicSize\n화면 너비 = 높이 × aspect\n이미지: 기존 게임 장면"
            },
            {
              "heading": "캐릭터 크기 보정",
              "body": "콜라이더 반크기를 화면 크기로 나눔\n뷰포트 단위의 경계 여유값 계산\n좌우 여유값 marginX 추가"
            },
            {
              "heading": "이동 경계 적용",
              "body": "보정한 좌우·상하 마진으로 이동 제한\n하단에서는 하강 속도 정리"
            }
          ],
          "images": [
            {
              "src": "assets/s17-1008.webp",
              "alt": "화면·캐릭터 크기의 기준 통일",
              "width": 1600,
              "height": 425,
              "kind": "image"
            }
          ],
          "links": [],
          "texts": [
            "DDD · 화면 경계",
            "화면·캐릭터 크기의 기준 통일",
            "19",
            "화면 월드 크기 계산",
            "화면 높이 = 2 × orthographicSize\n화면 너비 = 높이 × aspect\n이미지: 기존 게임 장면",
            "캐릭터 크기 보정",
            "콜라이더 반크기를 화면 크기로 나눔\n뷰포트 단위의 경계 여유값 계산\n좌우 여유값 marginX 추가",
            "이동 경계 적용",
            "보정한 좌우·상하 마진으로 이동 제한\n하단에서는 하강 속도 정리",
            "처리 흐름",
            "화면 높이·너비\n월드 크기 계산",
            "콜라이더 반크기\n뷰포트 마진 환산",
            "좌우 여유값\nmarginX 반영",
            "이동 범위 제한\n하단 하강 속도 정리"
          ],
          "table": [],
          "flow": "assets/flow-17.svg",
          "sourcePage": 17,
          "anchor": "ddd-17"
        },
        {
          "title": "화면 전환 중 입력 제어",
          "rows": [
            {
              "heading": "전환 시작",
              "body": "UI 이벤트와 키 입력을 함께 잠금\nEventSystem 비활성\nIsInputLocked 활성"
            },
            {
              "heading": "전환 진행",
              "body": "버튼과 ESC 입력 차단 유지\nUI와 공용 키 입력 경로 모두 제어"
            },
            {
              "heading": "표시 완료·복원",
              "body": "페이드 표시 종료 후 입력 복구\nEventSystem 활성 · 입력 잠금 해제\n메뉴·일시정지 ESC도 공용 경로 사용"
            }
          ],
          "images": [],
          "links": [],
          "texts": [
            "DDD · 전환 중 입력",
            "화면 전환 중 입력 제어",
            "20",
            "전환 시작",
            "UI 이벤트와 키 입력을 함께 잠금\nEventSystem 비활성\nIsInputLocked 활성",
            "전환 진행",
            "버튼과 ESC 입력 차단 유지\nUI와 공용 키 입력 경로 모두 제어",
            "표시 완료·복원",
            "페이드 표시 종료 후 입력 복구\nEventSystem 활성 · 입력 잠금 해제\n메뉴·일시정지 ESC도 공용 경로 사용",
            "처리 흐름",
            "UI 경로",
            "EventSystem\n비활성 / 활성",
            "키 입력 경로",
            "IsInputLocked\n활성 / 해제",
            "공용 입력",
            "버튼 · ESC\n메뉴 · 일시정지",
            "화면 전환 시작",
            "UI·키 입력\n동시에 잠금",
            "전환 진행 중\n차단 유지",
            "표시 완료 후\nUI·키 입력 복원"
          ],
          "table": [],
          "flow": "assets/flow-18.svg",
          "diagram": [
            {
              "heading": "UI 경로",
              "body": "EventSystem\n비활성 / 활성"
            },
            {
              "heading": "키 입력 경로",
              "body": "IsInputLocked\n활성 / 해제"
            },
            {
              "heading": "공용 입력",
              "body": "버튼 · ESC\n메뉴 · 일시정지"
            }
          ],
          "sourcePage": 18,
          "anchor": "ddd-18"
        }
      ],
      "cover": "assets/s16-4.webp"
    }
  ],
  "additional": {
    "id": "development",
    "title": "추가 기술 경험",
    "kicker": "C++ TCP 네트워크",
    "period": "",
    "stack": [
      "C++",
      "TCP",
      "AI 활용"
    ],
    "summary": "",
    "features": [
      {
        "title": "TCP 수신 버퍼에서 완성 패킷 분리",
        "rows": [
          {
            "heading": "길이 판정",
            "body": "패킷 크기보다 수신 데이터가 적으면 대기\n버퍼를 유지하고 다음 수신 연결"
          },
          {
            "heading": "패킷 분리",
            "body": "패킷 종류·본문을 새 객체에 복사\n소비한 바이트만 버퍼에서 제거"
          },
          {
            "heading": "완성 패킷 반환",
            "body": "완성된 패킷 객체 반환\n뒤에 이어진 다음 패킷 데이터 보존"
          }
        ],
        "images": [],
        "links": [],
        "texts": [
          "기술 과제 · C++ TCP 네트워크",
          "TCP 수신 버퍼에서 완성 패킷 분리",
          "21",
          "길이 판정",
          "패킷 크기보다 수신 데이터가 적으면 대기\n버퍼를 유지하고 다음 수신 연결",
          "패킷 분리",
          "패킷 종류·본문을 새 객체에 복사\n소비한 바이트만 버퍼에서 제거",
          "완성 패킷 반환",
          "완성된 패킷 객체 반환\n뒤에 이어진 다음 패킷 데이터 보존",
          "처리 흐름",
          "수신 데이터",
          "버퍼에 누적\n미완성 데이터 유지",
          "완성 패킷",
          "종류 + 본문\n새 객체에 복사",
          "잔여 데이터",
          "소비 바이트만 제거\n다음 패킷 데이터 보존",
          "수신 버퍼 확인",
          "패킷\n완성?",
          "종류·본문 복사",
          "소비 바이트 제거",
          "완성 패킷 반환",
          "예",
          "아니요 · 버퍼 유지 후 추가 수신 대기"
        ],
        "table": [],
        "flow": "assets/flow-19.svg",
        "diagram": [
          {
            "heading": "수신 데이터",
            "body": "버퍼에 누적\n미완성 데이터 유지"
          },
          {
            "heading": "완성 패킷",
            "body": "종류 + 본문\n새 객체에 복사"
          },
          {
            "heading": "잔여 데이터",
            "body": "소비 바이트만 제거\n다음 패킷 데이터 보존"
          }
        ],
        "sourcePage": 19,
        "anchor": "development-19"
      },
      {
        "title": "AI 활용 범위와 구조 검토",
        "rows": [
          {
            "heading": "초안 요청",
            "body": "Unity 인벤토리·장비 구조 초안 요청\nMVP · DI · 저장 구조 제안\n실제 요청 주석을 사용 근거로 구분"
          },
          {
            "heading": "연결 구조 확인",
            "body": "서비스를 Presenter에 주입\n필드에 참조를 보관하는 연결 확인\n서비스·Presenter·저장 계약 역할 구분"
          },
          {
            "heading": "기여·검증 구분",
            "body": "생성 초안과 직접 수정·선택 범위 구분\n코드 존재와 실행 검증을 분리해 설명"
          }
        ],
        "images": [],
        "links": [],
        "texts": [
          "개발 과정 · 검토 흐름",
          "AI 활용 범위와 구조 검토",
          "22",
          "초안 요청",
          "Unity 인벤토리·장비 구조 초안 요청\nMVP · DI · 저장 구조 제안\n실제 요청 주석을 사용 근거로 구분",
          "연결 구조 확인",
          "서비스를 Presenter에 주입\n필드에 참조를 보관하는 연결 확인\n서비스·Presenter·저장 계약 역할 구분",
          "기여·검증 구분",
          "생성 초안과 직접 수정·선택 범위 구분\n코드 존재와 실행 검증을 분리해 설명",
          "처리 흐름",
          "Service",
          "인벤토리·장비\n데이터 처리",
          "Presenter",
          "서비스 주입\nUI 연결·갱신",
          "저장 계약",
          "상태 저장·복원\n역할 분리",
          "요구 구조 정리\nAI 초안 요청",
          "서비스·Presenter\n저장 역할 확인",
          "직접 수정·선택\n기여 범위 구분",
          "코드 존재와\n실행 검증 구분"
        ],
        "table": [],
        "flow": "assets/flow-20.svg",
        "diagram": [
          {
            "heading": "Service",
            "body": "인벤토리·장비\n데이터 처리"
          },
          {
            "heading": "Presenter",
            "body": "서비스 주입\nUI 연결·갱신"
          },
          {
            "heading": "저장 계약",
            "body": "상태 저장·복원\n역할 분리"
          }
        ],
        "sourcePage": 20,
        "anchor": "development-20"
      }
    ]
  },
  "timeline": [
    {
      "year": "2026",
      "label": "3학년",
      "title": "Unreal 게임 플레이 기능 개발",
      "body": ""
    },
    {
      "year": "2025",
      "label": "2학년",
      "title": "콘솔 RPG · Tower Defense",
      "body": ""
    },
    {
      "year": "2024",
      "label": "1학년",
      "title": "WinAPI · 자료구조 · Unity 경험",
      "body": ""
    }
  ],
  "scope": [
    {
      "title": "전투",
      "body": "처형, 무기 트레이스·피격 판정, 넉백\n패링·가드·스턴 상태 연결\n전투 효과와 발소리"
    },
    {
      "title": "파쿠르와 카메라 액션",
      "body": "파쿠르·사다리·락온\n카메라 추적과 충돌\n오브젝트 가림·플레이어 근접 페이드"
    },
    {
      "title": "능력과 플레이어 액션",
      "body": "발각도·은신, 포션·대시·웅크리기\n상호작용 대상 선택과 안내 UI·입력\n무기 납도·발도"
    }
  ]
};
