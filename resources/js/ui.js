$(document).ready(function(){
    var bh = window.innerHeight;
    var ly_pop = $('.ly_pop');
    var ly_inner = ly_pop.children('.ly_inner');
    ly_inner.css('min-height', bh);

    initializeSelectButton('.select_box', '.select_btn', '.select_list');
});

// selectbox
function initializeSelectButton(selectBox, selectBtn, selectList) {
    const $btn = $(selectBtn);
    const $list = $(selectList);
    const $box = $(selectBox);

    $btn.click(function () {
        if($(this).closest($box).hasClass('on')){
            $(this).closest($box).removeClass('on');
        }else{
            $(this).closest($box).addClass('on')
        }
    });

    $list.on('click', '.item_name', function () {
        $(this).closest($box).find($btn).text($(this).children('.item_code').text());
        $box.removeClass('on');
    });
}

// 레이어팝업 관련 쿼리
function openPopup(popupId) {
    const popup = $('#' + popupId);
    const dim = $('.ly_dim');
    const body = $('body');

    if (popup.hasClass('open')) {
        hidePopup(popup);
        body.removeClass('no-scroll');
        if (dim.hasClass('show')) {
            hidePopup(dim);
        }
    } else {
        showPopup(popup);
        showPopup(dim);
        body.addClass('no-scroll');
    }
}
function closePopup(popupId) {
    const popup = $('#' + popupId);
    const dim = $('.ly_dim');
    const body = $('body');

    if (popup.hasClass('open')) {
        hidePopup(popup);
        hidePopup(dim);
        body.removeClass('no-scroll');
    }
}
function showPopup(element) {
    element.fadeIn(180).addClass('open');
}
function hidePopup(element) {
    element.fadeOut(180, function() {
        $(this).removeClass('open');
    });
}
function closePopupOnDimClick() {
    const dim = $('.ly_dim');
    const openPopups = $('.ly_pop.open');
    const body = $('body');

    if (openPopups.length >= 0) {
        hidePopup(openPopups);
        hidePopup(dim);
        body.removeClass('no-scroll');
    }
}
