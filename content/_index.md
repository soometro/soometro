<style>

/* ==========================================================================
   메인 페이지 전용 스타일
   ========================================================================== */


/* ==========================================================================
   1. 라이트모드 배경
   ========================================================================== */

body {
  background-color: #f4f7f9 !important;
  background-image: url("/images/paper-fibers.webp") !important;
  background-repeat: repeat !important;
}


/* ==========================================================================
   2. 메인 페이지 H1
   --------------------------------------------------------------------------
   크기      : 32px / 2rem
   스타일    : normal
   굵기      : 700
   라이트    : #1a1a1a
   다크      : #f8f9fa
   ========================================================================== */

h1 {
  font-family: 'Bodoni MT', 'Didot', 'Georgia', serif !important;
  font-size: 2rem !important;
  font-style: normal !important;
  font-weight: 700 !important;
  letter-spacing: -0.01em !important;
  color: #1a1a1a !important;
}


/* ==========================================================================
   3. Starting Point / Current Focus 제목
   --------------------------------------------------------------------------
   크기      : 24px / 1.5rem
   스타일    : normal
   굵기      : 500
   라이트    : #555555
   다크      : #b8b8b8
   ========================================================================== */

.home-box > p {
  font-family: "Malgun Gothic", "맑은 고딕", sans-serif !important;
  font-size: 1.5rem !important;
  font-style: normal !important;
  font-weight: 500 !important;
  color: #555555 !important;
  margin: 0.3em 0 0.4em 0 !important;
}


/* ==========================================================================
   4. Starting Point / Current Focus 본문
   --------------------------------------------------------------------------
   크기      : 16px / 1rem
   스타일    : normal
   굵기      : 400
   라이트    : #555555
   다크      : #b8b8b8
   ========================================================================== */

.home-description {
  font-family: "Malgun Gothic", "맑은 고딕", sans-serif !important;
  font-size: 1rem !important;
  font-style: normal !important;
  font-weight: 400 !important;
  color: #555555 !important;
  line-height: 1.6 !important;
}


/* --------------------------------------------------------------------------
   4-1. Starting Point / Current Focus 본문 강조문구
   --------------------------------------------------------------------------
   크기      : 본문과 동일 16px / 1rem
   스타일    : italic
   굵기      : 400
   라이트    : #555555
   다크      : #ced4da
   -------------------------------------------------------------------------- */

.home-description b,
.home-description i {
  font-family: "Malgun Gothic", "맑은 고딕", sans-serif !important;
  font-size: 1rem !important;
  font-style: italic !important;
  font-weight: 400 !important;
  color: #555555 !important;
}


/* ==========================================================================
   5. 하단 미니홈피 감성 문구
   --------------------------------------------------------------------------
   크기      : 0.85rem
   스타일    : normal
   굵기      : 400
   라이트    : #970fac
   다크      : #970fac
   ========================================================================== */

div[style*="text-align: center"] > p {
  font-family: "Malgun Gothic", "맑은 고딕", sans-serif !important;
  font-size: 0.85rem !important;
  font-style: normal !important;
  font-weight: 400 !important;
  color: #970fac !important;
  margin-bottom: 0.8rem !important;
  border: none !important;
}


/* ==========================================================================
   6. Archive / Dashboard 버튼
   --------------------------------------------------------------------------
   크기      : 0.9rem
   스타일    : normal
   굵기      : 700
   라이트    : #2f8f9f
   다크      : #2f8f9f
   ========================================================================== */

.home-columns a[href="/docs/"],
.home-columns a[href="/dashboard/"] {
  font-family: "Malgun Gothic", "맑은 고딕", sans-serif !important;
  font-size: 0.9rem !important;
  font-style: normal !important;
  font-weight: 700 !important;
  color: #2f8f9f !important;
}


/* ==========================================================================
   7. 메인 페이지 다크모드
   ========================================================================== */

html.forced-dark body {
  background-color: #181a1b !important;
  background-image: none !important;
  color: #dee2e6 !important;
}


/* --------------------------------------------------------------------------
   7-1. H1 다크모드
   -------------------------------------------------------------------------- */

html.forced-dark h1 {
  font-family: 'Bodoni MT', 'Didot', 'Georgia', serif !important;
  font-size: 2rem !important;
  font-style: normal !important;
  font-weight: 700 !important;
  color: #f8f9fa !important;
}


/* --------------------------------------------------------------------------
   7-2. Starting Point / Current Focus 제목 다크모드
   -------------------------------------------------------------------------- */

html.forced-dark .home-box > p {
  font-family: "Malgun Gothic", "맑은 고딕", sans-serif !important;
  font-size: 1.5rem !important;
  font-style: normal !important;
  font-weight: 500 !important;
  color: #b8b8b8 !important;
}


/* --------------------------------------------------------------------------
   7-3. Starting Point / Current Focus 본문 다크모드
   -------------------------------------------------------------------------- */

html.forced-dark .home-description {
  font-family: "Malgun Gothic", "맑은 고딕", sans-serif !important;
  font-size: 1rem !important;
  font-style: normal !important;
  font-weight: 400 !important;
  color: #b8b8b8 !important;
}


/* --------------------------------------------------------------------------
   7-4. 본문 강조문구 다크모드
   -------------------------------------------------------------------------- */

html.forced-dark .home-description b,
html.forced-dark .home-description i {
  font-family: "Malgun Gothic", "맑은 고딕", sans-serif !important;
  font-size: 1rem !important;
  font-style: italic !important;
  font-weight: 400 !important;
  color: #ced4da !important;
}


/* --------------------------------------------------------------------------
   7-5. 하단 미니홈피 감성 문구 다크모드
   -------------------------------------------------------------------------- */

html.forced-dark div[style*="text-align: center"] > p {
  font-family: "Malgun Gothic", "맑은 고딕", sans-serif !important;
  font-size: 0.85rem !important;
  font-style: normal !important;
  font-weight: 400 !important;
  color: #970fac !important;
}


/* --------------------------------------------------------------------------
   7-6. Archive / Dashboard 버튼 다크모드
   -------------------------------------------------------------------------- */

html.forced-dark .home-columns a[href="/docs/"],
html.forced-dark .home-columns a[href="/dashboard/"] {
  font-family: "Malgun Gothic", "맑은 고딕", sans-serif !important;
  font-size: 0.9rem !important;
  font-style: normal !important;
  font-weight: 700 !important;
  color: #2f8f9f !important;
}


/* ==========================================================================
   8. 기타 메인 페이지 강조 요소
   ========================================================================== */

html.forced-dark blockquote,
html.forced-dark blockquote b,
html.forced-dark blockquote strong {
  font-family: "Malgun Gothic", "맑은 고딕", sans-serif !important;
  font-size: 1rem !important;
  font-style: normal !important;
  font-weight: 700 !important;
  color: #f8f9fa !important;
}

</style>