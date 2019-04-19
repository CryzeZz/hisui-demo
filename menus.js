var menus=[
    {
        text:'hisui',
        attributes:{
            url:'',
        },
        children:[
            {
                text:'hisui-api',
                attributes:{
                    url:'/hisui/api/',
                    target:'_blank'
                }
            },{
                text:'datagrid-load',
                attributes:{
                    url:'hisui/datagrid.1.html'
                }
            },{
                text:'combobox-cascade',
                attributes:{
                    url:'hisui/combobox.1.html'
                }
            },{
                text:'layout-padding',
                attributes:{
                    url:'hisui/layout.1.html'
                }
            },{
                text:'combogrid-setValue',
                attributes:{
                    url:'hisui/combogrid.1.html'
                }
            }
        ]
    },{
        text:'文件管理',
        attributes:{
            url:'',
        },
        children:[
            {
                text:'文件上传',
                attributes:{
                    url:'./filemgr/upload-simple.html'    //'/filemgr/upload'
                }
            },{
                text:'文件列表',
                attributes:{
                    url:'/filemgr/filelist'
                }
            },{
                text:'uploadify跨域',
                attributes:{
                    url:'http://'+location.host+':81/upload/uploadify.html'
                }
            },{
                text:'jquery-cropper',
                attributes:{
                    url:'cropper/index.html'
                }
            }
        ]
    },{
        text:'其他',
        attributes:{
            url:'',
        },
        children:[
            {
                text:'markdown预览',
                attributes:{
                    url:'md-parser/index.html'
                }
            },{
                text:'GB Url Provider',
                attributes:{
                    url:'charset/index.html'
                }
            },{
                text:'BinaryTreeDemo',
                attributes:{
                    url:'BinaryTreeDemo/tree.html'
                }
            },{
                text:'babel',
                attributes:{
                    url:'babel/babel.html'
                }
            },{
                text:'tts',
                attributes:{
                    url:'tts/tts.html'
                }
            }
        ]
    },{
        text:'工具',
        attributes:{
            url:'',
        },
        children:[
            {
                text:'pdf2html',
                attributes:{
                    url:'/filemgr/pdf2html'
                }
            },{
                text:'密码管理',
                attributes:{
                    url:'/filemgr/pm/view/index'
                }
            }
        ]
    },{
        text:'管理',
        attributes:{
            url:'',
        },
        children:[
            {
                text:'git pull demos',
                attributes:{
                    url:'/filemgr/pull?repo=demos'
                }
            },{
                text:'git pull hisui',
                attributes:{
                    url:'/filemgr/pull?repo=hisui'
                }
            },{
                text:'退出',
                attributes:{
                    url:'/filemgr/static/logout/logout.html'
                }
            }
        ]
    }
]
var indexMenuText={};
function parseMenus(menus,pre){
    if (typeof pre=='undefined') pre='r';
    for(var i=0;i<menus.length;i++){
        var node= menus[i];
        var id=pre+'-'+i;
        node.id=id;
        indexMenuText[node.text]=id;
        
        if (node.children){
            parseMenus(node.children,id);
            node.state= node.state||'closed';
        }else{
            node.state= node.state||'open';
        }
    }
}
parseMenus(menus);
