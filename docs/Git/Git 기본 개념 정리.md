---
layout: default
title: Git 기본 개념 정리
parent: Git
---

# Git 기본 개념 정리

---

- 참고자료
  - [Git - Reference (git-scm.com)](https://git-scm.com/docs)
  - [누구나 쉽게 이해할 수 있는 Git 입문~버전 관리를 완벽하게 이용해보자~ | Backlog](https://backlog.com/git-tutorial/kr/)

---

## Git 과 SVN 의 차이



### 1. 사용 환경 비교

| 구분          | SVN                                                          | Git                                        |
| ------------- | ------------------------------------------------------------ | ------------------------------------------ |
| 사용 환경     | SI 프로젝트와 같이 한번 개발이 완료된 이후에는 버그 수정 정도의 변경만 있을 경우 | 주기적으로 변경/배포 되는 사항이 있을 경우 |
| 데이터 핸들링 | 최초 1회에 한해 파일 원본을 저장하고, 이후에는 실제 파일이 아닌 원본과의 '차이점'을 저장하는 방식 | 버전별(시간별)로 Snapshot을 찍는 개념      |



### 2. Remote Repository 저장 방식의 차이

- SVN은 Remote Repository에 다이렉트로 Commit 하는 반면, Git은 자신의 Local Repository에 Commit 후, Push/Pull 커멘드를 통해 Remote에 접근 함.
- Git은 Local Repository를 사용함으로써, 오프라인에서 인터넷 연결 없이 작업이 가능함 

![image-20210616130132201](C:\Users\최예빈\AppData\Roaming\Typora\typora-user-images\image-20210616130132201.png)

![image-20210609092308608](C:\Users\최예빈\AppData\Roaming\Typora\typora-user-images\image-20210609092308608.png)



### 3. 커멘드로 보는 Git 협업 방식

- Github / Gitlab (분산 버전 관리 툴인 Git저장소 호스팅을 지원하는 웹 서비스) 에서 Remote Repository를 생성
- Cmd 창에서 자신의 로컬 Git Repository를 폴더를 열고 `git clone <Remote-Repository url>`을 사용해 Repository를 로컬 Repo에 복사
- `git branch <branch-name>` : 명령어를 사용하여 작업자1, 2, 3 별로 브랜치를 자신의 로컬에 생성
- `git checkout <branch-name>`:  명령어를 사용하여 자신이 생성한 브랜치에 체크아웃
  - `git checkout -b <branch-name>` : `-b` 옵션을 추가하면 `git branch & git checkout`을 한꺼번에 진행할 수 있음
- 열심히 코드 작업 中
- `git add .` : 열심히 작업한 코드를 Local Staging Area에 모두(.) 추가 
  -  `git add <file-name>` 은 단일 파일을 추가할 수 있음
- `git commit -m "commit 메시지"` : Staging Area에 추가 된 파일들을 커밋 메시지와 함께 자신의 Local Repository 에 추가
- `git push --set-upstream <origin> <branch-name> ` : 로컬에 생성한 브랜치를 Remote Repo에도 생성하고, 이 브랜치에 `checkout` 한 이후에 `git pull` 등의 명령어를 사용하면 해당 remote branch에서 데이터를 당겨옴
- 브랜치에서의 모든 코드 작업이 끝남
- `git checkout <master-branch-name>` : 현재  Head를 Master 브랜치(메인 줄기)로 변경
- `git merge <branch-name>`: Master 브랜치에 체크아웃한 후에 merge를 통해 합침
  - `git rebase <branch-name>` : 깃 히스토리를 정리해주는 개념으로, 해당 브랜치의 베이스를 재정의 한다는 의미, `rebase` 후 `merge` 하면 깔끔한 히스토리가 만들어짐 
  -  [Git Merge와 Rebase의 차이, 아름다운고 깔끔한 Git History 만들기. (tistory.com)](https://firework-ham.tistory.com/12)

![image-20210609105818957](C:\Users\최예빈\AppData\Roaming\Typora\typora-user-images\image-20210609105818957.png)

