<script> $(document).ready(function(){ 
  //css 멀티 속성 변화 $('p.para1').css({ 
    color: 'red', background: 'yellowgreen', 
    'font-size' : '1.5em', border : '3px solid black' 
  //하이픈이 들어가면 홑따옴표 써줘야 합니다. 
  }); 
  // 클래스 추가, 제거, 한번에 하는 toggle 
  // $('p.para2').addClass('myclass'); 
  // $('p.para2').removeClass('myclass'); 
  $('#btn1').on('click', function(){ 
    $('p.para2').toggleClass('myclass'); 
  }); 
  //텍스트 내용 및 html 수정 : text()는 텍스트만 가능 / html()은 태그도 사용 가능 
  $('#myDiv').text('Hello World'); 
    $('#myDiv').html('<h3>Hello World</h3>'); 
  //alert($('#myDiv').text()); 
  //내용 추가 
  $('ul').append('<li>리스트아이템 끝부분</li>'); 
    $('ul').prepend('<li>리스트아이템 앞부분</li>'); 
    $('.para1').appendTo('.para2'); //첫번째, 두번째 문장 순서 바뀜 
  //$('.para1').prependTo('.para2'); 
  
    $('ul').before('<h4>Hello</h4>') 
    $('ul').after('<h4>World!</h4>') 
  
  //내용 제거, 태그와 함께 제거 
  //$('ul').empty(); 
  // 콘솔에서 보면 ul태그는 사라지지 않고 ul 안의 텍스트만 사라짐 
    $('ul').detach(); //다사라짐 
  }); 
</script>
