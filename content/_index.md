+++
title = "Home"
draft = false
+++

# archive

><b> "사진은 순간을 기록하지만, 글은 생각을 기록한다."<br>
> "이곳은 내가 버리지 않는 한 사라지지 않는 공간."
 
>우연한 연결의 시대는 끝났다.</b> 
<br>나 역시 오랫동안 그 흐름을 따라갔지만, 
<br>어느 순간부터 소비보다 기록이 더 오래 남는다는 사실을 깨달았다.

>그래서 이곳을 만들었다. 
<br>시간이 흘러도 다시 꺼내 볼 수 있는 생각과 경험 그리고 취향을 기록하는 개인 아카이브.

<div class="home-columns">
  <div class="home-box">

## <strong>Current Focus</strong>

><i>어느 순간부터 새로운 것을 찾는 일보다 좋아했던 것을 다시 들여다보는 일이 더 중요해졌다. 
<br>유행보다 기억을, 소비보다 축적을, 알고리즘보다 나만의 취향을 믿게 되었다.
<br>자동차, 음악, 영화, 만화, 기술 그리고 일상 속에서 오래 붙잡고 싶었던 생각들을 기록한다.
<br><br>결국 남는 것은 소비한 것이 아니라, 기억하고 기록한 것이라고 믿는다.</i>

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