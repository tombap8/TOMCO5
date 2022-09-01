// 제이쿼리 기본 JS - main.js 
// html이 모두 로딩후 실행구역
$(() => { ///////// jQB /////////////////

  // JS에서 제일 중요한 것은? -> 요소선택!
  // JS에서 편리한 요소선택법은? 
  // document.querySelector() / querySelectorAll()

  // 제이쿼리 함수호출법
  // jQuery() -> $() 축약형을 많이씀!
  // 선택법: $(선택자)

  /******************************** 
    1. 대상선정 변수할당
  ********************************/
  // 대상1: 주인공 미니언즈 선택(변수할당!)
  let mi = $('.mi');
  // 대상2: 버튼들 
  let btns = $('.btns>button');
  // 대상3: 빌딩각방
  let bd = $('.building li');
  // 대상4: 메시지박스
  let msg = $('.msg');

  // console.log(mi);

  /******************************** 
    2. 초기화 셋팅하기
  ********************************/
  // 2-1. 버튼 셋팅: 모든버튼 다 숨기고 첫번째만 보이게하기
  // btns.hide().first().show();
  btns.hide().eq(5).show();
  // 버튼들.숨겨라().첫번째().보여라()

  // 주사기, 좀비 코드 변수에 담기
  // 주사기
  let inj = '<img src="images/inj.png" alt="주사기" class="inj">';
  // 좀비1
  let mz1 = '<img src="images/mz1.png" alt="좀비1" class="mz"">';
  // 좀비2
  let mz2 = '<img src="images/mz2.png" alt="좀비2" class="mz"">';
  // 좀비들
  let zom = '<img src="images/zom.png" alt="좀비들" class="mz"">';

  // 2-2. 빌딩숫자 셋팅
  // -> 모든 빌딩 li를 순서대로 돌면서
  // 순번넣기 + 좀비,주사기 넣기
  // 대상: 빌딩 li -> bd변수
  bd.each((idx, ele) => {
    // 1. 각 li요소에 글자순번 넣기
    $(ele).text(idx);
    // text()는 글자넣기/읽기 메서드

    // 2. 좀비 + 주사기 넣기
    // 뒤에 코드넣기는 append() 메서드사용!
    if (idx === 2) $(ele).append(inj);
    else if (idx === 9) $(ele).append(mz1);
    else if (idx === 7) $(ele).append(mz2);
    else if (idx === 1) $(ele).append(zom);

  }); //////// each /////////////
  /* 
     [ for문을 쓰지 않고 돌게해주는 제이쿼리 메서드 ]
     ->>>>>> each(function(idx,ele){})
     ->>>>>> each((idx,ele)=>{})

     - 요소를 순서대로 돌면서 구현부를 실행함
     - 첫번째 전달변수 idx : 순번이 전달됨(0부터)
     - 두번째 전달변수 ele : 각각의 요소가 전달됨
     (비교) forEach((ele,idx)=>{})
  */

  // 2-3. 모든 좀비 숨기기
  $('.mz').hide();
  // 선택요소가 여러개이면 for문을 써야하지만 제이쿼리는 자동으로 모두 셋팅해준다!!!

  /************************************* 
          미니언즈 공통기능함수
  *************************************/
  const miniAct = (ele, seq, call) => {
    // ele - 버튼자신
    // seq - 이동할 li순번
    // call - 각 버튼별 콜백함수

    // 1. 클릭된 버튼 자신 없애기
    $(ele).slideUp(400)

    // 2. 메시지 지우기
    msg.fadeOut(200);
    // fadeOut(시간,이징,함수)
    // -> opacity가 0되며 애니메이션
    // 애니메이션후에 display:none됨
    // 반대는 fadeIn(시간,이징,함수)


    // 3. 미니언즈가 몇번방으로 이동하기
    // 몇번방 li위치 알아오기
    let posT = bd.eq(seq).offset().top;
    let posL = bd.eq(seq).offset().left;

    // left값을 보정하여 미니언즈가 각 li방의 중앙에 오게함!
    // left값 + li가로크기절반 - 미니언즈가로크기절반
    posL = posL + bd.eq(seq).width() / 2 - mi.width() / 2;

    console.log('top:', posT, '\nleft:', posL);
    // eq(순번) 해당순번요소 선택
    // offset() 메서드 : 요소의 크기, 위치등 정보제공
    // offset().top -> 맨위에서 부터 top값
    // offset().left -> 왼쪽끝에서 부터 left값

    mi.animate({
      top: posT + "px",
      left: posL + "px"
    }, 1000, "easeInOutElastic", call);
    //////// animate //////////

    /* 
      [ slideUp(시간,이징,함수) ]
      - 높이값이 0되면서 애니메이션
      - 마지막에 display:none처리!

      [ slideDown(시간,이징,함수)]
      - display를 보이게 한 후 높이값이 원래값을 복원애니메이션
    */


  }; //////////// miniAct 함수 ////////////


  /********************************** 
     3. 버튼별 클릭 이벤트 함수 만들기
  **********************************/
  // 3-1. "들어가기" 버튼 클릭시 시작 //////
  btns.first().click((e) => { // e 이벤트 전달변수

      // 콜백함수 : 이동후 실행함수 //
      let callFn = () => { // 애니후 실행함수

        // 1. 메시지 변경
        msg.text('와~! 아늑하다! 옆방으로 가보자!')
          .fadeIn(200); // 메시지 나타나기

        // 2. 다음 버튼 보이기
        $(e.currentTarget).next()
          .delay(500) // 0.5초 지연
          .slideDown(400);
        // delay(시간) -> 시간은 1/1000초
        // -> 애니메이션 메서드 앞에 사용!!!

      }; //////// 콜백함수 끝 ////////////


      // 클릭된 버튼 자신 사라지기
      // 원래는 this가 자기자신이지만
      // 화살표함수 내부에서는 event.currentTarget이다!
      // e는 클릭메서드 전달변수로 이벤트를 받는다!

      // 미니언즈 공통함수 호출!
      miniAct(e.currentTarget, 8, callFn);
      // miniAct(버튼자신,이동할li순번,콜백함수)


    }) // 3-1. "들어가기" 버튼 클릭시 끝 //////

    // 3-2. "옆방으로!" 버튼 클릭시 시작 /////
    // next() 선택요소의 다음 형제요소
    // 앞의 버튼 다음버튼임!
    .next().click((e) => {
      // 콜백함수 : 이동후 실행함수 //
      let callFn = () => { // 애니후 실행함수

        // 1. 좀비등장
        // find(선택자) -> 자손요소찾기!
        // 비교) children(선택자) -> 직계자식찾기!
        bd.eq(9).find('.mz')
          // 1초후 나타남!
          .delay(1000).fadeIn(400, () => {

            // 2. 메시지 변경하기
            // html(코드) -> html코드 넣기(JS의 innerHTML)
            msg
              .html('악!;;;좀비!<br>어서피하자!')
              .fadeIn(200) // 나타남
              .css({
                left: "-90%"
              }) // 박스위치변경

            // 3. 다음 버튼 보이기
            $(e.currentTarget).next().slideDown(400);

          }); //////// fadeIn //////////


      }; //////// 콜백함수 끝 ////////////

      // 미니언즈 공통함수 호출!
      miniAct(e.currentTarget, 9, callFn);
      // miniAct(버튼자신,이동할li순번,콜백함수)

    }) // 3-2. "옆방으로!" 버튼 클릭시 끝 /////

    // 3-3. "윗층으로 도망가!" 버튼 클릭시 시작 /////
    // next() 선택요소의 다음 형제요소
    // 앞의 버튼 다음버튼임!
    .next().click((e) => {

      // 콜백함수 : 이동후 실행함수 //
      let callFn = () => { // 애니후 실행함수

        // 1. 메시지 변경
        msg.text('여긴 없겠지?')
          .fadeIn(200);

        // 2. 좀비보이기 : 7번방
        bd.eq(7).find('.mz')
          // 0.5초후 0.5초간 애니 나타남
          .delay(500).fadeIn(500, () => {

            // 3. 메시지 수정하기
            msg.text('악! 여기도!!!');

            // 4. 다음 버튼 보이기
            $(e.currentTarget).next().slideDown(400);

          }); ////// fadeIn ////////////

      }; //////// 콜백함수 끝 ////////////

      // 미니언즈 공통함수 호출!
      miniAct(e.currentTarget, 7, callFn);
      // miniAct(버튼자신,이동할li순번,콜백함수)

    }) // 3-3. "윗층으로 도망가!" 버튼 클릭시 끝 /////

    // 3-4. "다시옆방으로!" 버튼 클릭시 시작 /////
    // next() 선택요소의 다음 형제요소
    // 앞의 버튼 다음버튼임!
    .next().click((e) => {
      // 콜백함수 : 이동후 실행함수 //
      let callFn = () => { // 애니후 실행함수

        // 1. 메시지 변경
        msg.text('여긴 없겠지?...')
          .fadeIn(200) // 메시지 보이기
          .delay(1000) // 1초후
          .fadeIn(200, () => {
            // 2. 메시지 두번째 변경
            msg.html('그래도 무서우니까<br>윗층으로 가자!');

            // 3. 다음 버튼 보이기
            $(e.currentTarget).next().slideDown(400);

          }); ////// fadeIn /////////

      }; //////// 콜백함수 끝 ////////////

      // 미니언즈 공통함수 호출!
      miniAct(e.currentTarget, 6, callFn);
      // miniAct(버튼자신,이동할li순번,콜백함수)

    }) // 3-4. "다시옆방으로!" 버튼 클릭시 끝 /////

    // 3-5. "무서우니 윗층으로!" 버튼 클릭시 시작 /////
    // next() 선택요소의 다음 형제요소
    // 앞의 버튼 다음버튼임!
    .next().click((e) => {

      // 콜백함수 : 이동후 실행함수 //
      let callFn = () => { // 애니후 실행함수

        // 1. 메시지 변경
        msg.empty() // 선택요소 텍스트 지우기
          .delay(500)
          .fadeIn(200, () => msg.text('무'))
          .delay(500)
          .fadeIn(200, () => msg.text('무.'))
          .delay(500)
          .fadeIn(200, () => msg.text('무.서'))
          .delay(500)
          .fadeIn(200, () => msg.text('무.서.'))
          .delay(500)
          .fadeIn(200, () => msg.text('무.서.워'))
          .delay(500)
          .fadeIn(200, () => msg.text('무.서.워.'))
          .delay(500)
          .fadeIn(200, () => msg.text('무.서.워..'))
          .delay(500)
          .fadeIn(200, () => msg.text('무.서.워...'))
          .delay(500)
          .fadeIn(200, () => {
            // 2. 좀비 달려오기
            // -> 7번방 좀비: bd.eq(7).find('.mz')
            let tg = bd.eq(7);
            // 2-1. 윗층으로 올라오기
            // 같은 대상에 연속해서 애니메이션을 줄경우
            // 큐(Queue)에 등록되어 순서대로 실행됨!
            tg.find('.mz')
              .animate({ // 아래서 위로 올라오기
                bottom: '100%'
              }, 300, "easeOutBack")
              .animate({ // 오른쪽에서 달려오기
                  right: '120%'
                }, 1000, "easeOutBounce",
                () => { // 애니후 실행함수
                  // 3. 주인공 사색되기!(흑백처리)
                  mi.css({
                    filter: 'grayscale(100%)'
                  }); ///// css //////

                  // 4. 메시지 지우기
                  msg.hide();

                  // 5. 2초뒤에 좀비되기
                  setTimeout(() => {
                    // 5-1. 좀비이미지 변경
                    mi.find('img')
                      .attr('src', 'images/mz1.png');
                    // attr(속성명, 속성값)
                    // -> 속성값 변경 메서드
                    // 비교)  JS의 setAttribute()
                    // 참고) 속성값 가져오기는
                    // -> attr(속성명)
                    // 비교) JS의 getAttribute()

                    // 5-2. 좀비 메시지
                    msg.html('나도좀비!;;;<br>어서 치료주사를!')
                    .css({
                        left: "100%"
                      }) // 위치변경
                      .fadeIn(200); // 메시지 보이기

                      // 6. 다음 버튼 보이기
                      $(e.currentTarget).next()
                      .slideDown(400);

                  }, 2000); //// 타임아웃 /////

                }); /////// animate ////////

          }); ////////// fadeIn ////////////


      }; //////// 콜백함수 끝 ////////////

      // 미니언즈 공통함수 호출!
      miniAct(e.currentTarget, 4, callFn);
      // miniAct(버튼자신,이동할li순번,콜백함수)

    }) // 3-5. "무서우니 윗층으로!" 버튼 클릭시 끝 /////

    // 3-6. "치료주사방으로!" 버튼 클릭시 시작 /////
    // next() 선택요소의 다음 형제요소
    // 앞의 버튼 다음버튼임!
    .next().click((e) => {

      // 콜백함수 : 이동후 실행함수 //
      let callFn = () => { // 애니후 실행함수

        // 1. 주사기 돌리기
        // 주의: transform은 animate에서 사용불가!
        // transform은 css로  transition으로 구현!
        $('.inj').css({
          transform:'rotate(-150deg)',
          transition:'.5s ease-out 1s',
          zIndex: '9999'
        }); ////////// css //////////

        // 2. 주사놓은 후(1.5초) 다시 미니언즈2(후유증)
        setTimeout(()=>{
          // 2-1. 미니언즈 흑백모드 풀기
          mi.css({
            filter: 'grayscale(0%)'
          })
          // 2-2. 새로운 미니언즈 이미지로 변경
          .find('img').attr('src','images/m2.png');

          // 2-3. 주사기 제거하기
          $('.inj').remove();
          // remove() 메서드는 태그를 지운다!

          // 3. 메시지 변경
          msg.text('치료완료!')
          .fadeIn(200)
          .delay(1000).fadeIn(200,()=>
          msg.html('이제, 조금만 더<br>가면 탈출이닷!'));
          
          // 4. 다음 버튼 보이기
          $(e.currentTarget).next().slideDown(400);

        },1500); ////// 타임아웃 /////////


      }; //////// 콜백함수 끝 ////////////

      // 미니언즈 공통함수 호출!
      miniAct(e.currentTarget, 2, callFn);
      // miniAct(버튼자신,이동할li순번,콜백함수)
    }) // 3-6. "치료주사방으로!" 버튼 클릭시 끝 /////

    // 3-7. "3번방으로!" 버튼 클릭시 시작 /////
    // next() 선택요소의 다음 형제요소
    // 앞의 버튼 다음버튼임!
    .next().click((e) => {

      // 콜백함수 : 이동후 실행함수 //
      let callFn = () => { // 애니후 실행함수
        // 1. 메시지 변경
        msg.text('이제 곧 탈출이닷!')
        .fadeIn(200);

        // 2. 다음 버튼 보이기
        $(e.currentTarget).next().slideDown(400);

      }; //////// 콜백함수 끝 ////////////

      // 미니언즈 공통함수 호출!
      miniAct(e.currentTarget, 3, callFn);
      // miniAct(버튼자신,이동할li순번,콜백함수)
    }) // 3-7. "3번방으로!" 버튼 클릭시 끝 /////

    // 3-8. "1번방으로!" 버튼 클릭시 시작 /////
    // next() 선택요소의 다음 형제요소
    // 앞의 버튼 다음버튼임!
    .next().click((e) => {

      // 콜백함수 : 이동후 실행함수 //
      let callFn = () => { // 애니후 실행함수

        // 1. 메시지 변경
        msg.text('어서 헬기를 타야지!')
        .fadeIn(200);

        // 2. 다음 버튼 보이기
        $(e.currentTarget).next().slideDown(400);

      }; //////// 콜백함수 끝 ////////////

      // 미니언즈 공통함수 호출!
      miniAct(e.currentTarget, 1, callFn);
      // miniAct(버튼자신,이동할li순번,콜백함수)

    }) // 3-8. "1번방으로!" 버튼 클릭시 끝 /////

    // 3-9. "헬기를 호출!" 버튼 클릭시 시작 /////
    // next() 선택요소의 다음 형제요소
    // 앞의 버튼 다음버튼임!
    .next().click((e) => {

      // 콜백함수 : 이동후 실행함수 //
      let callFn = () => { // 애니후 실행함수

        // 1. 메시지 변경
        msg.text('도와줘요~!!!')
        .fadeIn(200);

        // 2. 좀비들 최종추적!!!
        // -> 1번방에 숨겨진 좀비들
        // -> bd.eq(1).find('.mz')
        let tg = bd.eq(1).find('.mz');

        tg.fadeIn(200,()=>{ // 나타난후 애니
          // 2-1. 좀비들 움직이기
          tg.animate({
            right:"120%"
          },5000,"easeInOutExpo");

          // 2-2. 헬기등장
          let heli = $('.heli');
          heli.animate({
            left: '20%'
          },3000,"easeOutBack",()=>{
            // 3. 주인공이 탄 이미지로 변경
            heli.attr('src','images/heli2.png');
            // 4. 주인공 지우기(헬기에 탔으니까!)
            mi.hide();
          }) /////// animate ///////
          // 헬기 애니메이션 이어짐!!!
          .delay(1000) // 5. 1초기다림
          // 6. 오른쪽 끝으로 감 
          .animate({
            left: '70%'
          },4000,"easeInOutQuart",()=>{
            // 7. 헬기조종사 좀비 이미지변경
            heli.attr('src','images/heli3.png');
          }) ////////// animate /////
          // 헬기 애니메이션 이어짐!!!
          .animate({
            left: '100%'
          },10000,"easeInOutSine",()=>{
            // 최종애니!!!
            // 힌트: addClass(클래스명)
            // 시간차이는 setTimeout()사용

            // 8. 간판떨어지기
            // 대상: .tit
            let tit = $('.tit');

            // 1단계: 간판 중간 떨어짐(.on)
            tit.addClass('on');

            // 2단계: 3초후 간판 떨어짐(.on2)
            setTimeout(()=>{
              tit.addClass('on2');
            },3000);//// 타임아웃 //////

            // 건물무너지기
          })

        }) ////////// fadeIn ////////

        // 다음 버튼 보이기
        $(e.currentTarget).next().slideDown(400);

      }; //////// 콜백함수 끝 ////////////

      // 미니언즈 공통함수 호출!
      miniAct(e.currentTarget, 0, callFn);
      // miniAct(버튼자신,이동할li순번,콜백함수)

    }) // 3-9. "헬기를 호출!" 버튼 클릭시 끝 /////




  /* 
    [ 제이쿼리 애니메이션 메서드 ]
    animate({CSS설정},시간,이징,함수)
    - CSS는 속성:값 객체형식으로 사용
    - 시간은 1/1000초 단위없이사용
      (시간을 안쓰면 기본시간 400이 적용됨)
    - 이징은 가속도 (제이쿼리UI가 있어야적용됨!)
    (참조: https://easings.net/ko)
    - 함수는 애니메이션 후 실행코드(콜백함수)

    [ 제이쿼리 CSS변경 메서드 ]
    $(선택자).css({
      속성1:값,
      속성2:값,
      속성3:값
    })

    JS와 비교:
    선택자.style.속성1 = 값
    선택자.style.속성2 = 값
    선택자.style.속성3 = 값
  */

}); //////////// jQB ///////////////////