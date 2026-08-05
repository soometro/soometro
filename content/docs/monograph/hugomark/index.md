---
title: "Hugo 문서 창작에 집중 평생 무료 웹사이트 구축 절차서"
date: 2026-08-03
lastmod: 2026-08-04
bookHidden: true
description: "대한민국 인터넷 30년 동안 없어진 블로그 SNS만 30여개, 평생 글쓰기 잘하려면 개인 웹사이트를 가질 필요가 있다."
---

# Hugo 문서 창작에 집중 평생 무료 웹사이트 구축 절차서

대한민국 인터넷 30년 동안 없어진 블로그 SNS만 30여개, 평생 글쓰기 잘하려면 개인 웹사이트를 가질 필요가 있다. 만약 필요성을 느낀다면 아래 글을 천천히 집중해서 한번만 따라 하면 평생 글쓰기 할 수 있는 작가가 될 수 있다. 

## 핵심 요약

* 평생 무료
* 전용 도메인 비용은 별도 (1년에 1만 2천원)
* 네이버, 다음, 호스팅업체 등이 망하더라도, 내 홈페이지와 아무 상관없음.
* 내가 글을 쓰는곳이 내 컴퓨터라 자료는 그대로 남아 있음.
* 필요시 그대로 다른 서비스로 이사가면 됨.
* 그런 홈페이지 운영을 A 부터 Z까지를 총망라 하려고 한다. 

![이 홈페이지도 휴고로 만들어졌습니다.](images/hugomark.png)

## 1. Hugo를 통한 마크다운 중심의 웹사이트 구축 개념과 전체 절차

### 1-1. Hugo 홈페이지 구축 방식 이해

일반적인 블로그 서비스(네이버 블로그, 티스토리 등)는 회원가입 후 관리자 화면에서 글을 작성하면 플랫폼이 자동으로 홈페이지를 운영한다. 하지만 Hugo는 운영 방식이 다르다.

Hugo는 **내 컴퓨터에서 글과 홈페이지 구조를 직접 관리하고, 완성된 결과물을 인터넷 서버에 배포하는 방식**이다. 처음에는 프로그램 설치와 설정 과정이 필요하지만, 한번 구축하면 불필요한 데이터베이스나 관리자 페이지 없이 빠르고 안정적으로 홈페이지를 운영할 수 있다.

Hugo 기반 홈페이지는 다음과 같은 구조로 작동한다.

```text
[내 컴퓨터]

Markdown 글 작성
        ↓
      Hugo
        ↓
HTML/CSS/JS 홈페이지 생성
        ↓
       Git
        ↓
      GitHub 저장소 업로드
        ↓
Cloudflare Pages 자동 배포
        ↓
인터넷 홈페이지 공개

```

각 도구의 역할을 쉽게 설명하면 다음과 같다.

* **Hugo**: 글과 디자인 파일을 실제 홈페이지 파일(HTML)로 변환하는 프로그램
* **Git**: 홈페이지 파일의 변경 기록을 관리하는 프로그램
* **GitHub**: 홈페이지 파일을 인터넷에 저장하는 온라인 저장 공간
* **Cloudflare Pages**: GitHub에 저장된 파일을 가져와 실제 웹사이트로 공개하는 무료 배포 서비스
* **가비아 도메인**: 방문자가 접속할 인터넷 주소 제공

즉, Hugo는 홈페이지를 만드는 도구이고, GitHub는 저장 공간이며, Cloudflare Pages는 인터넷에 공개하는 서버 역할을 한다.

### 1-2. Hugo 홈페이지 구축 전체 과정

최종적으로 완성되는 작업 흐름은 다음과 같다.

```text
1단계. 컴퓨터 환경 준비
        ↓
Git 설치
Hugo Extended 설치
VS Code 설치

2단계. Hugo 홈페이지 제작
        ↓
Hugo 사이트 생성
테마 적용
설정 파일 작성
로컬 테스트

3단계. GitHub 연결
        ↓
Git 저장소 생성
파일 기록
GitHub 업로드

4단계. Cloudflare Pages 연결
        ↓
GitHub 자동 연결
Hugo 자동 빌드 설정
인터넷 공개

5단계. 도메인 연결
        ↓
가비아 도메인 구매
Cloudflare DNS 연결
HTTPS 적용

6단계. 실제 운영
        ↓
Markdown 작성
Git Push
자동 배포

```

한번 구축이 완료되면 이후 글 작성 과정은 복잡하지 않다.

```text
글 작성
 ↓
GitHub 업로드
 ↓
Cloudflare 자동 배포
 ↓
홈페이지 업데이트

```

따라서 매번 서버에 파일을 직접 올리거나 홈페이지를 다시 만드는 작업은 필요하지 않다.

---

## 2. 핵심 도구 개념 이해: Hugo, Git, GitHub, Cloudflare Pages, 가비아 도메인

### 2-1. Git이란 무엇인가?

**Git은 파일의 변경 이력을 관리하는 프로그램이다.**

쉽게 말하면 컴퓨터 안에 있는 홈페이지 파일의 "저장 기록 관리 도구"이다.

예를 들어 다음과 같은 상황을 생각할 수 있다.

* 월요일에 글 10개 작성
* 화요일에 테마 수정
* 수요일에 설정 변경
* 목요일에 문제가 발생

이때 Git을 사용하면 어떤 파일이 언제 변경되었는지 기록이 남는다. 그래서 여러번 작업하고 Push 한번에 변경된 모든 기록이 저장된다. 

또한 Hugo 홈페이지에서는 Git을 이용해 다음 작업을 한다.

* 새 글 추가 기록
* 설정 변경 기록
* 테마 변경 기록
* GitHub 업로드 준비

Git은 홈페이지를 인터넷에 공개하는 프로그램이 아니다. 단순히 파일 변경 내용을 관리하는 역할이다.

### 2-2. GitHub란 무엇인가?

**GitHub는 Git으로 관리하는 파일을 인터넷에 저장하는 온라인 저장 공간이다.**

컴퓨터 안에만 홈페이지 파일이 있으면 컴퓨터가 고장 났을 때 문제가 발생한다. 또한 Cloudflare Pages가 홈페이지를 만들기 위해서는 인터넷에서 파일을 가져올 장소가 필요하다.

이때 GitHub를 사용한다.

구조는 다음과 같다.

```text
내 컴퓨터
(Hugo 홈페이지 파일)
        ↓
      Git 기록
        ↓
      GitHub 저장소
        ↓
Cloudflare Pages가 파일 가져오기

```

GitHub는 단순한 백업 공간이 아니다. Cloudflare Pages와 연결해두면, 

GitHub에 **변경 내용이 올라오는 순간** Cloudflare Pages는 자동으로 홈페이지를 다시 만들어 준다.

### 2-3. Hugo란 무엇인가?

**Hugo는 정적 사이트 생성기(Static Site Generator)이다.**

일반적인 홈페이지는 방문자가 접속할 때마다 서버가 데이터를 계산해서 화면을 만든다.  
 (말이 어려울 수 있는데, 모든 웹페이지는 서버에서 데이터를 재조립 가공해서 보여주고 있다고 보면 된다.)

하지만 Hugo는 방식이 다르다.

작성자가 글을 저장하면 Hugo가 미리 홈페이지 파일을 만들어 둔다.  
 (일반적으로는 짜장 볶고 야채 넣고, 면 삶고 그릇에 담아서 배포, Hugo는 미리 만들어준 짜장면을 테이블 위로 이동)

```text
Markdown 글 (.md 파일)
        ↓
Hugo 변환
        ↓
HTML 홈페이지 파일
```

방문자는 이미 만들어진 HTML 파일을 받기 때문에 매우 빠르게 페이지를 열 수 있다.

Hugo의 장점은 다음과 같다.

* 빠른 페이지 속도
* 데이터베이스 불필요
* 서버 관리 부담 감소
* Markdown 기반 글 작성
* GitHub를 통한 안전한 백업
* 무료 배포 가능

### 2-4. Cloudflare Pages란 무엇인가?

**Cloudflare Pages는 GitHub에 저장된 Hugo 프로젝트를 자동으로 홈페이지로 만들어 주는 서비스이다.**

Hugo는 홈페이지 파일을 만드는 역할까지만 한다.

만든 파일을 인터넷에 공개하려면 웹 서버가 필요하다.

Cloudflare Pages가 그 역할을 담당한다.

작동 과정은 다음과 같다.

```text
사용자가 글 작성(개인PC에서 워드작성하듯이 마크다운으로 작성)
↓
GitHub 업로드
↓
Cloudflare Pages가 변경 감지
↓
Hugo 실행
↓
홈페이지 생성
↓
인터넷 공개
```

이 과정을 자동 배포라고 한다.

* 네이버 블로그 운영자의 경우
```text
네이버 접속
↓
로그인 
↓
블로그 이동
↓
글쓰기 (에티터 사용. 마크다운 지원안함. 마크다운은 홈페이지내 검색하세요.)
↓
작성 완료
↓
인터넷 공개
```

### 2-5. 가비아 도메인이란 무엇인가?

도메인은 홈페이지 주소이다.

예:

```text
https://example.com
```

방문자는 이 주소를 입력해서 홈페이지에 접속한다.

하지만 도메인은 홈페이지 자체가 아니다.

구조를 구분해야 한다.

```text
가비아
↓
인터넷 주소 제공

Cloudflare Pages
↓
홈페이지 파일 제공

Hugo
↓
홈페이지 파일 생성
```

즉,

* 가비아 = 주소
* Cloudflare Pages = 홈페이지 공간
* Hugo = 홈페이지 제작 도구

이다.

---

### 2-6. Windows 환경 준비

이 문서는 Windows 사용자를 기준으로 작성한다.

필요한 프로그램은 다음과 같다.

| 프로그램 | 용도 |
| --- | --- |
| Git | 파일 변경 기록 및 GitHub 업로드 관리 |
| Hugo Extended | Markdown을 홈페이지로 변환 |
| VS Code | 글 작성 및 설정 파일 수정 |
| 웹 브라우저 | GitHub, Cloudflare, 가비아 관리 |

기본적으로 다음 조건이 필요하다.

* Windows 10 이상 권장
* 인터넷 연결
* Google 계정 또는 이메일 계정
* GitHub 계정
* Cloudflare 계정
* 가비아 도메인 계정(최종 단계에서 필요)

---

### 2-7. Git 설치 절차

#### Git 다운로드

1. 웹 브라우저(Chrome 등)를 실행한다.
2. 주소창에 아래 주소를 입력한다.

```
https://git-scm.com

```

3. Git 공식 홈페이지에 접속한다.
4. 화면의 **Download for Windows** 버튼을 클릭한다.
5. Windows용 설치 파일 다운로드를 시작한다.

---

#### Git 설치

1. 다운로드 폴더를 연다.
2. 다음과 비슷한 이름의 설치 파일을 실행한다.

```
Git-x.xx.x-64-bit.exe
```

3. Windows 보안 확인 창이 나타나면 [예]를 클릭한다.
4. 설치 화면이 나타나면 기본 설정을 유지한다.
5. 대부분의 항목은 변경하지 않고 [Next] 버튼을 클릭한다.
6. 마지막 화면에서 [Install] 버튼을 클릭한다.
7. 설치 완료 후 [Finish] 버튼을 클릭한다.

기본 설정 그대로 설치하는 이유는 Hugo와 GitHub 연동 과정에서 가장 일반적인 설정이기 때문이다.

---

## 3. Hugo Extended 및 개발 환경 설치, Git 기본 설정

### 3-1. Hugo Extended 버전 설치

#### Hugo Extended 버전이 필요한 이유

Hugo에는 일반 버전과 Extended 버전이 있다.

Hugo 테마 중 일부는 CSS 전처리 기능인 **Sass/SCSS 변환 기능**을 사용한다.  
이 기능은 일반 Hugo 버전에서는 지원되지 않으며, Extended 버전이 필요하다.

따라서 처음 설치할 때부터 반드시 **Hugo Extended 버전**을 설치해야 한다.

만약 일반 버전을 설치하면 다음과 같은 문제가 발생할 수 있다.

* 테마 적용 후 홈페이지 실행 오류
* CSS 스타일이 정상적으로 표시되지 않음
* Cloudflare Pages 배포 실패

특히 GitHub와 Cloudflare Pages를 이용한 자동 배포 환경에서는 **로컬 컴퓨터의 Hugo 버전과 Cloudflare 서버의 Hugo 버전을 동일하게 맞추는 것**이 중요하다.

---

#### PowerShell 실행

Windows에서는 PowerShell을 이용해 Hugo를 설치한다.

1. Windows 화면 좌측 하단의 검색창(돋보기 아이콘)을 클릭한다.
2. `PowerShell`을 입력한다.
3. 검색 결과에서 **Windows PowerShell** 위에 마우스 오른쪽 버튼을 클릭한다.
4. **관리자 권한으로 실행**을 선택한다.
5. "이 앱이 변경할 수 있도록 허용하시겠습니까?"라는 창이 나타나면 [예]를 클릭한다.
6. 파란색 PowerShell 창이 열린다.

---

#### Hugo Extended 설치

PowerShell 창에 아래 명령어를 입력한다.

```powershell
winget install Hugo.Hugo.Extended

```

입력 후 엔터를 누른다.

설치 과정에서 이용 약관 동의 화면이 나타날 수 있다.

예:

```text
Do you agree to the terms?
```

이 경우 키보드에서:

```text
Y
```

를 입력하고 엔터를 누른다.

설치가 완료되면 다음과 비슷한 메시지가 출력된다.

```text
Successfully installed
```

설치가 완료되면 PowerShell 창을 닫는다.

---

### 3-2. VS Code 설치

#### VS Code가 필요한 이유

Hugo 홈페이지는 대부분 Markdown 파일과 설정 파일을 수정하면서 운영한다.

Windows 기본 프로그램인 메모장으로도 수정할 수 있지만, 장기적으로 운영하려면 전용 편집 프로그램을 사용하는 것이 좋다.

Visual Studio Code(VS Code)는 무료 문서 편집 프로그램이며 다음 작업에 사용한다.

* Markdown 글 작성
* Hugo 설정 파일 수정
* 코드 확인
* 폴더 구조 확인
* Git 작업 보조

특히 Hugo는 여러 개의 폴더와 설정 파일을 사용하는 구조이므로, 파일 탐색이 쉬운 VS Code 사용을 권장한다.

---

#### VS Code 다운로드 및 설치

1. 웹 브라우저를 실행한다.
2. 아래 주소에 접속한다.

```text
https://code.visualstudio.com
```

3. **Download for Windows** 버튼을 클릭한다.
4. 설치 파일을 다운로드한다.

예:

```text
VSCodeUserSetup-x64.exe
```

5. 다운로드한 설치 파일을 실행한다.
6. 사용권 계약 화면에서 동의한다.
7. 설치 위치는 기본값을 유지한다.
8. 추가 작업 선택 화면에서는 다음 항목을 체크하는 것을 권장한다.

* 바탕 화면에 바로가기 만들기
* PATH에 추가

9. [설치] 버튼을 클릭한다.
10. 설치 완료 후 VS Code를 실행한다.

---

#### VS Code 기본 설정

처음 실행하면 언어 설정 화면이 나타날 수 있다.

한국어 환경을 원하면:

1. 왼쪽 메뉴에서 Extensions(확장 기능)를 선택한다.
2. 검색창에:

```text
Korean Language Pack
```

을 입력한다.

3. Microsoft에서 제공하는 한국어 확장 프로그램을 설치한다.
4. VS Code를 다시 실행한다.

---

### 3-3. Git과 Hugo 설치 확인

프로그램 설치가 끝났으면 정상적으로 설치되었는지 확인해야 한다.

#### 명령 프롬프트 실행

1. 키보드에서:

```text
Windows 키 + R

```

을 누른다.

2. 실행 창이 나타나면:

```text
cmd
```

를 입력한다.

3. 엔터를 누르면 검은색 명령 프롬프트 창이 열린다.

명령 프롬프트는 Windows에 명령을 입력하는 도구이다.

일반 프로그램처럼 버튼을 클릭하는 방식이 아니라, 정해진 명령어를 입력하여 컴퓨터에게 작업을 지시한다.

---

#### Git 설치 확인

명령 프롬프트 창에 아래 명령어를 입력한다.

```cmd
git --version

```

엔터를 누른다.

정상적으로 설치되었다면 다음과 비슷한 결과가 나온다.

```text
git version 2.xx.x
```

버전 숫자는 설치 시점에 따라 다를 수 있다.

정상적으로 버전 정보가 출력되면 Git 설치가 완료된 것이다.

---

#### Hugo 설치 확인

다음 명령어를 입력한다.

```cmd
hugo version

```

정상 출력 예:

```text
hugo v0.125.0-xxxx+extended windows/amd64

```

여기서 반드시 확인해야 하는 부분은:

```text
extended
```

라는 단어가 포함되어 있는지이다.

정상:

```text
+extended

```

비정상:

```text
windows/amd64

```

만 표시되는 경우

Extended 버전이 아니면 다음 문제가 발생할 수 있다.

* 테마 CSS 오류
* Sass/SCSS 변환 실패
* Cloudflare Pages 빌드 오류

따라서 `extended`가 없다면 Hugo를 삭제하고 Extended 버전으로 다시 설치해야 한다.

---

### 3-4. Git 기본 사용자 정보 등록

#### Git 사용자 정보가 필요한 이유

Git은 파일 변경 기록을 저장할 때 "누가 변경했는지" 정보를 함께 기록한다.

개인 홈페이지 운영이라면 본인의 이름과 이메일을 등록하면 된다.

이 정보는 GitHub에 표시되는 작성자 정보와 연결된다.

---

#### 사용자 이름 등록

명령 프롬프트에서 다음 명령어를 입력한다.

```cmd
git config --global user.name "사용자이름"
```

예:

```cmd
git config --global user.name "honggildong"
```

여기서 입력하는 이름은 실제 주민등록상 이름일 필요는 없다.

Git 기록에 표시할 이름을 입력하면 된다.

---

#### 이메일 등록

다음 명령어를 입력한다.

```cmd
git config --global user.email "이메일주소"

```

예:

```cmd
git config --global user.email "example@gmail.com"

```

가능하면 GitHub 가입 시 사용한 이메일을 입력하는 것이 좋다.

---

#### 설정 확인

등록한 정보를 확인한다.

```cmd
git config --list

```

출력 결과에서 다음 항목을 확인한다.

```text
user.name=입력한 이름
user.email=입력한 이메일
```

정상적으로 표시되면 Git 기본 설정이 완료된 것이다.

---

### 3-5. GitHub 계정 생성 및 로그인 준비

#### GitHub가 필요한 이유

Hugo는 내 컴퓨터에서 홈페이지를 만드는 프로그램이다.

하지만 인터넷에 공개하려면 홈페이지 파일을 저장할 공간이 필요하다.

GitHub는 이 파일을 저장하는 온라인 공간이며, Cloudflare Pages가 홈페이지를 만들 때 가져가는 원본 저장소 역할을 한다.

따라서 Hugo 홈페이지 운영 과정에서는 GitHub 계정이 필요하다.

---

#### GitHub 접속

1. 웹 브라우저를 실행한다.
2. 아래 주소에 접속한다.

```text
https://github.com
```

3. 우측 상단의 **Sign up** 버튼을 클릭한다.
4. 이메일 주소를 입력한다.
5. 비밀번호와 사용자명을 설정한다.
6. 계정 생성을 완료한다.

---

#### GitHub 로그인

이미 계정이 있다면:

1. GitHub 홈페이지 접속
2. 우측 상단 **Sign in** 클릭
3. 이메일과 비밀번호 입력
4. 로그인 완료

Google 계정 연동을 사용할 수도 있다.

---

#### GitHub 사용자명 확인

로그인 후 우측 상단 프로필 아이콘을 클릭한다.

여기서 확인해야 하는 것은:

* GitHub 사용자명
* 계정 이메일

이다.

GitHub 사용자명은 이후 저장소 주소 생성 과정에서 사용된다.

예:

```text
https://github.com/사용자명/my-blog
```

---

## 4. Hugo 사이트 생성, 테마 적용 및 로컬 테스트

### 4-1. Hugo 프로젝트 생성 준비

Hugo 홈페이지는 하나의 폴더 안에 모든 파일이 들어 있는 구조로 관리한다.

이 폴더를 **Hugo 프로젝트**라고 한다.

예:

```text
my-blog
│
├─ content
│   └─ posts
│       └─ 글 파일
│
├─ themes
│   └─ 테마 파일
│
├─ static
│
├─ hugo.toml
│
└─ 기타 설정 파일

```

각 파일과 폴더는 역할이 다르다.

| 이름 | 역할 |
| --- | --- |
| content | 작성한 글이 저장되는 공간 |
| themes | 홈페이지 디자인(테마) 저장 공간 |
| static | 이미지, 파일 등 직접 추가하는 자료 저장 공간 |
| hugo.toml | 홈페이지 전체 설정 파일 |
| public | 최종 생성된 홈페이지 파일 |

초기에는 폴더 구조가 복잡해 보일 수 있지만, 실제 운영에서 주로 사용하는 것은 다음 세 가지이다.

* `content` → 글 작성
* `static` → 이미지 및 파일 관리
* `hugo.toml` → 홈페이지 설정 변경

---

### 4-2. Hugo 새 사이트 생성

#### 작업 폴더 선택

먼저 Hugo 프로젝트를 저장할 위치를 정한다.

예:

```text
문서(Document)

```

폴더 안에 홈페이지 프로젝트를 생성한다.

최종 위치:

```text
문서
└─ my-blog

```

처럼 만들어진다.

---

#### 명령 프롬프트 실행

1. 키보드에서:

```text
Windows 키 + R

```

을 누른다.

2. 실행 창에서:

```text
cmd

```

입력 후 엔터를 누른다.

3. 명령 프롬프트 창이 열린다.

---

#### 작업 폴더 이동

문서 폴더로 이동한다.

```cmd
cd Documents

```

입력 후 엔터를 누른다.

정상적으로 이동하면 명령창 표시 위치가 다음과 같이 변경된다.

```text
C:\Users\사용자명\Documents>

```

---

#### Hugo 사이트 생성

아래 명령어를 입력한다.

```cmd
hugo new site my-blog
```

이 명령어는 `my-blog`라는 이름의 새로운 Hugo 홈페이지 구조를 만든다.

정상적으로 완료되면 다음과 비슷한 메시지가 출력된다.

```text
Congratulations! Your new Hugo site is created in ...
```

생성된 폴더로 이동한다.

```cmd
cd my-blog
```

이제 현재 위치는 Hugo 프로젝트 폴더이다.

---

### 4-3. Hugo 테마 적용

#### 테마가 필요한 이유

Hugo 자체는 홈페이지를 만드는 엔진이다.

하지만 처음 생성한 Hugo 사이트는 디자인이 없는 기본 상태이다.

방문자가 보는 홈페이지 형태를 만들기 위해서는 테마(theme)가 필요하다.

테마에는 다음 내용이 포함되어 있다.

* 홈페이지 디자인
* 메뉴 구조
* 글 표시 방식
* 검색 기능
* 반응형 화면 구성
* CSS 스타일

Hugo 테마는 여러 개발자가 무료로 공개하고 있다.

공식 테마 사이트:

[https://themes.gohugo.io/](https://themes.gohugo.io/)

에서 원하는 테마를 선택할 수 있다.

---

#### PaperMod 테마 선택

이 문서에서는 가장 많이 사용되는 Hugo 테마 중 하나인 **PaperMod**를 기준으로 설명한다.

PaperMod 특징:

* 빠른 속도
* 깔끔한 디자인
* 검색 기능 지원
* 모바일 대응
* 설정 방법이 비교적 단순

참고:

실제 운영 중인 홈페이지에서는 다른 테마를 사용할 수 있다.

예:

* Hugo Book
* PaperMod
* LoveIt
* Stack

등 다양한 테마 선택이 가능하다.

테마 변경은 가능하지만, 처음 구축 과정에서는 하나의 테마로 끝까지 진행하는 것이 오류를 줄이는 방법이다.

---

### 4-4. Git 초기화

#### Git 초기화가 필요한 이유

Hugo 프로젝트를 만들었다고 해서 아직 Git으로 관리되는 상태는 아니다.

Git 초기화를 하면 현재 프로젝트 폴더가:

"이제부터 변경 내용을 기록할 파일 저장소"

로 바뀐다.

명령어:

```cmd
git init

```

입력한다.

정상 결과:

```text
Initialized empty Git repository

```

---

### 4-5. Hugo 테마를 Git Submodule 방식으로 추가

#### Git Submodule이란?

Hugo 테마는 별도의 Git 저장소로 관리되는 경우가 많다.

따라서 테마 파일을 단순히 복사하는 것보다 **Git Submodule 방식**으로 연결하는 것이 좋다.

쉽게 설명하면:

* 내 블로그 = 메인 프로젝트
* 테마 = 별도의 외부 프로젝트

이며, 외부 프로젝트를 내 프로젝트 안에 연결하는 방식이다.

구조:

```text
my-blog
│
├─ content
│
├─ themes
│   └─ PaperMod
│
└─ hugo.toml

```

장점:

* 테마 업데이트 관리 가능
* GitHub 업로드 시 테마 연결 유지
* 파일 중복 방지

---

#### PaperMod 테마 추가

현재 명령 프롬프트 위치가:

```text
my-blog

```

인지 확인한다.

아래 명령어를 입력한다.

```cmd
git submodule add https://github.com/adityatelange/hugo-PaperMod.git themes/PaperMod

```

설치가 완료되면:

```text
themes
└─ PaperMod

```

폴더가 생성된다.

---

#### 테마 설치 확인

파일 탐색기를 열어:

```text
my-blog
 └─ themes
     └─ PaperMod

```

경로로 이동한다.

여러 파일과 폴더가 보이면 정상적으로 설치된 것이다.

---

### 4-6. Hugo 설정 파일 수정

#### hugo.toml 파일 역할

`hugo.toml`은 Hugo 홈페이지의 기본 설정 파일이다.

여기에는 다음 정보가 저장된다.

* 홈페이지 주소
* 홈페이지 이름
* 사용하는 테마
* 언어 설정
* 검색 기능
* 화면 구성 옵션

쉽게 말하면:

"내 Hugo 홈페이지 운영 규칙을 적어 놓는 설정표"

이다.

---

#### hugo.toml 수정

파일 탐색기를 실행한다.

이동 경로:

```text
문서
 └─ my-blog
     └─ hugo.toml

```

파일을 VS Code로 연다.

처음에는 기본 내용이 있다.

모두 삭제하고 아래 내용을 입력한다.

```toml
baseURL = 'https://내도메인.com/'
languageCode = 'ko-kr'
title = '내 블로그'
theme = 'PaperMod'

[params]
  env = "production"
  title = "내 블로그"
  description = "Hugo와 Cloudflare Pages로 구축한 블로그"

```

---

#### 설정값 설명

##### baseURL

```toml
baseURL = 'https://내도메인.com/'

```

홈페이지 주소를 입력하는 부분이다.

예:

```toml
baseURL = 'https://example.com/'

```

처음에는 실제 도메인이 없어도 임시 주소를 사용할 수 있다.

단, 최종 배포 전에는 실제 도메인으로 변경해야 한다.

---

##### languageCode

```toml
languageCode = 'ko-kr'

```

홈페이지 언어 설정이다.

한국어 사이트이므로 `ko-kr`을 사용한다.

---

##### title

```toml
title = '내 블로그'

```

홈페이지 이름이다.

브라우저 제목과 검색 결과 등에 표시된다.

---

##### theme

```toml
theme = 'PaperMod'

```

사용할 Hugo 테마를 지정한다.

테마 폴더명과 반드시 같아야 한다.

---

#### 저장

키보드:

```text
Ctrl + S

```

를 눌러 저장한다.

---

### 4-7. Hugo 로컬 테스트 실행

#### 로컬 테스트란?

Cloudflare에 업로드하기 전에 내 컴퓨터에서 홈페이지가 정상적으로 작동하는지 확인하는 과정이다.

이 과정에서는 인터넷에 공개되지 않는다.

오직 내 컴퓨터에서만 확인할 수 있다.

---

#### Hugo 서버 실행

명령 프롬프트에서 현재 위치가:

```text
my-blog

```

인지 확인한다.

아래 명령어를 입력한다.

```cmd
hugo server -D

```

정상 실행되면:

```text
Web Server is available at http://localhost:1313/

```

라는 메시지가 출력된다.

---

#### 홈페이지 확인

웹 브라우저를 열고 주소창에 입력한다.

```text
http://localhost:1313

```

정상이라면 PaperMod 테마가 적용된 Hugo 홈페이지 화면이 나타난다.

---

#### 테스트 종료

명령 프롬프트 창에서:

```text
Ctrl + C

```

를 누른다.

그러면 로컬 서버가 종료된다.

---

#### 정상 작동 의미

화면이 정상적으로 표시되었다는 것은 다음 과정이 모두 정상이라는 의미이다.

* Git 설치 완료
* Hugo 설치 완료
* Hugo 프로젝트 생성 성공
* 테마 연결 성공
* 설정 파일 정상 작동

즉, 홈페이지 제작 환경이 완성된 것이다.

---

## 5. GitHub 저장소 구축 및 원클릭 배포 준비 업로드

### 5-1. GitHub 저장소가 필요한 이유

현재까지 만든 Hugo 홈페이지는 내 컴퓨터 안에만 존재한다.

구조:

```text
내 컴퓨터

my-blog
 ├─ content
 ├─ themes
 ├─ hugo.toml
 └─ 기타 파일

```

이 상태에서는 다음 문제가 있다.

* 컴퓨터 고장 시 홈페이지 파일 손실 가능
* Cloudflare Pages가 홈페이지 파일을 가져갈 수 없음
* 다른 컴퓨터에서 작업하기 어려움

따라서 Hugo 프로젝트를 GitHub에 업로드해야 한다.

GitHub에 생성하는 저장 공간을 Repository(저장소)라고 한다.

쉽게 설명하면:

* 내 컴퓨터 = 작업 공간
* GitHub Repository = 온라인 보관함
* Cloudflare Pages = 홈페이지 공개 서비스

이다.

---

### 5-2. GitHub 새 Repository 생성

#### GitHub 접속

1. 웹 브라우저를 실행한다.
2. 아래 주소에 접속한다.

```text
https://github.com

```

3. 로그인한다.

---

#### 새 저장소 만들기

1. 화면 우측 상단의 **[+]** 버튼을 클릭한다.
2. [New repository]를 선택한다.
3. 저장소 정보를 입력한다.

##### Repository name

입력:

```text
my-blog

```

가능하면 로컬 Hugo 폴더명과 동일하게 사용하는 것을 권장한다.

이유:

* 관리하기 쉬움
* 이후 명령어 오류 감소
* Cloudflare 연결 과정에서 확인 편리

---

##### Public / Private 선택

선택:

```text
Public

```

Public은 누구나 저장소 내용을 볼 수 있는 공개 방식이다.

Hugo 블로그의 경우 대부분 공개 저장소를 사용한다.

Private도 가능하지만 Cloudflare Pages 연결 과정에서 권한 설정이 조금 더 복잡할 수 있다.

---

##### 초기 파일 생성 옵션

다음 항목은 모두 선택하지 않는다.

* Add a README file
* Add .gitignore
* Choose a license

이유:

현재 내 컴퓨터에 이미 Hugo 프로젝트가 생성되어 있다.

GitHub에서 별도로 파일을 만들면 서로 다른 두 프로젝트가 되어 처음 업로드 과정에서 충돌이 발생할 수 있다.

---

#### Repository 생성

화면 하단의:

```text
Create repository

```

버튼을 클릭한다.

생성이 완료되면 저장소 주소가 표시된다.

예:

```text
https://github.com/내계정/my-blog.git

```

이 주소는 이후 내 컴퓨터의 Hugo 프로젝트와 연결할 때 사용한다.

---

### 5-3. `.gitignore` 파일 작성

#### `.gitignore`가 필요한 이유

Hugo 프로젝트에는 GitHub에 올릴 필요가 없는 파일도 생성된다.

대표적인 예:

* 임시 생성 파일
* 빌드 결과물
* 캐시 파일

특히:

```text
public

```

폴더는 Hugo가 홈페이지를 만들면서 자동 생성하는 결과물이다.

Cloudflare Pages는 GitHub에서 원본 파일을 가져온 뒤 직접 Hugo를 실행하기 때문에 `public` 폴더를 올릴 필요가 없다.

따라서 Git에게:

"이 파일들은 업로드하지 마라"

라고 알려주는 파일이 필요하다.

그 파일이 `.gitignore`이다.

---

#### `.gitignore` 파일 생성

파일 탐색기를 연다.

이동:

```text
문서
 └─ my-blog

```

폴더 내부 빈 공간에서:

마우스 우클릭

↓

새로 만들기

↓

텍스트 문서

선택

---

파일 이름 변경:

기존:

```text
새 텍스트 문서.txt

```

변경:

```text
.gitignore

```

주의:

`.txt` 확장자가 남아 있으면 안 된다.

최종 파일명:

```text
.gitignore

```

이어야 한다.

---

#### `.gitignore` 내용 작성

파일을 VS Code로 열고 아래 내용을 입력한다.

```text
/public/
/resources/
.hugo_build.lock

```

저장한다.

---

#### 각 항목 설명

##### `/public/`

Hugo가 생성하는 최종 홈페이지 파일이다.

Cloudflare Pages가 직접 생성하므로 GitHub 저장 대상에서 제외한다.

---

##### `/resources/`

Hugo가 사용하는 임시 캐시 파일이다.

백업할 필요가 없다.

---

##### `.hugo_build.lock`

Hugo 실행 중 생성되는 잠금 파일이다.

다른 컴퓨터와 공유하면 오류 원인이 될 수 있다.

---

### 5-4. Git에 Hugo 프로젝트 등록

#### 현재 위치 확인

명령 프롬프트를 실행한다.

현재 위치가 반드시:

```text
my-blog

```

폴더인지 확인한다.

예:

```text
C:\Users\사용자명\Documents\my-blog>

```

이어야 한다.

---

#### Git 파일 등록 준비

명령어:

```cmd
git add .

```

입력한다.

의미:

현재 폴더 안에서 변경된 모든 파일을 Git 관리 대상으로 등록한다.

쉽게 표현하면:

"이 파일들을 저장할 준비 목록에 올려라"

라는 의미이다.

---

### 5-5. Commit으로 변경 내용 저장

#### Commit이란?

Commit은 현재 파일 상태를 하나의 기록으로 저장하는 작업이다.

예:

```text
작업 기록

1번째 저장
 - Hugo 설치
 - 테마 적용

2번째 저장
 - 글 추가

3번째 저장
 - 디자인 수정

```

처럼 변경 이력을 남기는 것이다.

---

#### 첫 번째 Commit 생성

명령어:

```cmd
git commit -m "Initial commit with Hugo theme"

```

입력한다.

의미:

"현재 Hugo 홈페이지 초기 상태를 하나의 기록으로 저장한다"

---

정상 결과 예:

```text
[main xxxxxxx] Initial commit with Hugo theme

```

---

### 5-6. GitHub 저장소 연결

#### 기본 브랜치 이름 변경

Git에서는 저장 공간의 기본 작업 영역을 Branch(브랜치)라고 부른다.

초보자는 우선:

"작업 공간 이름"

정도로 이해하면 된다.

현재 기본 이름을 GitHub 표준인 `main`으로 변경한다.

명령어:

```cmd
git branch -M main

```

---

#### GitHub 저장소 연결

앞에서 복사한 GitHub 주소를 사용한다.

형식:

```cmd
git remote add origin https://github.com/내계정/my-blog.git

```

예:

```cmd
git remote add origin https://github.com/example/my-blog.git

```

---

#### 원격 저장소 확인

연결이 정상인지 확인한다.

명령어:

```cmd
git remote -v

```

결과:

```text
origin https://github.com/내계정/my-blog.git

```

처럼 표시되면 정상이다.

---

### 5-7. GitHub로 첫 번째 업로드(Push)

#### Push란?

Push는 내 컴퓨터에 저장된 Git 기록을 GitHub 서버로 보내는 작업이다.

흐름:

```text
내 컴퓨터

Commit 완료

↓

Push

↓

GitHub 저장소

```

---

#### 업로드 실행

명령어:

```cmd
git push -u origin main

```

입력한다.

처음 연결하는 경우 GitHub 로그인 인증 화면이 나타날 수 있다.

---

#### GitHub 인증

화면에:

```text
Sign in with your browser

```

메시지가 나타나면 클릭한다.

브라우저가 열리면 GitHub 로그인을 완료한다.

정상 완료되면 명령 프롬프트에 업로드 진행 내용이 표시된다.

---

### 5-8. GitHub 업로드 완료 확인

#### 저장소 확인

웹 브라우저에서 GitHub 저장소 페이지로 이동한다.

예:

```text
https://github.com/내계정/my-blog

```

새로고침한다.

---

#### 정상 업로드 확인 항목

다음 파일과 폴더가 보여야 한다.

```text
content
themes
hugo.toml
.gitignore

```

---

#### 테마 Submodule 확인

`themes` 폴더를 클릭한다.

정상이라면:

```text
PaperMod @ xxxxxxx

```

형태로 표시된다.

이것은 테마 파일이 단순 복사가 아니라 Git Submodule 방식으로 연결되어 있다는 의미이다.

---

#### 주의사항

GitHub 화면에서 `public` 폴더가 보이지 않아도 정상이다.

이유:

`.gitignore`에서 제외했기 때문이다.

Cloudflare Pages는 배포 과정에서 Hugo를 실행하여 직접 `public` 폴더를 만든다.

---

### 5-9. GitHub 업로드 후 현재 구조

현재까지 완성된 구조는 다음과 같다.

```text
내 컴퓨터

my-blog
│
├─ content
│   └─ posts
│
├─ themes
│   └─ PaperMod
│
├─ hugo.toml
├─ .gitignore
│
└─ Git 관리


        ↓ git push


GitHub

my-blog Repository

        ↓


Cloudflare Pages가 가져갈 준비 완료

```

이제 Hugo 프로젝트는 인터넷 저장소에 안전하게 보관되었다.

이어서 **[2부]** Cloudflare Pages 연동, 가비아 도메인 설정 및 원클릭 자동 배포 체계 구축 과정이다.

## 6. Cloudflare Pages를 활용한 원클릭 자동 배포 체계 구축

### 6-1. Cloudflare Pages가 필요한 이유

**Hugo와 웹 서버의 역할 차이**

현재까지 만든 Hugo 홈페이지는 내 컴퓨터와 GitHub에만 존재한다.

구조:

```text
내 컴퓨터
(Hugo 프로젝트)

        ↓

GitHub
(파일 저장)

```

하지만 방문자가 인터넷 주소를 입력해서 접속하려면, 항상 켜져 있는 웹 서버가 필요하다.

Hugo 자체는 서버가 아니다.

Hugo는 다음 작업만 담당한다.

```text
Markdown 글
        ↓
Hugo 변환
        ↓
HTML 홈페이지 파일 생성

```

생성된 HTML 파일을 인터넷에 공개하는 역할은 별도의 서비스가 담당해야 한다.

그 역할을 하는 것이 **Cloudflare Pages**이다.

---

**Cloudflare Pages 자동 배포 구조**

최종 운영 구조는 다음과 같다.

```text
글 작성

↓

Git add

↓

Git commit

↓

Git push

↓

GitHub 저장소 변경 감지

↓

Cloudflare Pages 자동 실행

↓

Hugo 빌드

↓

홈페이지 업데이트

```

한번 연결하면 이후에는 Cloudflare에 직접 파일을 업로드할 필요가 없다.

---

### 6-2. Cloudflare 계정 생성

**Cloudflare 접속**

웹 브라우저를 실행한다.

주소:

```text
https://www.cloudflare.com

```

접속한다.

---

**회원가입**

1. 우측 상단 **Sign Up** 버튼을 클릭한다.
2. 이메일 주소와 비밀번호를 입력한다.
3. 계정 생성을 완료한다.
4. 이메일 인증 메시지가 오면 인증을 완료한다.

---

**Cloudflare Dashboard 접속**

로그인하면 Cloudflare 관리 화면(Dashboard)이 표시된다.

이곳에서:

* Pages 배포
* 도메인 연결
* DNS 관리
* SSL 설정

등을 관리한다.

---

### 6-3. Cloudflare Pages 프로젝트 생성

**Pages 메뉴 이동**

Cloudflare Dashboard에서:

1. 왼쪽 메뉴 선택

```text
Workers & Pages

```

2. 화면 중앙:

```text
Create application

```

클릭

3. 상단 메뉴에서:

```text
Pages

```

선택

---

**GitHub 연결**

1. 선택:

```text
Connect to Git

```

2. GitHub 연결 버튼 클릭
3. GitHub 권한 승인 화면이 나타난다.

Cloudflare가 GitHub 저장소를 읽을 수 있도록 권한을 허용한다.

---

**저장소 선택**

GitHub 저장소 목록이 나타난다.

앞에서 만든:

```text
my-blog

```

를 선택한다.

선택 후:

```text
Begin setup

```

버튼을 클릭한다.

---

### 6-4. Cloudflare Hugo 빌드 설정

**빌드 설정이 필요한 이유**

Cloudflare Pages는 GitHub에 있는 파일을 그대로 보여주는 것이 아니다.

배포 과정에서 다음 작업을 한다.

```text
GitHub 파일 다운로드

↓

Hugo 실행

↓

HTML 생성

↓

웹사이트 공개

```

따라서 Cloudflare에게:

"이 프로젝트는 Hugo로 만든 사이트이다"

라고 알려줘야 한다.

---

**Framework preset 설정**

설정 화면에서:

```text
Framework preset

```

항목을 찾는다.

선택:

```text
Hugo

```

---

**빌드 명령 확인**

자동 입력값:

```text
Build command

hugo

```

확인한다.

의미:

Cloudflare 서버에서 Hugo 프로그램을 실행하라는 뜻이다.

---

**출력 디렉터리 확인**

자동 입력값:

```text
Build output directory

public

```

확인한다.

의미:

Hugo가 생성한 최종 홈페이지 파일이 저장되는 위치이다.

---

### 6-5. HUGO_VERSION 환경 변수 설정

**환경 변수가 필요한 이유**

내 컴퓨터와 Cloudflare 서버의 Hugo 버전이 다르면 문제가 발생할 수 있다.

예:

내 컴퓨터:

```text
Hugo v0.125.0 Extended

```

Cloudflare:

```text
Hugo v0.100

```

이런 차이가 있으면 최신 테마 기능을 해석하지 못할 수 있다.

따라서 Cloudflare에게 사용할 Hugo 버전을 직접 지정한다.

---

**Hugo 버전 확인**

내 컴퓨터 명령 프롬프트에서:

```cmd
hugo version

```

입력한다.

예:

```text
hugo v0.125.0-xxxx+extended windows/amd64

```

여기서:

```text
0.125.0

```

부분만 확인한다.

---

**환경 변수 추가**

Cloudflare 설정 화면에서:

```text
Environment variables

```

항목을 펼친다.

추가:

변수 이름:

```text
HUGO_VERSION

```

값:

```text
0.125.0

```

입력한다.

주의:

버전 숫자는 본인의 Hugo 버전으로 변경한다.

---

### 6-6. 최초 배포 실행

**배포 시작**

설정이 완료되면:

```text
Save and Deploy

```

버튼을 클릭한다.

---

**빌드 과정 확인**

Cloudflare는 자동으로 다음 작업을 수행한다.

```text
GitHub 연결

↓

빌드 환경 준비

↓

Hugo 실행

↓

HTML 생성

↓

Cloudflare 서버 배포

```

화면에 진행 로그가 표시된다.

---

**배포 성공 확인**

정상 완료되면:

```text
Success

```

표시가 나타난다.

그리고 Cloudflare가 임시 주소를 제공한다.

예:

```text
https://my-blog.pages.dev

```

주소를 클릭한다.

Hugo 홈페이지가 정상적으로 표시되면 배포 성공이다.

---

### 6-7. 자동 배포 작동 테스트

**테스트 목적**

Cloudflare Pages 연결이 완료되면 앞으로 홈페이지 업데이트는 다음 방식으로 진행된다.

```text
글 수정

↓

GitHub 업로드

↓

Cloudflare 자동 빌드

↓

홈페이지 업데이트

```

직접 서버에 파일을 올릴 필요가 없다.

---

**테스트 글 작성**

프로젝트 폴더:

```text
my-blog/content/posts

```

이동한다.

새 파일 생성:

```text
test.md

```

내용:

```markdown
---
title: "Hugo 테스트 글"
date: 2026-08-05
draft: false
---

Hugo와 Cloudflare Pages 자동 배포 테스트입니다.

```

저장한다.

---

**GitHub 업로드**

명령 프롬프트에서:

```cmd
git add .

```

입력

```cmd
git commit -m "Add test post"

```

입력

```cmd
git push origin main

```

입력

---

**Cloudflare 자동 배포 확인**

Cloudflare Dashboard:

```text
Workers & Pages

↓

my-blog

↓

Deployments

```

이동한다.

새로운 배포 작업이 자동으로 시작된다.

완료 후:

```text
Success

```

표시를 확인한다.

---

### 6-8. 현재까지 완성된 구조

현재 홈페이지 운영 구조는 다음과 같다.

```text
사용자

↓

Markdown 글 작성

↓

Hugo

↓

Git

↓

GitHub

↓

Cloudflare Pages

↓

인터넷 홈페이지

```

---

## 7. 가비아 도메인 연결 및 원클릭 자동 배포 시스템 최종 운영

### 7-1. 개인 도메인을 연결하는 이유

**Cloudflare Pages 기본 주소의 한계**

Cloudflare Pages 배포가 완료되면 기본적으로 다음과 같은 주소가 제공된다.

예:

```text
https://my-blog.pages.dev

```

이 주소만으로도 홈페이지 운영은 가능하다.

하지만 개인 홈페이지나 블로그를 장기간 운영하려면 본인이 소유한 도메인을 사용하는 것이 좋다.

예:

```text
https://내도메인.com

```

개인 도메인을 사용하면 다음 장점이 있다.

* 홈페이지 브랜드 유지
* 검색 엔진에서 주소 변경 위험 감소
* 플랫폼 변경 시 도메인 유지 가능
* 방문자가 기억하기 쉬움

도메인은 홈페이지의 "주소"이며, Cloudflare Pages는 실제 홈페이지 파일을 제공하는 "서버 공간"이라고 이해하면 된다.

---

### 7-2. 가비아 도메인 준비

**도메인이란?**

도메인은 사람이 기억하기 쉬운 인터넷 주소이다.

컴퓨터는 실제로 IP 주소를 이용하지만, 사람은 숫자로 된 IP 주소보다 이름 형태의 주소를 사용한다.

예:

```text
IP 주소

104.xxx.xxx.xxx


↓

도메인

example.com

```

DNS 시스템이 도메인과 실제 서버를 연결해 준다.

---

**가비아 도메인 구매**

도메인이 없다면 가비아 등 도메인 등록 업체에서 구매한다.

가비아:

```text
https://www.gabia.com

```

구매 가능한 예:

```text
example.com
example.kr
example.net

```

구매 후 도메인 관리 화면에서 DNS 설정을 변경할 수 있다.

---

### 7-3. Cloudflare에 도메인 추가

**Custom Domain 설정 이유**

현재 상태:

```text
Cloudflare Pages

↓

my-blog.pages.dev

```

이것을:

```text
내 도메인

↓

Cloudflare Pages 홈페이지

```

로 연결하는 과정이다.

---

**Cloudflare Pages 도메인 추가**

Cloudflare Dashboard 접속

이동:

```text
Workers & Pages

↓

my-blog

↓

Custom domains

```

선택한다.

---

클릭:

```text
Set up a custom domain

```

입력:

```text
example.com

```

처럼 본인이 구매한 도메인을 입력한다.

---

### 7-4. Cloudflare 네임서버 변경

**네임서버란?**

네임서버는 도메인의 관리 위치를 알려주는 인터넷 주소 시스템이다.

쉽게 설명하면:

도메인 구매 업체:

```text
가비아

```

에서 구매한 주소를:

```text
Cloudflare가 관리하도록 변경

```

하는 과정이다.

변경 후:

```text
방문자

↓

도메인 입력

↓

Cloudflare DNS

↓

Cloudflare Pages

↓

Hugo 홈페이지

```

구조가 된다.

---

**Cloudflare 네임서버 확인**

Cloudflare에서 도메인을 추가하면 두 개의 네임서버를 제공한다.

예:

```text
ara.ns.cloudflare.com

george.ns.cloudflare.com

```

실제 주소는 계정마다 다르다.

반드시 Cloudflare 화면에 표시된 값을 사용한다.

---

### 7-5. 가비아 네임서버 변경

**가비아 로그인**

웹 브라우저 접속:

```text
https://www.gabia.com

```

로그인한다.

---

**도메인 관리 이동**

메뉴:

```text
My가비아

↓

도메인 관리

```

이동한다.

---

**네임서버 변경**

해당 도메인의:

```text
관리

↓

네임서버 설정

```

으로 이동한다.

기존 가비아 네임서버 대신 Cloudflare에서 제공한 네임서버를 입력한다.

예:

1차:

```text
ara.ns.cloudflare.com

```

2차:

```text
george.ns.cloudflare.com

```

저장한다.

---

### 7-6. DNS 전파 기다리기

**DNS 변경 시간**

네임서버 변경은 즉시 모든 인터넷 환경에 반영되지 않는다.

일반적으로:

* 빠르면 수 분
* 보통 수십 분
* 최대 24~48시간

정도가 걸릴 수 있다.

---

**Cloudflare 상태 확인**

Cloudflare Dashboard에서 도메인 상태를 확인한다.

정상:

```text
Active

```

표시

---

### 7-7. HTTPS(SSL) 자동 적용

**HTTPS란?**

HTTP는 인터넷 통신 방식이다.

HTTPS는 암호화 기능이 추가된 보안 통신 방식이다.

주소창:

HTTP:

```text
http://example.com

```

HTTPS:

```text
https://example.com

```

현재 대부분의 홈페이지는 HTTPS 사용이 필수이다.

---

**Cloudflare SSL 장점**

Cloudflare Pages는 도메인 연결 후 SSL 인증서를 자동으로 발급한다.

따라서 별도로:

* 인증서 구매
* 서버 설치
* 갱신 작업

을 할 필요가 없다.

---

**HTTPS 확인**

웹 브라우저 주소창에 입력:

```text
https://내도메인.com

```

확인:

* 자물쇠 아이콘 표시
* 홈페이지 정상 접속

이면 완료다.

---

### 7-8. 최종 홈페이지 운영 구조

모든 구축이 완료되면 전체 구조는 다음과 같다.

```text
                  방문자

                    ↓

               내 도메인 주소

                    ↓

             Cloudflare DNS

                    ↓

           Cloudflare Pages 서버

                    ↓

              Hugo 빌드 결과

                    ↑

                GitHub 저장소

                    ↑

                내 컴퓨터

         Markdown 작성 + Git Push

```

---

### 7-9. 실제 글 작성 및 운영 방법

**새 글 작성**

Hugo 프로젝트 이동:

```cmd
cd Documents\my-blog

```

새 글 생성:

```cmd
hugo new posts/new-post.md

```

---

**Markdown 작성**

생성된 파일:

```text
content/posts/new-post.md

```

수정한다.

예:

```markdown
---
title: "새로운 글 제목"
date: 2026-08-05
draft: false
---

본문 작성

```

---

**로컬 확인**

작성 후:

```cmd
hugo server -D

```

실행한다.

브라우저:

```text
http://localhost:1313

```

접속한다.

화면 확인 후 종료:

```text
Ctrl + C

```

---

**GitHub 업로드**

명령어 3개만 반복한다.

```cmd
git add .

```

변경 파일 준비

↓

```cmd
git commit -m "새 글 작성"

```

변경 기록 저장

↓

```cmd
git push origin main

```

GitHub 업로드

---

**자동 배포 확인**

이후 과정:

```text
GitHub 변경 감지

↓

Cloudflare Pages 실행

↓

Hugo 자동 빌드

↓

홈페이지 업데이트

```

사용자는 Cloudflare에 접속하거나 서버 파일을 관리할 필요가 없다.

---

### 7-10. 초보자가 자주 발생시키는 오류

**글이 홈페이지에 나오지 않는 경우**

확인:

```markdown
draft: false

```

인지 확인한다.

`draft: true`이면 임시 저장 상태이다.

---

**Cloudflare 배포 실패**

확인 순서:

1. Hugo Extended 설치 여부

```cmd
hugo version

```

확인

2. `extended` 표시 확인
3. Cloudflare:

```text
HUGO_VERSION

```

확인

---

**테마 오류**

확인:

```text
themes/테마명

```

폴더 존재 여부 확인

Git Submodule 방식이면:

```cmd
git submodule update --init --recursive

```

실행한다.

---

**도메인 연결 실패**

확인:

* 가비아 네임서버 변경 여부
* Cloudflare 도메인 상태
* DNS 전파 시간

확인

---

### 7-11. 구축 완료 체크리스트

**환경 구축**

☑ Git 설치 완료
☑ Hugo Extended 설치 완료
☑ VS Code 설치 완료
☑ GitHub 계정 생성 완료

---

**Hugo 제작**

☑ Hugo 사이트 생성
☑ 테마 적용
☑ hugo.toml 설정
☑ 로컬 테스트 성공

---

**GitHub 연동**

☑ Repository 생성
☑ `.gitignore` 작성
☑ Commit 완료
☑ Push 완료

---

**자동 배포**

☑ Cloudflare Pages 연결
☑ Hugo 빌드 설정
☑ HUGO_VERSION 설정
☑ 최초 배포 성공

---

**도메인 연결**

☑ 가비아 도메인 준비
☑ Cloudflare 네임서버 변경
☑ DNS 활성화
☑ HTTPS 적용 완료

---

### 7-12. 최종 정리

Hugo 기반 홈페이지 구축은 처음에는 여러 도구가 연결되어 복잡해 보인다.

하지만 실제 구조는 단순하다.

```text
Markdown 작성

↓

Hugo가 홈페이지 생성

↓

Git이 변경 기록 관리

↓

GitHub가 파일 저장

↓

Cloudflare Pages가 자동 배포

↓

개인 도메인으로 공개

```

한 번 구축한 이후의 운영 과정은 매우 단순하다.

앞으로 필요한 작업은 대부분:

1. Markdown 작성
2. Git 업로드

두 단계뿐이다.

서버 관리, HTML 제작, 데이터베이스 관리 없이 장기간 안정적으로 운영할 수 있는 구조가 완성된다.

---

전체 문서 변환 작업이 완료되었다.