---
title: "VS Code 생산성을 높이는 확장 프로그램 10선"
date: 2024-01-25
tags: [VSCode, Tools, Productivity]
description: "개발 생산성을 크게 향상시켜주는 VS Code 필수 확장 프로그램들을 소개합니다."
---

VS Code는 확장 프로그램을 통해 무한한 가능성을 가진 에디터입니다. 제가 실제로 사용하는 필수 확장들을 소개합니다.

## 1. GitHub Copilot

AI 기반 코드 자동완성 도구입니다.

**주요 기능:**
- 실시간 코드 제안
- 주석으로 코드 생성
- 다양한 언어 지원

**설치:**
```
ext install GitHub.copilot
```

## 2. Prettier

코드 포맷터로 일관된 코드 스타일을 유지합니다.

**주요 기능:**
- 자동 코드 포맷팅
- 저장 시 자동 실행
- 다양한 언어 지원

**설정 예시:**
```json
{
  "editor.formatOnSave": true,
  "prettier.singleQuote": true,
  "prettier.trailingComma": "es5"
}
```

## 3. ESLint

JavaScript 코드 품질을 검사하고 문제를 찾아줍니다.

**장점:**
- 잠재적 버그 발견
- 코딩 컨벤션 강제
- 자동 수정 기능

## 4. GitLens

Git을 더 강력하게 사용할 수 있게 해줍니다.

**주요 기능:**
- 각 라인의 Git blame 정보
- 파일 히스토리 조회
- 커밋 비교

코드 작성자와 변경 이유를 즉시 확인할 수 있어 협업에 매우 유용합니다.

## 5. Live Server

정적 웹 페이지를 실시간으로 미리볼 수 있습니다.

**특징:**
- 자동 새로고침
- 간편한 실행
- 로컬 서버 제공

## 6. Auto Rename Tag

HTML/XML 태그를 자동으로 동기화합니다.

```html
<!-- 시작 태그를 수정하면 -->
<div></div>
<!-- 종료 태그도 자동으로 변경 -->
```

## 7. Path Intellisense

파일 경로를 자동완성해줍니다.

**장점:**
- 오타 방지
- 빠른 파일 찾기
- 상대 경로 지원

## 8. Better Comments

주석을 더 읽기 쉽게 만들어줍니다.

```javascript
// ! 중요한 주의사항
// ? 질문이나 의문점
// TODO: 해야 할 일
// * 강조할 내용
```

## 9. Error Lens

에러와 경고를 코드 라인에 바로 표시합니다.

**효과:**
- 즉각적인 피드백
- 에러 빠르게 발견
- 개발 속도 향상

## 10. Thunder Client

VS Code 내에서 API 테스트를 할 수 있습니다.

**특징:**
- Postman 대안
- 가벼운 용량
- 에디터 내 통합

## 보너스: 테마 추천

### One Dark Pro
```
ext install zhuangtongfa.Material-theme
```

### Material Icon Theme
```
ext install PKief.material-icon-theme
```

## 생산성 팁

### 단축키 커스터마이징

`Ctrl+K Ctrl+S`로 단축키를 자주 사용하는 명령어에 맞게 설정하세요.

### 작업 공간 설정

프로젝트별로 다른 설정을 사용하려면 `.vscode/settings.json`을 활용하세요.

```json
{
  "editor.tabSize": 2,
  "files.exclude": {
    "**/.git": true,
    "**/node_modules": true
  }
}
```

## 마무리

이 확장 프로그램들을 설치하고 나면 VS Code가 훨씬 더 강력한 IDE로 변신합니다. 자신의 워크플로우에 맞는 확장들을 찾아 생산성을 높여보세요!
