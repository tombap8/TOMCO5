// 보그 PJ 공통 기능 JS - common.js

$(()=>{////////// jQB /////////////////////
    // 스크롤 등장액션을 위한 클래스 셋팅
    // main.cont>section 중 두번째부터 끝까지
    // 선택하여 .scAct를 줘서 
    // 투명하고 아래로 조금 내려가 있는 상태를 만든다!
    // 선택자 :first는 제이쿼리 전용임!
    // 원래 css선택자는 :first-child임!
    $('main.cont>section:first~section')
    .addClass('scAct');

    /*********************************** 
      페이지 스크롤시 변경 구현하기
      - 이벤트: scroll
      - 제이쿼리 메서드 : scroll()
      - 대상: window    
    ***********************************/
   // 스크롤 위치값 변수
   let scTop;
   // 스크롤 등장클래스 담기
   let scAct = $('.scAct');
   // 상단영역 변수
   let topA = $('#top');
   // 탑버튼 변수
   let tbtn = $('.tbtn');

    ////// 스크롤 이벤트 함수 구역 ///////
    $(window).scroll(()=>{
      // 화살표함수 안에서 this는 window! 

      // 스크롤 top위치값넣기
      scTop = $(this).scrollTop();


      console.log('스크롤중~~!',scTop);

      // 1. 스크롤시 상단영역에 클래스 on넣기
      // 슬림 디자인 상단영역 변경하기!
      // 한번 스크롤시 최소 이동거리 100px
      if(scTop >= 100) topA.addClass('on');
      else topA.removeClass('on');

      // 2. 스크롤시 위로가기 버튼에 클래스 on넣기
      // on을 넣으면 나타나고 빼면 사라진다!
      // 기준위치는 300px
      if(scTop >= 300) tbtn.addClass('on');
      else tbtn.removeClass('on');

      // 스크롤등장 요소에 클래스 on넣기
      if(scTop > 400){
        scAct.first().addClass('on');
      }

    }); //////////// scroll ////////////////

});////////////// jQB /////////////////////