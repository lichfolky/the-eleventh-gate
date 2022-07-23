---
layout: base.njk
title: Home
eleventyNavigation:
  key: Home
  order: 1
---

# {{ title }}

Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita aut voluptatibus natus libero quisquam! Atque corporis animi cupiditate! Culpa est quasi, illo eveniet tempora tempore optio hic dolore nesciunt excepturi!

## Posts:

{%- for post in collections.posts reversed -%}

<article>
  <a href={{post.url}}>
  {{ post.data.title }}</a>
  {{ post.templateContent  }}
</article>

{%- endfor -%}
