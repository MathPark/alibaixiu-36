$.ajax({
    type: 'GET',
    url: '/posts/recommend',
    success: function(res) {
        var recommendHtml =
            `
            {{each data}}
            <li>
        <a href="detail.html?id={{$value._id}}">
            <img src="{{$value.thumbnail}}" alt="">
            <span>{{$value.title}}</span>
        </a>
    </li>
    {{/each}}`
        var html = template.render(recommendHtml, { data: res })
        $('#recommendBox').html(html)
    }
})