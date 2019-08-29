$('#logout').on('click', function() {
    if (window.confirm('您确定要退出吗？')) {
        $.ajax({
            type: 'post',
            url: '/logout',
            success: function() {
                location.href = 'login.html'
            },
            error: function() {
                alert('退出失败')
            }
        })
    }
})
$.ajax({
    type: 'get',
    url: '/users/' + userId,
    success: function(response) {
        $('.avatar').attr('src', response.avatar)
        $('.profile .name').html(response.nickName)
    }
})