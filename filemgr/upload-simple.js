$(function () {
    $.get('/filemgr/upload').done(function(){
       
    }).fail(function(){
        $('#submit').attr('disabled','disabled');
        $('<div class="alert alert-danger submit-tip" role="alert">无法连接到文件服务器，请稍后再试</div>').appendTo('#main');
    })

    var GV = { uploader: '/filemgr/upload' };
    
    $('#submit').click(function(){
        if($(this).attr('disabled')) return;
        if($('#file1')[0].files.length==0){
            $('<div class="alert alert-warning submit-tip" role="alert">请选择文件</div>').appendTo('#main');
            return ;
        }
        $('#main').find('.submit-tip').remove();
        $(this).attr('disabled','disabled').text('正在提交...');
        $.ajax({
            url: GV.uploader,
            type: 'POST',
            cache: false,
            data: new FormData($('#form')[0]),
            dataType:'json',
            contentType: false,
            processData: false
        }).done(function(res) {
            
            console.log(res);
            return;
            if (res.success){
                
                var url='/filemgr/pdf2html/download?filename='+res.filename;
                $('<div class="alert alert-success submit-tip" role="alert"><a href="'+url+'" target="_blank">'+res.filename+'</a></div>').appendTo('#main');
                $('#submit').removeAttr('disabled').text('提交');
            }else{
                $('<div class="alert alert-danger submit-tip" role="alert">'+res.errMsg+'</div>').appendTo('#main');
            }
        }).fail(function(res) {
            console.error(res);
            $('<div class="alert alert-danger submit-tip" role="alert">程序错误，请用调试工具查看</div>').appendTo('#main');
        });
    })
})
