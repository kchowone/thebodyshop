"use strict";
let headerBox = document.querySelector('#headerBox')
let li_seletor = document.querySelectorAll('.head_li');
let cate_show = document.querySelectorAll('.menu_bg')

// console.log(cate_show)

//  헤더 메뉴 메뉴 갖다됐을때 서브메뉴창 나오기
for(let i = 0; i < li_seletor.length; i++){
  // console.log(li_seletor[i])
  
  li_seletor[i].addEventListener('mouseover', function(){  
    // cate_show[i].classList.add('on');
    cate_show[i].style.display = 'block'

  })

  headerBox.addEventListener('mouseout', function(e){

    cate_show[i].classList.remove('on');
    // cate_show[i].style.display = 'none';


    if(e.target.classList == 'head_li'){
        cate_show[i].style.display = 'none';
    }else if(e.target.classList == 'sub_menu'){
        cate_show[i].style.display = 'none';
    }
    // console.log(e.target);  
  })
  
}
// ------------------------------------------

// 슬라이드 부분

let bannerWrap = document.querySelector('.banner_wrap'); // 슬라이드 전체 컨테이너
let bannerContainer = document.querySelector('.banner_container'); //슬라이드 아이템 컨테이너
let btnNext = document.querySelector('.next'); // 다음버튼
let btnPrev = document.querySelector('.prev'); // 이전버튼
let slides = document.querySelectorAll('.banner_img'); // 슬라이드 이미지(아이템)
console.log(slides)
let slideCount = slides.length; // 슬라이드 갯수
let currentIndex = 0 ; // 현재 슬라이드

// let topHeight = slides[0].offsetHeight
// console.log(topHeight)
// function calculateTallsetSlide(){
//   for(let i = 0; i < slideCount; i++){
//     if(slides[i].offsetHeight > topHeight){
//       topHeight = slides[i].offsetHeight;
//     }
//   }

//   bannerContainer.style.height = `${topHeight}px`;
//   bannerWrap.style.height = `${topHeight}px`;
// }
// calculateTallsetSlide(); // 슬라이드 제일 높은값?

// for(let i = 0; i < slideCount; i++){
//   slides[i].style.left = `${i * 100}%`;
//   console.log(slides[i])
// }

// 버튼 클릭

btnPrev.addEventListener('click',()=>{
  goToSlide(currentIndex - 1);
});

btnNext.addEventListener('click',function(){
  goToSlide(currentIndex + 1);
})

function goToSlide(idx){
  bannerContainer.style.left = `${idx * 100}%`;
  // bannerContainer.classList.add('animated');
  currentIndex = idx;
  // updateNav();
}
goToSlide(0);