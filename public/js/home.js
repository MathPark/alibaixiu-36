$.ajax({
        type: 'get',
        url: '/posts/random',
        success: function(res) {
            var randomStr = `
        {{each data}}
        <li>
                        <a href="javascript:;">
                            <p class="title">{{$value.title}}</p>
                            <p class="reading">阅读({{$value.meta.views}})</p>
                            <div class="pic">
                                <img src="{{$value.thumbnail}}" alt="">
                            </div>
                        </a>
                    </li>
        {{/each}}
        `
            var html = template.render(randomStr, { data: res })
            $('#random').html(html)
        }
    })
    //最新评论
$.ajax({
        type: 'get',
        url: "/comments/lasted",
        success: function(res) {
            var commentStr = `
        {{each data}}
        <li>
                        <a href="javascript:;">
                            <div class="avatar">
                                <img src="uploads/avatar_1.jpg" alt="">
                            </div>
                            <div class="txt">
                                <p>
                                    <span>鲜活</span>2020-02-01说:
                                </p>
                                <p>挺会玩的</p>
                            </div>
                        </a>
                    </li>
        {{/each}}    `
            var html = template.render(commentStr, { data: res })
            $('#commentBox').html(html)
        }
    })
    //分类展示
$.ajax({
    type: "get",
    url: '/categories',
    success: function(res) {
        var str = `
        {{each data}}
        <li><a href="list.html?categroyId={{$value._id}}"><i class="fa fa-glass"></i>{{$value.title}}</a></li>
        {{/each}}
        `
        var html = template.render(str, { data: res })
        $('.nav_item').html(html)
    }
})
$('.search form').on('submit', function() {
    var key = $(this).find('.keys').val();
    location.href = '/search.html?key=' + key;
    return false;
})

function getUrlparams(name) {
    var params = location.search.substr(1).split('&');
    for (var i = 0; i < params.length; i++) {
        var tem = params[i].split('=');
        if (tem[0] == name) {
            return tem[1];
        }

    }
    return -1;

}
var key = getUrlparams('key');
//搜索
$.ajax({
        type: 'get',
        url: '/posts/search/' + key,
        success: function(res) {
            var html = template('listTpl', {
                data: res
            })
            $('.new').html(html)

        }
    })
    //点赞
$.ajax({
    type: 'post',
    url: '/posts/fabulous/' + key
})