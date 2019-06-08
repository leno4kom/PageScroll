document.addEventListener('DOMContentLoaded', function () {

    let pages = document.querySelectorAll('.page');
    let delta = 0;
    let p = 0;
    let numElem = 50;

    pages.forEach(function (elem, i) {
        elem.style.zIndex = numElem - i;
    });

    function pageScroll(event) {

        delta += event.detail || event.deltaY;
        pages[p].style.top = -delta + 'px';

        if (delta >= pages[p].offsetHeight) {
            p++;
            delta = 0;
        }
        if (p !== 0 && delta < 0) {
            pages[p].style.top = null;
            p--;
            delta = pages[p].offsetHeight;
            pages[p].styletop = -delta + 'px';
        }

        if (p === pages.length - 1) {
            pages[p].style.top = null;
            delta = 0;
        }
        if (p === 0 && delta < 0) {
            pages[p].style.top = null;
            delta = 0;
        }
        console.log(event.type);
    }

    if (navigator.userAgent.search(/Firefox/) !== -1) {
        document.body.addEventListener('MozMousePixelScroll', pageScroll);

    } else {
        document.body.addEventListener('wheel', pageScroll);
    }

    //console.log(navigator.userAgent.search(/Firefox/));

    //console.log(navigator.userAgent);
    //console.log(navigator.userAgent.search(/Firefox/));

    // console.log(page)
});