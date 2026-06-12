# 다른 PC에서 이 웹사이트 수정 · 발행하기

이 사이트는 **Astro**로 만들었고, **GitHub Pages**로 발행됩니다.
핵심: **`git push` 하면 자동으로 인터넷에 발행됩니다.** (발행 버튼 없음)

- 저장소: https://github.com/CHLTAESUN/CHLTAESUN.github.io
- 사이트 주소: https://chltaesun.github.io

---

## 1. 처음 한 번만 — 새 PC 준비

1. **Git 설치** → https://git-scm.com
2. **Node.js 설치** (LTS 버전) → https://nodejs.org

설치 후 PowerShell을 새로 열고, 원하는 폴더에서:

```powershell
git clone https://github.com/CHLTAESUN/CHLTAESUN.github.io.git
cd CHLTAESUN.github.io
npm install
```

> `git push`를 처음 할 때 GitHub 로그인 창이 뜹니다. GitHub 계정으로 로그인하면 됩니다.

---

## 2. 매번 작업할 때 순서 (이것만 지키면 됨)

```powershell
# (1) 작업 시작 전 — 최신 내용 받기 (중요!)
git pull

# (2) 미리보기 켜기 — 고치는 즉시 브라우저에 반영됨
npm run dev
#  → 화면에 뜨는 http://localhost:4321 주소를 브라우저에서 열기

# (3) 파일 수정 (src/ 폴더 안)

# (4) 다 됐으면 저장 + 발행
git add -A
git commit -m "무엇을 바꿨는지 한 줄"
git push
```

`git push` 후 약 1~2분 뒤 https://chltaesun.github.io 에 반영됩니다.

---

## 3. 꼭 지킬 규칙 (PC 두 대 오갈 때 충돌 방지)

- **작업 시작 전 항상 `git pull` 먼저.** 안 하면 두 PC 내용이 어긋나서 충돌남.
- **작업 끝나면 항상 `git push`.** 안 하면 다른 PC에서 최신본을 못 받음.
- 즉: **시작 = pull, 끝 = push.** 이 두 개만 습관 들이면 됨.

---

## 어디를 고치나? (자주 쓰는 파일)

| 바꾸고 싶은 것        | 파일 |
|----------------------|------|
| 상품 목록/내용       | `src/data/products.json` |
| 첫 화면              | `src/pages/index.astro` |
| 소개 페이지          | `src/pages/about.astro` |
| 자주 묻는 질문       | `src/pages/faq.astro` |
| 연락처              | `src/pages/contact.astro` |
| 상단 메뉴 / 하단     | `src/components/Header.astro`, `Footer.astro` |
| 전체 색/글꼴 등 스타일 | `src/styles/global.css` |
| 가게 이름·연락처 설정 | `src/config.js` |
