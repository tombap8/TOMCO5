// 쇼핑몰 배너 JS - 01.가로방향 배너 슬라이드 //

// HTML태그 로딩후 loadFn함수 호출! ///
window.addEventListener("DOMContentLoaded", loadFn);

/***************************************************** 
    [ 슬라이드 이동 기능정의 ]
    1. 이벤트 종류: click
    2. 이벤트 대상: 이동버튼(.abtn)
    3. 변경 대상: 슬라이드 박스(#slide)
    4. 기능 설계:

        (1) 오른쪽 버튼 클릭시 다음 슬라이드가
            나타나도록 슬라이드 박스의 left값을
            -100%로 변경시킨다.
            -> 슬라이드 이동후!!! 
            바깥에 나가있는 첫번째 슬라이드
            li를 잘라서 맨뒤로 보낸다!
            동시에 left값을 0으로 변경한다!

        (2) 왼쪽버튼 클릭시 이전 슬라이드가
            나타나도록 하기위해 우선 맨뒤 li를
            맨앞으로 이동하고 동시에 left값을
            -100%로 변경한다.
            그 후 left값을 0으로 애니메이션하여
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

    // 3. 클릭이벤트 기능구현

    // 3-1.오른쪽버튼
    abtn[1].onclick = ()=>{
        // 1. 호출확인
        console.log('오른쪽버튼!');
        // 2. 대상선정: #slide -> slide변수
        // 3. 기능구현: left값을 -100%로 변경
        // 기능1단계 - 왼쪽으로 슬라이드 하나만큼 나가기!+트랜지션
        slide.style.left = '-100%';
        slide.style.transition = 'left .4s ease-in-out';
        // 기능2단계 - 슬라이드 이동후 맨앞li 맨뒤이동
        // 0.4초후 실행하려면? setTimeout(함수,시간)
        setTimeout(()=>{
            // 맨앞요소 맨뒤이동
            slide.appendChild(
                slide.querySelectorAll('li')[0]);
            // 동시에 -100%인 slide의 left값을 0으로 변경!
            slide.style.left = '0';
            // left가 0이될때 트랜지션 지우기!
            slide.style.transition = 'none';

        },400); // 400은 0.4초


    }; //////////// click //////////

    // 3-2.왼쪽버튼
    abtn[0].onclick = ()=>{
        // 1. 호출확인
        console.log('왼쪽버튼!');
        // 2. 대상선정: #slide -> slide변수
        // 3. 기능구현
        // 기능구현 1단계
        // li요소
        let lis = slide.querySelectorAll('li');
        // 맨뒤요소 맨앞 이동 : insertBefore(넣을놈,넣을놈전놈)
        slide.insertBefore(lis[lis.length-1],lis[0]);
    }; //////////// click //////////
    
} //////////////// loadFn 함수 ///////////////
/////////////////////////////////////////////