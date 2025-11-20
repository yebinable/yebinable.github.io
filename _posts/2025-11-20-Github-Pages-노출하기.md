---
layout: post
title: Google 검색에 내 Github Pages 노출하기
date: 2025-11-20
tags: [github-pages, google]
description: 구글 검색에 내 GitHub Pages를 노출하고 싶어서 `Perplexity` 검색 도움을 받아 다음과 같이 설정해보고 정리해보았습니다.
image: /Attachments/2025-11-20-Github-Pages-노출하기/2025-11-20-Github-Pages-노출하기-1763633181615.png
---

구글 검색에 내 GitHub Pages를 노출하고 싶어서 `Perplexity` 검색 도움을 받아 다음과 같이 설정하고 정리해보았다.

 구글 검색 노출을 위해 해야 할 주요 설정은 다음과 같다.

1. **Google Search Console에 사이트 등록 및 소유권 확인**
    - 내 GitHub Pages 주소를 Google Search Console에 등록하고, 제공하는 HTML 소유권 확인 파일을 다운로드 받아 GitHub 저장소 루트에 업로드해 소유권을 인증합니다.

2. **sitemap.xml 파일 생성 및 업로드** 및 **Google Search Console에 sitemap 제출**
    - 사이트의 각 페이지 위치를 알리는 sitemap.xml 파일을 만들어 GitHub 저장소 루트에 추가합니다. 이 파일은 Google이 사이트 구조를 쉽게 파악하도록 돕습니다.
    - Google Search Console에서 sitemap.xml 파일을 제출해 사이트 색인을 활성화합니다.

3. **robots.txt 파일 생성 및 업로드**
    - robots.txt 파일을 만들어 모든 검색 엔진에 사이트 접근을 허용하고 sitemap 위치를 명시합니다.

4. **사이트 메타태그 및 SEO 최적화**
    - Jekyll을 사용하는 경우 jekyll-seo-tag 플러그인 설정 등으로 메타태그를 추가해 검색 노출을 개선합니다.

나의 경우 Jekyll을 사용하여 블로그를 생성했기 때문에, Jekyll의 플러그인을 사용하여 아래 항목들은 손쉽게 해결했다.
 - sitemap
 - SEO
 - RSS feed

![|500x486](yebinable.github.io/Attachments/2025-11-20-Github-Pages-노출하기/Google%20검색에%20내%20Github%20Pages%20노출하기-1763629649956.png)

# 1. **Google Search Console에 사이트 등록 및 소유권 확인**

![|500x409](yebinable.github.io/Attachments/2025-11-20-Github-Pages-노출하기/Google%20검색에%20내%20Github%20Pages%20노출하기-1763627951078.png)

## `github.io` 를 등록할 때는 `URL 접두어` 방식을 선택

- **왜?** GitHub Pages는 GitHub가 소유한 도메인을 사용할 권한만 있고, **도메인 관리 권한은 없기 때문**

- 도메인 속성은 DNS 레코드를 직접 수정해야 하는데, `github.io`는 GitHub 소유라서 DNS 설정을 할 수가 없음

## 파일 다운로드 후 GitHub Pages의 최상단 폴더에 업로드

![|934x516](yebinable.github.io/Attachments/2025-11-20-Github-Pages-노출하기/Google%20검색에%20내%20Github%20Pages%20노출하기-1763627913969.png)

- 이후 [완료] 버튼을 누르면 아래와 같이 `소유권이 확인됨`
![|500x453](yebinable.github.io/Attachments/2025-11-20-Github-Pages-노출하기/Google%20검색에%20내%20Github%20Pages%20노출하기-1763627935158.png)

# 2.  **sitemap.xml 파일 생성 및 업로드** 및 **Google Search Console에 sitemap 제출**

![|500x335](yebinable.github.io/Attachments/2025-11-20-Github-Pages-노출하기/Google%20검색에%20내%20Github%20Pages%20노출하기-1763628550268.png)

- 앞서 말했다시피, Sitemap은 Jekyll을 사용하여 손쉽게 생성되었기에 사이트맵 주소만 Google Search Console에 추가하면 된다.

# 3. robots.txt 파일 생성 및 업로드

- robots.txt 파일 생성은 간단하다 아래와 같은 내용으로 파일을 만든 후 root(최상단)에 파일을 추가해주면 된다.

```
﻿User-agent: *
Allow: /

Sitemap: https://yebinable.github.io/sitemap.xml
```

# 4. **사이트 메타태그 및 SEO 최적화**

- Jekyll 플러그인을 이용해 손쉽게 적용할 수 있다.
- Jekyll-seo-tag 플러그인이 front matter와 config.yml의 정보를 기반으로 다음 메타태그들을 자동으로 생성한다.
	- 페이지 타이틀과 사이트 타이틀
	- 메타 description
	- Canonical URL (중복 콘텐츠 방지)
	- JSON-LD 구조화 데이터 (리치 스니펫용)
	- 이전/다음 페이지 URL (페이지네이션)
	...
	
- 이 방법을 사용하면 수동으로 메타태그를 작성할 필요 없이 Jekyll이 자동으로 SEO에 최적화된 메타태그를 생성하므로, front matter에 기본 정보만 잘 작성하면 된다.

## **레이아웃 파일에 태그 추가**

- `_layouts/default.html`의 `<head>` 섹션에 `{% seo %}` 태그를 삽입

```html
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  {% seo %}
</head>
```

## `_config.yml` 에 사이트 전체 SEO 설정

```yml
title: "사이트 제목"
description: "사이트 설명"
author: "작성자 이름"
email: "your@email.com"
url: "https://yourusername.github.io"
locale: ko_KR

# 소셜 미디어 프로필
social:
  name: "작성자 이름"
  links:
    - https://github.com/yourusername
    - https://twitter.com/yourusername
```

## 각 포스트 별 개별 메타 데이터 설정 (front matter)

```text
---
layout: post
title: "포스트 제목"
description: "포스트 설명 (메타 description으로 사용)"
date: 2025-11-19
author: "작성자 이름"
tags: [git, obsidian]
image: /assets/images/post-thumbnail.jpg
---

본문 입니다.

```


# 참고자료 

[구글-Search Console 시작하기](https://support.google.com/webmasters/answer/10267942?hl=ko&ref_topic=10265228&sjid=15336440516382272933-NC)
