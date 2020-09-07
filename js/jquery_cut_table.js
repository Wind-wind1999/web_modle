$(document).ready(function(){

    var tb_row=$("#tb").find("tr").length;//获取表格行数

    var show_page_num=3;//每页显示的行数
    var page=Math.ceil(tb_row/show_page_num);//共有多少页
    $("#num_page_num").text(page);//总页数填入页面

    function show_page(now_page){//没有表头的表
        $("#tb tr").hide();//隐藏表格所有行
        $("#now_page_num").text(now_page);  //当前页数插入到页面上         
        var i=show_page_num*(now_page-1);//第一行的行数下标
        while(i<(now_page*show_page_num)){
            $("#tb tr:eq("+i+")").show();
            i++;
        }
    }

    function show_hpage(now_page){//有表头的表，表头一直有显示
        $("#tb tr").hide();//隐藏表格所有行
        $("#tb tr:eq(0)").show();//显示表格第一行
        $("#now_page_num").text(now_page);  //当前页数插入到页面上         
        var i=show_page_num*(now_page-1)+1;//第一行的行数下标(不包括作为第一行的表头，所以加1)
        while(i<(now_page*show_page_num+1)){
            $("#tb tr:eq("+i+")").show();
            i++;
        }
    }

    var now_page=1;//默认显示第一页
    show_hpage(now_page);
    
    $("#next_page").click(function(){//点击下一页按钮
        if(now_page<page){
            now_page+=1;
            show_hpage(now_page);
        }       
    });

    $("#parse_page").click(function(){//点击上一页按钮
        if(now_page>1){
            now_page-=1;
            show_hpage(now_page);
        }       
    });

    $("#first_page").click(function(){//点击首页按钮
        now_page=1;
        show_hpage(now_page);     
    });

    $("#last_page").click(function(){//点击尾页按钮
        now_page=page;
        show_hpage(now_page);     
    });

    $("#jump_page").click(function(){//跳转按钮
        now_page=$("#jump_page_num").val();
        if(now_page>=1&&now_page<=page){
            show_hpage(now_page);
        }     
    });


});