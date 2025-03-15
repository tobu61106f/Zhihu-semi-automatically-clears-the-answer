(function(pageNumber){
    [...document.documentElement.outerHTML.matchAll(/www.zhihu.com\/question\/\d+\/answer\/(\d+)/g)]
        .map(x=>`https://www.zhihu.com/api/v4/answers/${x[1]}`)
        .forEach(function(url){
            var xhr = new XMLHttpRequest();
            xhr.open("DELETE", url);
            xhr.send();
        });
    window.location.href=`https://www.zhihu.com/people/自己的用户编号/answers?page=${pageNumber - 1}`
})(+new URLSearchParams(window.location.search).get('page'))
