// 제이쿼리 기본 JS - main.js 
// html이 모두 로딩후 실행구역
$(()=>{ ///////// jQB /////////////////

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
 btns.hide().first().show();
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
 bd.each((idx,ele)=>{
  // 1. 각 li요소에 글자순번 넣기
  $(ele).text(idx);
  // text()는 글자넣기/읽기 메서드

  // 2. 좀비 + 주사기 넣기
  // 뒤에 코드넣기는 append() 메서드사용!
  if(idx===2) $(ele).append(inj);
  else if(idx===9) $(ele).append(mz1);
  else if(idx===7) $(ele).append(mz2);
  else if(idx===1) $(ele).append(zom);


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

}); //////////// jQB ///////////////////