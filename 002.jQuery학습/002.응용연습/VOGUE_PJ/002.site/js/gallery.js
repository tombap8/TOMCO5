// 보그 PJ 갤러리 페이지 JS - gallery.js

// 제이쿼리 코드블럭 ////////////////
$(()=>{

    // 스와이퍼 플러그인 API설명서
    // https://swiperjs.com/swiper-api

    // 스와이퍼 설정하기 /////
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 3, // 한 화면당 슬라이드 개수
        spaceBetween: 30, // 슬라이드 사이간격(px)

        // 사이즈별 슬라이드 개수, 간격 동적변경셋팅
        // Responsive breakpoints
        breakpoints: {
            // when window width is >= 200px
            200: {
                slidesPerView: 1,
                spaceBetween: 0
            },
            // when window width is >= 700px
            700: {
                slidesPerView: 2,
                spaceBetween: 10
            },
            // when window width is >= 1000px
            1000: {
                slidesPerView: 3,
                spaceBetween: 20
            }
        },




        // slidesPerGroup: 1, // 한번에 넘어가는 그룹수
        loop: true, // 무한루프(기본값:false)
        loopFillGroupWithBlank: true,
        // 한화면 단위지정시 단위보다 그룹이 작을 경우 빈칸을 채움
        pagination: {
          el: ".swiper-pagination",// 블릿설정
          clickable: true, //블릿클릭이동가능
        },
        navigation: {
          nextEl: ".swiper-button-next",// 다음버튼
          prevEl: ".swiper-button-prev",// 이전버튼
        },
        autoplay: { // 자동넘김
            delay: 2000, // 시간간격
            disableOnInteraction: false,
            // 상호작용이 없으면 다시 재시작(false일때)
          },
      });



}); /////////////// jQB ///////////////////
