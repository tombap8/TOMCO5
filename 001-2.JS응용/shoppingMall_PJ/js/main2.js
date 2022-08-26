// 쇼핑몰 배너 JS - 02.세로방향 배너 슬라이드 //

// HTML태그 로딩후 loadFn함수 호출! ///
window.addEventListener("DOMContentLoaded", loadFn);

/***************************************************** 
    [ 슬라이드 이동 기능정의 ]
    1. 이벤트 종류: click
    2. 이벤트 대상: 이동버튼(.abtn)
    3. 변경 대상: 슬라이드 박스(#slide)
    4. 기능 설계:

        (1) 오른쪽 버튼 클릭시 다음 슬라이드가
            나타나도록 슬라이드 박스의 top값을
            -100%로 변경시킨다.
            -> 슬라이드 이동후!!! 
            바깥에 나가있는 첫번째 슬라이드
            li를 잘라서 맨뒤로 보낸다!
            동시에 top값을 0으로 변경한다!

        (2) 왼쪽버튼 클릭시 이전 슬라이드가
            나타나도록 하기위해 우선 맨뒤 li를
            맨앞으로 이동하고 동시에 top값을
            -100%로 변경한다.
            그 후 top값을 0으로 애니메이션하여
            슬라이드가 왼쪽에서 들어온다.

        (3) 공통기능: 슬라이드 위치표시 블릿
            - 블릿 대상: .indic li
            - 변경 내용: 슬라이드 순번과 같은 순번의
            li에 클래스 "on"주기(나머진 빼기->초기화!)

*****************************************************/

/****************************************** 
    함수명: loadFn
    기능: 로딩 후 버튼 이벤트 및 기능구현
******************************************/
function loadFn() {

    // 1. 호출확인
    console.log("로딩완료!");

    // 2. 대상선정
    // 이벤트 대상: .abtn
    let abtn = document.querySelectorAll('.abtn');
    // 변경 대상: #slide
    let slide = document.querySelector('#slide');

    // 광클금지 상태변수
    let prot = 0; //1-금지,0-허용

    // 3. 클릭이벤트 기능구현

    // 3-1.오른쪽버튼
    abtn[1].onclick = () => {

        //////////// 광클금지 ////////////
        if (prot) return; // 리턴으로 나감!
        // prot===1 이라고 안해도 1이면 true!
        // 1은 true, 0은 false와 서로 교차됨!
        prot = 1; // 첫번째 신호가 잠금!
        // 0.4초후 해제
        setTimeout(() => prot = 0, 400);
        //////////////////////////////////

        // 0. 버튼클릭시 자동넘기기 지움함수 호출!
        clearAuto();

        // 1. 호출확인
        console.log('오른쪽버튼!');
        // 2. 대상선정: #slide -> slide변수
        // 3. 기능구현: top값을 -100%로 변경
        // 기능1단계 - 왼쪽으로 슬라이드 하나만큼 나가기!+트랜지션
        slide.style.top = '-100%';
        slide.style.transition =
            'top .4s ease-in-out';
        // 기능2단계 - 슬라이드 이동후 맨앞li 맨뒤이동
        // 0.4초후 실행하려면? setTimeout(함수,시간)
        setTimeout(() => {
            // 맨앞요소 맨뒤이동
            slide.appendChild(
                slide.querySelectorAll('li')[0]);
            // 동시에 -100%인 slide의 top값을 0으로 변경!
            slide.style.top = '0';
            // top가 0이될때 트랜지션 지우기!
            slide.style.transition = 'none';

        }, 400); // 400은 0.4초


        // 블릿변경함수 호출(1전달!)
        chgIndic(1);


    }; //////////// 오른쪽 버튼 click //////////

    // 3-2.왼쪽버튼
    abtn[0].onclick = () => {

        //////////// 광클금지 ////////////
        if (prot) return; // 리턴으로 나감!
        // prot===1 이라고 안해도 1이면 true!
        // 1은 true, 0은 false와 서로 교차됨!
        prot = 1; // 첫번째 신호가 잠금!
        // 0.41초후 해제
        setTimeout(() => prot = 0, 410);
        //////////////////////////////////
        
        // 0. 버튼클릭시 자동넘기기 지움함수 호출!
        clearAuto();

        // 1. 호출확인
        console.log('왼쪽버튼!');
        // 2. 대상선정: #slide -> slide변수
        // 3. 기능구현
        // 기능구현 1단계
        // li요소
        let lis = slide.querySelectorAll('li');
        // 맨뒤요소 맨앞 이동 : insertBefore(넣을놈,넣을놈전놈)
        slide.insertBefore(lis[lis.length - 1], lis[0]);
        // top값을 -100%로 변경하기
        slide.style.top = '-100%';
        // 트랜지션 없애기
        slide.style.transition = 'none';

        // 기능구현 2단계
        // 실행시간을 조금 차이를 준다!
        // setTimeout() 사용!
        setTimeout(() => {
            // top값을 0으로변경
            slide.style.top = '0';
            // 트랜지션 설정
            slide.style.transition =
                'top .4s ease-in-out';

        }, 10); // 0.01초후에 실행함! ///

        // 블릿변경함수 호출(0전달!)
        chgIndic(0);

    }; //////////// 왼쪽버튼 click //////////


    // 블릿에서 슬라이드 순번을 읽을 수 있게
    // 각 슬라이드li에 고유순번 속성넣기!
    // 넣는이유: 슬라이드가 매번 순번이 바뀜!
    // 넣는 방법은 처음로딩후 바로 li순번을 넣는다!
    // forEach문 사용!!!
    let sld = slide.querySelectorAll('li');
    sld.forEach((ele, idx) => { // ele - 각요소, idx - 순번
        ele.setAttribute('data-seq', idx);
        // 속성명을 'data-'로 시작하면 내가만든 속성명을
        // 사용할 수 있도록 w3c에서 지정함!
        // setAttribute(속성명, 속성값) -> 속성셋팅메서드
    }); //////// forEach ///////////

    // 블릿요소 변수설정
    let indic = document.querySelectorAll('.indic li');

    ///// 블릿의 표시를 해당 슬라이드 순번과 같은
    // 블릿에 class="on"을 주면 회색이미지로 보임!
    // 나머지는 모두 on을 빼야함!
    function chgIndic(num) {
        // num - 읽을 슬라이드 순번
        // 오른쪽버튼은 1, 왼쪽버튼은 0을 전달!

        // 1. 호출확인!
        console.log('블릿:', num);

        // 2. 슬라이드 속성 'data-seq'값 읽어오기
        let seq =
            slide.querySelectorAll('li')[num]
            .getAttribute('data-seq');


        // 값확인
        console.log('data-seq:', seq);

        // 3. 블릿 클래스 초기화!
        indic.forEach((ele) => {
            ele.classList.remove('on');
        }); ////// forEach ////////////

        // 4. 슬라이드순번(data-seq)과 같은 순번의
        // 블릿 li에 class="on"넣기
        indic[seq].classList.add('on');

        /* 
            [ JS 클래스 컨트롤 메서드 ]
            classList 객체
            1) add(클래스명) - 클래스추가
            2) remove(클래스명) - 클래스제거
            3) toggle(클래스명) - 클래스추가/제거
        */

    } ///////////// chgIndic 함수 ////////


    /******************************************** 
        [ 인터발 자동호출의 조건 ]
        1. 일정시간 간격으로 슬라이드가 넘어감
        2. 사용자가 버튼조작을 할경우 자동멈춤
        3. 일정시간 버튼조작이 없으면 다시자동
    ********************************************/

    // 인터발용변수
    let autoI;

    ////////////////////
    // 인터발 호출함수 //
    ////////////////////
    const autoCall = () => {

        // 인터발 자동호출!
        autoI = setInterval(() => {

            // ********** 오른쪽이동 버튼과 동일한 코드!!! ********** //
            // 3. 기능구현: top값을 -100%로 변경
            // 기능1단계 - 왼쪽으로 슬라이드 하나만큼 나가기!+트랜지션
            slide.style.top = '-100%';
            slide.style.transition =
                'top .4s ease-in-out';
            // 기능2단계 - 슬라이드 이동후 맨앞li 맨뒤이동
            // 0.4초후 실행하려면? setTimeout(함수,시간)
            setTimeout(() => {
                // 맨앞요소 맨뒤이동
                slide.appendChild(
                    slide.querySelectorAll('li')[0]);
                // 동시에 -100%인 slide의 top값을 0으로 변경!
                slide.style.top = '0';
                // top가 0이될때 트랜지션 지우기!
                slide.style.transition = 'none';

            }, 400); // 400은 0.4초


            // 블릿변경함수 호출(1전달!)
            chgIndic(1);

        }, 2000);
        // 지우기 위해 변수에 할당함!

    }; /////// autoCall함수 ///////////

    // 인터발 호출함수 최초호출!
    autoCall();

    // 타임아웃용 변수
    let autoT;

    /////////////////////////
    // 인터발 삭제함수 //
    ////////////////////////
    // -> 슬라이드 이동버튼 클릭시 호출됨!
    const clearAuto = () => {

        console.log("인터발지우기!");

        // 1. 인터발지우기 + 타임아웃지우기
        clearInterval(autoI);
        clearTimeout(autoT);
        // 한번씩 셋팅되는 타임아웃을 안지우면
        // 여러개가 작동하여 실행쓰나미가 발행함!

        // 2. 일정시간후 다시 인터발호출하기!
        autoT = setTimeout(autoCall, 4000);
        // 4초후 autoCall()함수 호출!

    }; ////// clearAuto함수 ///////////


    
} //////////////// loadFn 함수 ///////////////
/////////////////////////////////////////////
