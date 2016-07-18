// 每个页数需放在id=pages的父元素内
var totalpage = parseInt($('#totalpage').val());  //页面总数
var current_page = parseInt($('#current_page').val());   //当前页面数                     
var shownum = 11; //显示的页面条目数
var midnum = Math.round(shownum / 2);                        
var startpage = current_page - midnum + 1 ;
startpage = startpage < 1 ? 1 : startpage;
var endpage = startpage + shownum - 1;
if(endpage > totalpage){
    endpage = totalpage;
    startpage = totalpage - shownum + 1;
}

if(totalpage > shownum){
   for (var i=startpage;i <= endpage;i++){
       var j=$("#pages").html();
        $("#pages").html(j+'<a href="javascript:;" id="'+i+'" onClick="page(this)" class="pagenum">'+i+'</a>');
    }                                  
}else{
    for (var i=1;i <= totalpage;i++){
       var j=$("#pages").html();
        $("#pages").html(j+'<a href="javascript:;" id="'+i+'" onClick="page(this)" class="pagenum">'+i+'</a>');
    }  
}

var pagea = $('#pages a');

pagea.each(function(i){                                  
    if(pagea.eq(i).attr('id') == current_page){
        $(this).css({
            'background-color' : '#337bb8',
            'color' : '#fff'
        });                                        
    }
}) 

var firstpage = parseInt(pagea.eq(0).attr('id')) ;

if (firstpage > 1) {
    $('#prevcolpage').show();
}            

//向前翻页
$('#prevcolpage').click( function () {                                  
     
    pagea = $('#pages a');  
    firstpage = parseInt(pagea.eq(0).attr('id')) ;    
    $('#nextcolpage').show();
    var prevpagetotal = firstpage - shownum;                              
    prevpagetotal = prevpagetotal <= 1 ? 1 : prevpagetotal;                              
    var lastpage = prevpagetotal + shownum;                               
    $("#pages").html('');
    for (var i=prevpagetotal;i < lastpage;i++){
        var j=$("#pages").html();
        $("#pages").html(j+'<a href="javascript:;" id="'+i+'" onClick="page(this)" class="pagenum">'+i+'</a>');
    }                                  
    if(prevpagetotal <= 1){
        $('#prevcolpage').hide();
        $('#nextcolpage').show();
    }

})
                                    
if(totalpage > shownum){
    $('#nextcolpage').show();   
}    
if((current_page + midnum) > totalpage){
    $('#nextcolpage').hide(); 
}

//向后翻页
$('#nextcolpage').click( function () {
    var pagea = $('#pages a');
    var pagelen = pagea.length;
    var lastpage = parseInt(pagea.eq(pagelen - 1).attr('id'));
    
    $("#pages").html('');
    var nextpagetotal = lastpage + shownum;                                 

    var nextpagecol = nextpagetotal > totalpage ? totalpage : nextpagetotal;                                            
    $('#prevcolpage').show();
    for (var i=lastpage + 1;i <= nextpagecol;i++){
        var j=$("#pages").html();
        $("#pages").html(j+'<a href="javascript:;" id="'+i+'" onClick="page(this)" class="pagenum">'+i+'</a>');
    }                         
    if(nextpagetotal >=　totalpage){
        $('#nextcolpage').hide();        
    }                                            
}) 