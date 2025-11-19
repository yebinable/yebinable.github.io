---
title: "Git 커밋 메시지 작성 규칙"
date: 2024-01-20
tags: [Git, Convention, Best-Practice]
description: "좋은 Git 커밋 메시지를 작성하는 방법과 컨벤션을 알아봅니다."
---

좋은 커밋 메시지는 프로젝트 히스토리를 이해하기 쉽게 만들고, 협업을 원활하게 합니다.

## 커밋 메시지 구조

일반적인 커밋 메시지는 다음과 같은 구조를 가집니다:

```
<type>: <subject>

<body>

<footer>
```

### Type (타입)

커밋의 성격을 나타냅니다:

- **feat**: 새로운 기능 추가
- **fix**: 버그 수정
- **docs**: 문서 수정
- **style**: 코드 포맷팅, 세미콜론 누락 등
- **refactor**: 코드 리팩토링
- **test**: 테스트 코드
- **chore**: 빌드 업무, 패키지 매니저 설정 등

### Subject (제목)

- 50자 이내로 작성
- 명령형으로 작성 (Add, Fix, Update)
- 첫 글자는 대문자
- 마침표 없음

### Body (본문)

- 제목과 본문 사이 한 줄 공백
- 무엇을, 왜 변경했는지 설명
- 어떻게 변경했는지는 코드로 알 수 있으므로 생략

## 좋은 예시

```bash
feat: 사용자 프로필 페이지 추가

사용자가 자신의 정보를 확인하고 수정할 수 있는
프로필 페이지를 구현했습니다.

- 프로필 조회 API 연동
- 프로필 수정 기능
- 비밀번호 변경 기능

Closes #123
```

## 나쁜 예시

```bash
# 너무 모호함
update code

# 너무 많은 변경사항
feat: 로그인 기능 추가하고 회원가입 수정하고 버그 수정

# 설명 부족
fix: bug
```

## Conventional Commits

[Conventional Commits](https://www.conventionalcommits.org/)는 커밋 메시지의 표준화된 규칙입니다.

```bash
<type>[optional scope]: <description>

[optional body]

[optional footer(s)]
```

이 규칙을 따르면:
- 자동화된 CHANGELOG 생성 가능
- Semantic Versioning 자동 결정
- 변경사항을 쉽게 파악

## 실전 팁

### 1. 작은 단위로 커밋

하나의 커밋은 하나의 논리적 변경사항만 포함해야 합니다.

```bash
# 좋음
git commit -m "feat: 로그인 API 추가"
git commit -m "feat: 로그인 UI 구현"

# 나쁨
git commit -m "feat: 로그인 기능 전체 구현"
```

### 2. Commitizen 사용

Commitizen을 사용하면 대화형으로 커밋 메시지를 작성할 수 있습니다:

```bash
npm install -g commitizen
commitizen init cz-conventional-changelog --save-dev --save-exact
```

### 3. Git Hooks 활용

Husky로 커밋 메시지 규칙을 자동으로 검증:

```bash
npm install --save-dev husky @commitlint/cli @commitlint/config-conventional
```

## 마무리

좋은 커밋 메시지는 팀 협업의 기본입니다. 규칙을 정하고 일관성 있게 작성하는 습관을 들이세요!
