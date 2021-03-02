// 무한스크롤 인식
$(window).scroll(function() {// 스크롤 이벤트가 발생할 때마다 인식
    if ( $(window).scrollTop() == $(document).height() - $(window).height() ) {// 스크롤이 끝에 닿는걸 인식
      console.log("스크롤 인식");
      page++;
      if(statueFilter ==false){// 필터가 안된 상태이면 내 관심사에 따라서 타임라인에 뿌려줌
         console.log("statueFilter false");
          listAll(page,keywords);
      }
      else if(statueFilter ==true){// 필터가 적용되면 필터를 계산한 값을 뿌려줌
          listFilter(page,allData);
      }
      var height = $(document).scrollTop();
      $('html, body').animate({scrollTop : height+400},600);
    }
});//end of 무한스크롤

<script type="text/javascript" src="https://code.jquery.com/jquery-1.12.4.min.js"></script> 
<script type="text/javascript" src="./jquery.jscroll.js"></script> 
<script type="text/javascript"> 
//<![CDATA[ $(document).ready(function () { 
  $('#autoScroll').jscroll({ 
    autoTrigger: true, 
    loadingHtml: '<div class="next"><img src="./images/loading.gif" alt="Loading" /></div>', 
    nextSelector: 'a.nextPage:last' }); }); //]]> 
</script>

- $('#autoScroll').jscroll(); 은 페이지 내에서 id가 autScroll 인 요소에 무한 스크롤을 실행합니다.

- autoTrigger는 스크롤시 다음 컨텐츠를 자동으로 가져올지 지정합니다. true이면 아래로 스크롤하면 자동으로 다음  내용을 가져오고, false이면 링크를 클릭해야 다음 내용을 가져옵니다. 기본값은 true 입니다.

- 파라미터로 주어진 loadingHtml 은 새로운 컨텐츠를 불러올때 로딩 표시를 하는 html을 지정합니다.

- nextSelector는 컨텐츠중 다음 페이지를 불러올 링크를 찾는데 사용됩니다. 기본 값은 "a:last"로 컨텐츠 중의 마지막 <a> 태그를 사용합니다. 마지막 페이지에 링크가 있으면 오류가 발생하므로 여기서는 'a.nextPage:last'로 지정하여 nextPage 클래스를 가지는 <a> 태그중 마지막 것을 선택하도록 하였습니다.
