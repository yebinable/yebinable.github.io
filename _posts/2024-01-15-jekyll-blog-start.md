---
title: "Jekyll 블로그 시작하기"
date: 2024-01-15
tags: [Jekyll, Blog, Tutorial]
description: "Jekyll로 GitHub Pages 블로그를 만드는 방법을 알아봅니다."
---

Jekyll은 정적 사이트 생성기로, GitHub Pages와 완벽하게 통합되어 무료로 블로그를 호스팅할 수 있습니다.

## Jekyll이란?

Jekyll은 Ruby 기반의 정적 사이트 생성기입니다. 마크다운 파일로 글을 작성하면 자동으로 HTML 페이지로 변환해줍니다.

### 주요 특징

- **간편한 글 작성**: 마크다운으로 편하게 작성
- **무료 호스팅**: GitHub Pages로 무료 배포
- **커스터마이징**: 테마와 레이아웃을 자유롭게 수정
- **빠른 속도**: 정적 페이지로 빠른 로딩

## 설치 방법

Jekyll을 사용하려면 Ruby가 필요합니다:

```bash
# Ruby 설치 확인
ruby -v

# Jekyll 설치
gem install jekyll bundler

# 새 사이트 생성
jekyll new my-blog
cd my-blog

# 로컬 서버 실행
bundle exec jekyll serve
```

## 블로그 포스트 작성하기

`_posts` 폴더에 마크다운 파일을 생성합니다. 파일명은 반드시 `YYYY-MM-DD-제목.md` 형식을 따라야 합니다.

### Front Matter

모든 포스트는 Front Matter로 시작해야 합니다:

```yaml
---
title: "포스트 제목"
date: 2024-01-15
tags: [태그1, 태그2]
---
```

## GitHub Pages 배포

1. GitHub에서 `username.github.io` 이름의 저장소 생성
2. 로컬 Jekyll 사이트를 푸시
3. Settings > Pages에서 배포 설정

몇 분 후 `https://username.github.io`에서 블로그를 확인할 수 있습니다!

## 마무리

Jekyll은 개발자에게 완벽한 블로그 플랫폼입니다. 버전 관리, 마크다운 작성, 무료 호스팅까지 모두 가능합니다.
