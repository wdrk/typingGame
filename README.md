# 순수 자바스크립트로 만든 타이핑 마스터

#### [code Scalper](https://www.youtube.com/channel/UC1wWTimSew9rYzEZRVYVlbg)의 [Vanilla 자바스크립트 타자게임 만들기! 실전코스](https://youtu.be/_CsGSE5gwTA)를 학습한 저장소입니다.

#### 클론코딩 이후 개인적으로 추가, 수정한 사항

- input창에 disabled 옵션을 이용해서 사용자가 입력할 때와 입력하지 않을 때를 직관적으로 알 수 있게 구성
- 새 게임을 시작하면 획득점수를 초기화
- 프로그램 첫 구동때부터 단어를 무작위로 선택
- 단어 정보를 axios를 사용해서 불러오던 것을 async, await을 사용해서 fetch 함수로 불러오도록 변경
