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