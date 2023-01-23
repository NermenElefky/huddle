# Frontend Mentor - Huddle landing page with alternating feature blocks solution

This is a solution to the [Huddle landing page with alternating feature blocks challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/huddle-landing-page-with-alternating-feature-blocks-5ca5f5981e82137ec91a5100). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)


## Overview
Huddle landing page with alternating feature blocks.

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- JavaScript
- CSS Grid

### What I learned

I learn how to make div visible while scrolling.

here is the code :
  <div><img src = "anything"></div>

  <!-- styles -->
  <style>
      div{
        position:fixed;
        width:400px;
        max-width:100%;
        transform:translateX(200%);
        transition:1s;
      }
  </style>

  <!-- JS -->
  <script>
    let d  =document.querySelector("div");
          window.onscroll = function (){
              if (window.scrollY >= d.offsetTop){
                  d.style.transform = "translateX(0%)";
              }
      }
  </script>


## Author
- Frontend Mentor - [@NermenElefky](https://www.frontendmentor.io/profile/NermenElefky)


