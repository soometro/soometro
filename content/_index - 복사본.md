+++
title = "독립 아카이브 — 718 박스터, 위스키, 만화, 블러드본"
og_title = "시간을 거친 안목을 남기는 아카이브"
description = "명품과 연출된 과시에 동참하지 않고 자동차, 위스키, 만화, 게임에 관한 깊이 있는 시선과 가치를 남기는 개인 독립 저장소입니다."
draft = false
+++

<!-- 🛠️ SEO 수정 1: 의미 없는 '# archive' 대신, 브랜드명과 핵심 가치를 h1에 명확히 주입 -->
# soometro — Archive of Tastes

<div class="home-columns">
  <div class="home-box">

<!-- 🛠️ SEO 수정 2: h2(##) 대신 span을 사용하여 레이아웃 크기와 두께를 순정 그대로 유지 -->
<span style="display: block; font-size: 1.5em; font-weight: bold; margin-top: 0.83em; margin-bottom: 0.83em;">Starting Point</span>

<!-- 🛠️ SEO 수정 3: '>' 인용구 태그를 완전히 제거하고, 별도의 블록 클래스(indent-block)로 묶어 완벽한 들여쓰기 구현 -->
<div class="indent-block">
  <b><i>"우연한 연결의 시대가 끝나며, 무대는 사라졌다."</i></b>
</div>

<div class="indent-block">
  거리에서 친구들과 밤새 몰려다니던 시절의 활기, 누군가의 로그인에 설레던 시절이 있었다...<br>
  거리는 비었고, 24시간 연결된 세상에서 대화는 단절되었다. 
</div>

  </div>
</div>

<div class="home-columns">
  <div class="home-box">

<!-- 🛠️ SEO 수정 2 동일 -->
<span style="display: block; font-size: 1.5em; font-weight: bold; margin-top: 0.83em; margin-bottom: 0.83em;">Current Focus</span>

<div class="indent-block">
  <b><i>“좋아했던 것을 다시 들여다보는 일."</i></b>
</div>

<div class="indent-block">
  피드를 채우는 명품, 여행, 연출된 과시에 동참하지 않고, 시간을 거친 안목을 남길 뿐이다.<br>
  무엇을 보았는가가 아닌, 우리는 무엇을 남겼는가?
</div>

  </div>
</div>

<style>
  /* [기본 라이트 모드: 종이 질감 배경 및 원래 색상 순정 유지] */
  body {
    background-color: #f4f7f9 !important;
    background-image: url("https://transparenttextures.com") !important;
    background-repeat: repeat !important;
  }

  h1 { 
    font-family: 'Bodoni MT', 'Didot', 'Georgia', serif !important;
    font-weight: 700 !important;
    font-style: normal !important;
    letter-spacing: -0.01em !important;
    color: #1a1a1a !important;
  }

  /* 🛠️ SEO 수정 4: 인용구(blockquote) 편법 대신, 구글 봇을 방해하지 않는 정석적인 들여쓰기 CSS 배치 */
  .indent-block {
    padding-left: 1rem !important;
    margin-bottom: 1rem !important;
    border-left: 3px solid #ccc !important; /* 기존 인용구 특유의 왼쪽 세로선 디자인 유지 */
    color: #555;
  }

  /* 🌙 [모바일 및 시스템 다크 모드 감지 시 자동 색상 반전] */
  @media (prefers-color-scheme: dark) {
    body {
      background-color: #181a1b !important; 
      background-image: none !important;     
      color: #dee2e6 !important;             
    }
    
    h1 {
      color: #f8f9fa !important;             
    }

    /* 🛠️ 다크모드 대응: 들여쓰기 블록 안의 모든 핵심 문구를 다크 모드에서도 선명하게 처리 */
    .indent-block, .indent-block b, .indent-block strong {
      color: #f8f9fa !important;             
    }
    .indent-block {
      border-left-color: #495057 !important; /* 다크모드용 세로선 색상 조정 */
    }

    i, .home-box i {
      color: #ced4da !important;
    }

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
