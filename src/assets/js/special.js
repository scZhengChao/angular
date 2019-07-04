!function ($) {
    var $myAs = $('#J_ActionSheet');

    $('#J_ShowActionSheet').on('click', function () {
        $myAs.actionSheet('open');
    });

    $('#J_Cancel').on('click', function () {
        $myAs.actionSheet('close');
    });

    // 自定义事件
    $myAs.on('open.ydui.actionsheet', function () {
        console.log('打开了');
    }).on('close.ydui.actionsheet', function () {
        console.log('关闭了');
    });
}(jQuery);