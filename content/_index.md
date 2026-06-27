+++
title = "Home"
draft = false
+++


# archive

<div class="home-columns">
  <div class="home-box">

## <strong>Starting Point</strong>

><b><i>"우연한 연결의 시대가 끝났다. 이제 나의 무대는 사라졌다."</i></b> 
 
>거리에서 친구들과 밤새 몰려다니던 시절의 활기, 누군가의 로그인에 설레던 시절이 있었다...
<br>
거리는 비었고, 24시간 연결된 세상에서 대화는 단절되었다. 
  </div>
</div>

<div class="home-columns">
  <div class="home-box">

## <strong>Current Focus</strong>

><b><i>“새로운 것을 찾는 일보다, 좋아했던 것을 다시 들여다보는 일."</i></b>

>피드를 채우는 명품, 여행, 연출된 과시에 동참하지 않고, 시간을 거친 안목을 남길 뿐이다.
<br>
유행보다 기억을, 소비보다 소장을, 무엇을 보았는가가 아닌, 우리는 무엇을 남겼는가?</i>

  </div>
</div>

<style>
  /* [기본 라이트 모드: 종이 질감 배경 및 원래 색상 순정 유지] */
  body {
    background-color: #f4f7f9 !important;
    background-image: url("https://www.transparenttextures.com/patterns/paper-fibers.png") !important;
    background-repeat: repeat !important;
  }

  h1 { 
    font-family: 'Bodoni MT', 'Didot', 'Georgia', serif !important;
    font-weight: 700 !important;
    font-style: normal !important;
    letter-spacing: -0.01em !important;
    color: #1a1a1a !important;
  }

  /* 🌙 [모바일 및 시스템 다크 모드 감지 시 자동 색상 반전] */
  @media (prefers-color-scheme: dark) {
    body {
      background-color: #181a1b !important; /* 눈이 편안한 깊은 밤하늘색 */
      background-image: none !important;     /* 다크 모드에서는 종이 질감 제거하여 가독성 확보 */
      color: #dee2e6 !important;             /* 본문 기본 글자색을 연한 회백색으로 변경 */
    }
    
    h1 {
      color: #f8f9fa !important;             /* 메인 타이틀을 선명한 흰색 계열로 변경 */
    }

    /* 상단 인용구 영역 다크 모드 글자색 제어 */
    blockquote, blockquote b, blockquote strong {
      color: #f8f9fa !important;             /* 세 줄의 핵심 문구를 다크 모드에서도 선명하게 처리 */
    }

    /* 이탤릭체 및 서브 문구 색상 최적화 */
    i, .home-box i {
      color: #ced4da !important;
    }

    /* 방문자 트래픽 카운터 영역 다크 모드 가독성 확보 */
    .visitor-counter {
      border-top-color: #343a40 !important;
      color: #adb5bd !important;
    }
    .visitor-counter div {
      color: #ced4da !important;
    }
    #count-today, #count-weekly {
      color: #f8f9fa !important;
    }
    #count-total {
      color: #ffffff !important;
    }
  }
</style>