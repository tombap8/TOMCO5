// 보그 PJ 링크 시스템 JS - linksys.js ///////

$(() => { ////////// jQB ///////////////////////

    /************************************** 
        로그인, 회원가입, 갤러리 아이콘 넣기
    **************************************/
    // 대상: .sns a:last-child (마지막 카스링크)
    // 변경: 대상요소 앞에 a요소 코드를 삽입한다!
    // 메서드: before(요소) -> 선택요소 앞에 형제요소 삽입
    // -> 참고) after(요소) -> 선택요소 뒤에 형제요소 삽입
    // 선택자 :last는 제이쿼리 전용임!


    ///// sns 파트 a요소들에 툴팁넣기 ////////


    // 선택메서드 비교
    // find(요소) - 자손선택
    // children(요소) - 직계자식선택

    /************************************ 
        SNS 메뉴 파트 링크 셋팅하기
    ************************************/
    // 대상: .sns a
    $('.sns a').click(e=>{

        // 클릭된 a자신(화살표함수는 this대신)
        let ele = e.currentTarget;

        // 1. 기본이동막기
        e.preventDefault();

        // 2. 클릭된 a요소의 텍스트읽기
        let atxt = $(ele).text().trim();
        // trim() 앞뒤공백제거
        console.log(atxt);

        // 3. 이동할 페이지 주소할당하기
        let url;
        switch(atxt){
            case "인스타그램":
                url = "https://www.instagram.com/VOGUEKOREA/";
                break;
            case "페이스북":
                url = "https://www.facebook.com/VOGUEkr";
                break;
            case "트위터":
                url = "https://twitter.com/VogueKorea";
                break;
            case "유튜브":
                url = "https://www.youtube.com/user/VogueKorea?sub_confirmation=1";
                break;
            case "카카오스토리":
                url = "https://story.kakao.com/ch/voguekr";
                break;
        } ///////// switch case ///////

        // 4. 페이지 이동하기
        window.open().location.href = url;
        // window.open() 새창열기

    }); /////////// click //////////////


    /************************************ 
            메인로고 링크 셋팅하기
    ************************************/
    $('.logo a').click(()=>
        location.href = 'index.html');
     
    /************************************ 
        GNB 메뉴 파트 링크 셋팅하기
    ************************************/
    // 대상: .gnb a
    $('.gnb a').click(e => { // e 이벤트전달변수

        // 기본이동막기
        e.preventDefault();

        // 화살표함수일때 나자신
        let ele = e.currentTarget;

        // console.log(ele);

        // 1. 클릭된 a요소의 글자읽기
        let txt = $(ele).text().toLowerCase().trim();
        // toLowerCase() 소문자변환
        // 참고) toUpperCase() 대문자변환
        // trim() 앞뒤공백제거

        console.log(txt);

        // 2. 서브페이지 이동하기
        if(txt !== 'search')
            location.href = 
            'category.html?cat=' + encodeURIComponent(txt);
        // 카테고리를 구분하기 위한 파라미터 키=값 쌍을 보냄
        // cat=카테고리명
        // 이것을 받아서 페이지 셋업을 함!
        // 이렇게 데이터를 url로 전달하는 방식을 GET방식이라고 함!
        // 특수문자가 있으므로 (time & gem) 이것을 보낼때
        // encodeURIComponent() 로 변환하여 보내고
        // 받는곳에서는 decodeURIComponent() 로 복원함!    

    }); ///////// click /////////




}); ////////////// jQB ///////////////////////