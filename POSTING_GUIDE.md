# Jekyll 블로그 포스팅 가이드

Gerous 스타일의 Jekyll 블로그가 완성되었습니다! 이제 포스팅하는 방법을 알아보겠습니다.

## 📝 블로그 포스트 작성 방법

### 1. 파일 위치와 이름 규칙

블로그 포스트는 **`_posts` 폴더**에 작성합니다.

**파일명 규칙 (필수!):**
```
YYYY-MM-DD-제목.md
```

**예시:**
- ✅ `2024-01-15-jekyll-blog-start.md`
- ✅ `2024-03-20-react-hooks-guide.md`
- ✅ `2025-11-19-my-first-post.md`
- ❌ `jekyll-blog.md` (날짜 없음 - 안됨!)
- ❌ `2024-1-5-post.md` (월, 일이 한 자리 - 안됨!)

### 2. Front Matter (머리말)

모든 포스트는 **Front Matter**로 시작해야 합니다.

```yaml
---
title: "포스트 제목"
date: 2024-01-15
tags: [Jekyll, Blog, Tutorial]
description: "포스트에 대한 간단한 설명"
---
```

**필수 항목:**
- `title`: 포스트 제목
- `date`: 작성 날짜 (YYYY-MM-DD)

**선택 항목:**
- `tags`: 태그 배열 (카테고리 분류용)
- `description`: 포스트 설명 (SEO, 목록 페이지에 표시)

### 3. 완전한 포스트 예시

**파일명:** `_posts/2024-01-15-my-first-post.md`

```markdown
---
title: "내 첫 번째 포스트"
date: 2024-01-15
tags: [일상, 블로그]
description: "Jekyll 블로그의 첫 포스트입니다."
---

## 안녕하세요!

이것은 제 첫 번째 블로그 포스트입니다.

### 마크다운 사용하기

**굵은 글씨**, *기울임*, `코드`를 사용할 수 있습니다.

### 코드 블록

\```javascript
function hello() {
  console.log("Hello, World!");
}
\```

### 리스트

- 항목 1
- 항목 2
- 항목 3

### 이미지

![이미지 설명](/images/sample.jpg)

### 링크

[구글](https://google.com)로 이동하기
```

## 🎨 마크다운 문법 가이드

### 제목
```markdown
# H1 제목
## H2 제목
### H3 제목
```

### 강조
```markdown
**굵게**
*기울임*
~~취소선~~
`인라인 코드`
```

### 링크와 이미지
```markdown
[링크 텍스트](https://example.com)
![이미지 alt](이미지경로.jpg)
```

### 리스트
```markdown
# 순서 없는 리스트
- 항목 1
- 항목 2
  - 하위 항목

# 순서 있는 리스트
1. 첫 번째
2. 두 번째
3. 세 번째
```

### 코드 블록
````markdown
```언어이름
코드 내용
```
````

**예시:**
````markdown
```python
def hello():
    print("Hello, World!")
```
````

### 인용구
```markdown
> 이것은 인용구입니다.
> 여러 줄도 가능합니다.
```

### 수평선
```markdown
---
```

## 🚀 로컬에서 테스트하기

포스트를 작성한 후 로컬에서 확인하세요:

### 1. 필수 프로그램 설치

**Ruby 설치 (Windows):**
- [RubyInstaller](https://rubyinstaller.org/)에서 Ruby+Devkit 다운로드
- 설치 후 `ridk install` 실행 (옵션 1, 2, 3 모두 선택)

**Jekyll 설치:**
```powershell
gem install jekyll bundler
```

### 2. 프로젝트 디렉토리로 이동

```powershell
cd d:\YEBIN\devsrc\yebinable.github.io
```

### 3. 의존성 설치

```powershell
bundle install
```

### 4. 로컬 서버 실행

```powershell
bundle exec jekyll serve
```

### 5. 브라우저에서 확인

```
http://localhost:4000
```

포스트 수정 후 저장하면 자동으로 새로고침됩니다!

## 📤 GitHub Pages에 배포하기

### 방법 1: 직접 푸시

```bash
git add .
git commit -m "feat: 새 포스트 추가"
git push origin main
```

몇 분 후 `https://yebinable.github.io`에서 확인!

### 방법 2: Obsidian Git (자동)

Obsidian Git 플러그인을 사용 중이라면:
1. 포스트 작성/저장
2. 10분 후 자동으로 커밋 & 푸시 ✅

## 📂 프로젝트 구조

```
yebinable.github.io/
├── _posts/              # 📝 블로그 포스트 (여기에 작성!)
│   ├── 2024-01-15-first-post.md
│   └── 2024-01-20-second-post.md
├── _layouts/            # 레이아웃 템플릿
│   ├── default.html
│   └── post.html
├── assets/              # CSS, JS, 이미지
│   ├── css/
│   │   └── main.css
│   └── js/
│       └── main.js
├── images/              # 이미지 파일
├── _config.yml          # 사이트 설정
├── index.html           # 홈페이지
├── archive.html         # 전체 글 목록
├── tags.html            # 태그 페이지
├── about.html           # 소개 페이지
└── Gemfile              # Ruby 의존성
```

## 🎯 포스팅 체크리스트

포스트 작성 전 확인사항:

- [ ] 파일명이 `YYYY-MM-DD-제목.md` 형식인가?
- [ ] Front Matter가 올바르게 작성되었나?
- [ ] 제목(title)이 있나?
- [ ] 날짜(date)가 있나?
- [ ] 태그(tags)를 추가했나?
- [ ] 로컬에서 테스트했나?
- [ ] 마크다운 문법이 올바른가?
- [ ] 이미지 경로가 맞나?

## 💡 유용한 팁

### 1. 이미지 추가하기

```markdown
# 절대 경로
![설명](/images/my-image.jpg)

# 상대 경로
![설명](../images/my-image.jpg)
```

이미지는 `images/` 폴더에 저장하세요.

### 2. 초안(Draft) 작성하기

아직 발행하고 싶지 않은 글은 `_drafts` 폴더에:

```
_drafts/
└── work-in-progress.md  # 날짜 없이 작성
```

초안을 포함해서 미리보기:
```powershell
bundle exec jekyll serve --drafts
```

### 3. 여러 태그 사용하기

```yaml
---
tags: [Jekyll, Ruby, Web, Tutorial, Blog]
---
```

### 4. 발췌문(Excerpt) 조절하기

기본적으로 첫 문단이 발췌문으로 표시됩니다.
수동으로 설정하려면:

```markdown
---
excerpt: "이 부분이 목록에 표시됩니다."
---
```

## 🆘 문제 해결

### "bundle exec jekyll serve" 오류

```powershell
# 의존성 재설치
bundle install

# 캐시 삭제
bundle exec jekyll clean
```

### 포스트가 표시되지 않음

1. 파일명 형식 확인 (`YYYY-MM-DD-제목.md`)
2. Front Matter 확인
3. 날짜가 미래가 아닌지 확인
4. `_posts` 폴더에 있는지 확인

### 로컬에서는 되는데 GitHub Pages에서 안됨

- GitHub Pages는 몇 분의 빌드 시간 필요
- Actions 탭에서 빌드 로그 확인
- 플러그인 호환성 확인

## 🎓 더 알아보기

- [Jekyll 공식 문서](https://jekyllrb.com/docs/)
- [GitHub Pages 문서](https://docs.github.com/pages)
- [마크다운 가이드](https://www.markdownguide.org/)

---

**이제 시작하세요!** 🚀

첫 포스트를 작성하고 `git push`하면 여러분의 기술 블로그가 세상에 공개됩니다!
