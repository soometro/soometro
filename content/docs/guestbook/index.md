---
title: "💬 Guestbook"
date: 2026-08-14
lastmod: 2026-08-14
bookHidden: false
description: "다녀가신 흔적을 남겨주세요"
---

방명록입니다. 편하게 인사 남겨주세요. 


<script>
document.addEventListener(
  "DOMContentLoaded",
  async function () {

    /*
     * 방명록 직접 URL 진입 시
     * 최초 1회 카카오 로그인 요청
     *
     * 로그인 취소 시에는
     * 방명록 페이지를 그대로 보여준다.
     */

    const attemptedKey =
      "guestbook_direct_login_attempted";


    /*
     * 이미 로그인된 사용자는
     * 아무것도 하지 않는다.
     */

    try {

      if (
        typeof window.sbGetUser ===
        "function"
      ) {

        const user =
          await window.sbGetUser();


        if (user) {

          sessionStorage.removeItem(
            attemptedKey
          );

          return;

        }

      }


      /*
       * 이번 페이지 진입에서
       * 이미 로그인 요청을 했다면
       * 다시 요청하지 않는다.
       */

      if (
        sessionStorage.getItem(
          attemptedKey
        ) === "true"
      ) {

        sessionStorage.removeItem(
          attemptedKey
        );

        return;

      }


      /*
       * 로그인 요청을 했다는 표시를
       * 먼저 남긴다.
       *
       * 카카오 승인:
       *   로그인 후 방명록 복귀
       *
       * 카카오 취소:
       *   방명록 복귀
       *   다시 로그인 요청하지 않음
       */

      sessionStorage.setItem(
        attemptedKey,
        "true"
      );


      if (
        typeof window.sbSignInKakao ===
        "function"
      ) {

        window.sbSignInKakao(
          "/docs/guestbook/"
        );

      }


    } catch (error) {

      console.error(
        "Guestbook direct login error:",
        error
      );

    }

  }
);
</script>