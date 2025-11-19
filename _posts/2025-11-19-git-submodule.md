---
title: Git Submodule로 하나의 Obsidian Vault에서 여러 개의 git repository 관리하기
date: 2025-11-19
tags:
  - git
  - obsidian
description:
---
## 문제 상황 
GitHub로 기술 블로그(Wiki)를 만들고 싶고, Obsidian으로 편하게 관리하고 싶었다. 하지만 다음과 같은 요구사항이 있었다:
- **비공개 노트**: 업무 내용, 개인 메모, 작성 중인 초안은 Private으로 관리
- **공개 블로그**: 완성된 기술 문서는 GitHub Pages(`username.github.io`)로 공개
- **단일 Vault**: Obsidian에서 하나의 Vault로 모든 노트를 한 화면에서 관리
- **자동 Git 푸시**: 파일 저장하면 자동으로 각 저장소에 커밋/푸시
### 시도한 방법들과 문제점

**방법 1: 심볼릭 링크**
- Public 저장소를 심볼릭 링크로 연결
- 문제: Public 폴더 수정 시 일일이 해당 폴더로 가서 수동으로 커밋/푸시해야 함
- 문제: Obsidian Git이 심볼릭 링크 내부를 자동으로 처리하지 못함

**방법 2: Vault 2개 분리**
- Private Vault와 Public Vault를 완전히 분리
- 문제: Vault를 전환해야 해서 불편함
- 문제: Private와 Public 노트를 동시에 볼 수 없음

**방법 3: `.gitignore`로 제외**
- 하나의 Public 저장소에서 특정 폴더만 `.gitignore`로 제외
- 문제: 실수로 비공개 내용이 Public에 올라갈 위험
- 문제: Private 내용이 Git 히스토리에 남을 수 있음
## 원인 분석
Obsidian은 **파일 시스템 기반**이고, Git은 **저장소 단위**로 동작한다.
### 필요한 조건
1. Private와 Public이 **완전히 분리된 Git 저장소**여야 함
2. Obsidian에서는 **하나의 Vault**로 보여야 함  
3. Obsidian Git이 **각 저장소를 독립적으로 자동 커밋/푸시**해야 함
## 해결 방법 
### Git Submodule
Git Submodule은 하나의 Git 저장소 안에 다른 Git 저장소를 포함시키는 기능이다.
### 최종 구조

```
notes/ (Private Repository)
├── .git/                      ← Private 저장소
├── .gitmodules                ← Submodule 설정 파일
├── .obsidian/                 ← Obsidian 설정
├── private/                   ← 비공개 노트
│   ├── inbox/
│   ├── work/
│   └── life/
└── yebinable.github.io/       ← Public Repository (Submodule)
    ├── .git/                  ← Public 저장소 (독립적)
    ├── tech/
    └── README.md
```

### 설정 과정
#### 1. GitHub 저장소 생성
	
	**Private 저장소:**
	- Repository name: `notes`
	- Visibility: **Private**
	
	**Public 저장소:**
	- Repository name: `yebinable.github.io`
	- Visibility: **Public**

#### 2. Private 저장소 클론

```bash
git clone https://github.com/yebinable/notes.git
cd notes
```

#### 3. Public 저장소를 Private 저장소의 Submodule로 추가

```bash
# Submodule 추가
git submodule add https://github.com/yebinable/yebinable.github.io.git yebinable.github.io

# 커밋
git add .gitmodules yebinable.github.io
git commit -m "Add public wiki as submodule"
git push
```
#### 4. Obsidian 설정

1. **Vault 열기**: `yebinable-private` 폴더를 Vault로 열기
2. **Obsidian Git 플러그인 설치**
3. **중요 설정:**
   ```
   Settings → Obsidian Git → Advanced
   → ✅ Update submodules (반드시 체크!)
   
   Vault backup interval: 1분
   Auto pull interval: 1분
   ```

### 작동 원리

Obsidian Git의 "Update submodules" 옵션이 이 두 단계를 자동으로 처리한다.
#### Private 노트 작성 시
```
private/work/보안-취약점.md 작성 및 저장
→ 10분 후 Obsidian Git 자동 실행
→ yebinable-private 저장소에 커밋 & 푸시 ✅
```
#### Public 노트 작성 시
```
yebinable.github.io/tech/Git-정리.md 작성 및 저장
→ 10분 후 Obsidian Git 자동 실행
→ 1단계: yebinable.github.io 내부 커밋 & 푸시 ✅
→ 2단계: yebinable-private에서 참조 업데이트 & 푸시 ✅
```
### 다른 환경에서 클론 시

```bash
# Submodule까지 함께 클론
git clone --recursive https://github.com/yebinable/yebinable-private.git

# 또는 이미 클론했다면
git submodule init
git submodule update
```