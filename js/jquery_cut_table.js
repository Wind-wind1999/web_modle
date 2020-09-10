$(document).ready(function(){

    //获取跳转按钮等id
    var table="#tb";
    var first="#first_page";
    var previous="#parse_page";
    var now="#now_page_num";
    var amount="#num_page_num";
    var next="#next_page";
    var last="#last_page";
    var jump_text="#jump_page_num";
    var jump="#jump_page";

    cup_page(first,previous,now,amount,next,last,jump_text,jump);

    function cup_page(first,previous,now,amount,next,last,jump_text,jump){

        var tb_row=$(table).find("tr").length;//获取表格行数

        var show_page_num=3;//每页显示的行数
        var page=Math.ceil((tb_row-1)/show_page_num);//共有多少页
        $(amount).text(page);//总页数填入页面

        function show_page(now_page){//没有表头的表
            $(table+" tr").hide();//隐藏表格所有行
            $(now).text(now_page);  //当前页数插入到页面上         
            var i=show_page_num*(now_page-1);//第一行的行数下标
            while(i<(now_page*show_page_num)){
                $(table+" tr:eq("+i+")").show();
                i++;
            }
        }

        function show_hpage(now_page){//有表头的表，表头一直有显示
            $(table+" tr").hide();//隐藏表格所有行
            $(table+" tr:eq(0)").show();//显示表格第一行
            $(now).text(now_page);  //当前页数插入到页面上         
            var i=show_page_num*(now_page-1)+1;//第一行的行数下标(不包括作为第一行的表头，所以加1)
            while(i<(now_page*show_page_num+1)){
                $(table+" tr:eq("+i+")").show();
                i++;
            }
        }

        var now_page=1;//默认显示第一页
        show_hpage(now_page);
        
        $(next).click(function(){//点击下一页按钮
            if(now_page<page){
                now_page+=1;
                show_hpage(now_page);
            }       
        });

        $(previous).click(function(){//点击上一页按钮
            if(now_page>1){
                now_page-=1;
                show_hpage(now_page);
            }       
        });

        $(first).click(function(){//点击首页按钮
            now_page=1;
            show_hpage(now_page);     
        });

        $(last).click(function(){//点击尾页按钮
            now_page=page;
            show_hpage(now_page);     
        });

        $(jump).click(function(){//跳转按钮
            now_page=$(jump_text).val();
            if(now_page>=1&&now_page<=page){
                show_hpage(now_page);
            }     
        });
    }

});