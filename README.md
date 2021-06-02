# 순수 자바스크립트로 만든 타이핑 마스터

#### [code Scalper](https://www.youtube.com/channel/UC1wWTimSew9rYzEZRVYVlbg)의 [Vanilla 자바스크립트 타자게임 만들기! 실전코스](https://youtu.be/_CsGSE5gwTA)를 학습한 저장소입니다.

#### 클론코딩 이후 개인적으로 추가, 수정한 사항입니다.

> JavaScript

- 사용자가 입력할 때와 입력하지 않을 때를 직관적으로 알 수 있게 구성
  - 게임중이 아닐때 입력박스 비활성화
  - 게임중이 아닐때 입력박스에 안내문구 표시
- 새 게임을 시작하면 획득점수를 초기화
- 프로그램 첫 구동때부터 단어를 무작위로 선택하도록 구성
- axios를 사용해서 단어 정보를 불러오던 것을 async, await을 통해 fetch 함수로 불러오도록 변경
- 함수 이름을 역할에 따라 settet, getter형식으로 변경
- 단어를 랜덤으로 선택하는 코드를 getRandomWord() 함수로 구성하여 여러 구간에서 활용

> HTML, CSS

- 시맨틱 태그로 구조를 재배치
- Font awesome의 keyboard, youtube, github 아이콘 추가
- footer 영역을 추가하여 출처를 표기
- 버튼이 "게임시작" 상태일 때만 동작하는 hover효과 추가
- 남은 시간이 3초 미만이면 카운트 숫자를 빨간색으로 변경
