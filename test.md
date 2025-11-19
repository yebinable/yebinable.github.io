---
layout: default
title: Home
---

# 테스트 페이지

이것이 보인다면 Jekyll이 작동하는 것입니다!

{% if site.posts.size > 0 %}
## 포스트 목록

{% for post in site.posts limit:3 %}
- [{{ post.title }}]({{ post.url }}) - {{ post.date | date: "%Y-%m-%d" }}
{% endfor %}
{% else %}
포스트가 없습니다.
{% endif %}
