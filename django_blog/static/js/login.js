<!-- AJAX 脚本 -->
$(document).ready(function () {
    $('#example-form').on('submit', function (event) {
        event.preventDefault();  // 阻止表单默认提交

        // 获取表单数据
        const formData = $(this).serialize();

        // 通过 AJAX 提交表单
        $.ajax({
            url: '{% url "blog_auth:blog_login" %}',  // 修改为你视图对应的 URL
            method: 'POST',
            data: formData,
            success: function (response) {
                if (response.success) {
                    // 如果成功，可以显示成功消息或进行页面跳转
                    alert("表单提交成功！");
                } else {
                    // 如果失败，显示错误提示框
                    $('#error-alert').html('<strong>请修正以下错误:</strong><ul></ul>').show();
                    $.each(response.errors, function (field, errors) {
                        $('#error-alert ul').append('<li>' + field + ': ' + errors.join(', ') + '</li>');
                    });
                }
            },
            error: function (xhr, status, error) {
                console.error('表单提交时发生错误:', error);
            }
        });
    });
});
