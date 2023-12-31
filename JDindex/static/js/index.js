const getAllElem = function (selector) {
    return document.querySelectorAll(selector);
}
const getElem = function (selector) {
    return document.querySelector(selector);
}
/**
 * 轮播图自动播放-主图-自动播放+点击滚动
 */

var swiperIndex = 0;
var flag = true;
// 底部小圆圈
var ol = getElem('#olCircle');
// var circle = 0;
var swiperImg = getAllElem('.img-slide');
var swiperNode = getElem('#swiper');
var currIndex = 0;
const createCircle = () => {
    for (var i = 0; i < swiperImg.length; i++) {
        let li = document.createElement('li');

        li.className = 'current';
        li.setAttribute('index', i);
        ol.append(li);

    }
    ol.children[0].className = 'current white';
}
createCircle();

// 底部圆点随着轮播变化
const circlechange = (index) => {
   
    // 重置
    let child = [...ol.children]
    child.forEach(i => i.className = 'current')
    // 当前图片的对应圆圈高亮
    ol.children[index].className = 'current white';
    return index
};


const swiper = () => {
    // 全部隐藏
    swiperImg.forEach((item) => item.style.display = 'none')
    // 显示当前
    swiperImg[swiperIndex++].style.display = 'block'
 }

let swiperTimer = setInterval(() => {
    swiperIndex = swiperIndex >= swiperImg.length ? 0 : swiperIndex;
    currIndex = circlechange(swiperIndex);
    swiper()
}, 2000)
// const swiperTimer = setInterval(swiper(1), 2000)

// 鼠标进入 
swiperNode.addEventListener('mouseenter', () => {
    clearInterval(swiperTimer);
    swiperTimer = null;
})
// 鼠标离开
swiperNode.addEventListener('mouseleave', () => {
    swiperTimer = setInterval(() => {
        swiperIndex = swiperIndex >= swiperImg.length ? 0 : swiperIndex;
        currIndex = circlechange(swiperIndex);
        swiper()
    }, 2000)
})
// 左右按钮添加点击事件

let mainSwiperLeftBtn = getElem('#mainSwiperLeftBtn')
let mainSwiperRightBtn = getElem('#mainSwiperRightBtn')

mainSwiperLeftBtn.addEventListener('click', e => swiperLeftHandler(e))
mainSwiperRightBtn.addEventListener('click', e => swiperRightHandler(e))

const swiperLeftHandler = function (e) {
   
    let back = currIndex-1
    // 图片显示上一张
    swiperImg.forEach((item) => item.style.display = 'none')
    // 出界
    back = back < 0 ? swiperImg.length-1: back;
    swiperImg[back].style.display = 'block'
    // 圆点显示上一个
    currIndex = circlechange(back);
}
const swiperRightHandler = function (e) {
    let next = currIndex+1
    
    swiperImg.forEach((item) => item.style.display = 'none')
    // 出界
    next = next >= swiperImg.length ? 0 : next;
    // 图片显示下一张
    swiperImg[next].style.display = 'block'
    // 圆点显示下一个
    currIndex = circlechange(next);
}
/**
 * 轮播图自动播放-recommend-点击滚动
 */

var recommendIndex = 0;
const recommend = () => {
    let recommendItem = [getAllElem('.img-group1'), getAllElem('.img-group2'), getAllElem('.img-group3')];
    // 全部隐藏
    recommendItem.forEach((item) => {
        item.forEach(i => i.setAttribute('hidden', 'hidden'))
    })
    // 当前显示
    recommendIndex = recommendIndex >= recommendItem.length ? 0 : recommendIndex;
    recommendItem[recommendIndex++].forEach(item => {
        item.removeAttribute('hidden')
    })
}
const recommendTimer = setInterval(recommend, 3000)

var recommendNode = getElem('.recommend')
let recommendLeftBtn = getElem('#recommendLeftBtn')
let recommendRightBtn = getElem('#recommendRightBtn')
recommendNode.addEventListener('mouseenter',() => {
    recommendLeftBtn.removeAttribute('hidden')
    recommendRightBtn.removeAttribute('hidden')
})
recommendNode.addEventListener('mouseleave',() => {
    recommendLeftBtn.setAttribute('hidden','hidden')
    recommendRightBtn.setAttribute('hidden','hidden')
})

/**
 * 自动生成list
 */
// js读取json 
const getFeedsList = () => {
    let url = '../static/json/feedlist.json';
    let request = new XMLHttpRequest();
    // 请求方法
    request.open('GET', url);
    request.send();/*不发送数据到服务器*/
    request.onload = function () {
        let feedlist = JSON.parse(request.responseText)
        createFeedsList(feedlist)
        let feedItem = getAllElem('.feedsContainer .item')
        hoverAction(feedItem)
    }

}
getFeedsList()

/**
 * 生成feedlist DOM元素
 * @param {} feedlist 
 */
const createFeedsList = (feedlist) => {
    let feedsContainer = getElem('#feedsType2');
    feedlist.forEach((i, index) => {
        let item = document.createElement('div')
        // item添加class id
        item.setAttribute('class', 'item')
        item.setAttribute('id', 'feedType2-item-' + index)

        let img = document.createElement('img')

        img.setAttribute('src', i.img)

        let info = document.createElement('div')

        info.setAttribute('class', 'info')

        let name = document.createElement('div')

        name.setAttribute('class', 'name')
        // 是否有tag
        if (i.tag !== "") {
            let tag = document.createElement('span')
            let tagText = document.createTextNode(i.tag)

            tag.setAttribute('class', 'tag')
            tag.append(tagText)
            name.append(tag)
        }

        let title = document.createElement('span')
        // 标题超过27个省略
        let titleText = document.createTextNode(i.title.length > 25 ? i.title.substr(0, 25) + '...' : i.title)

        title.setAttribute('class', 'title')
        title.append(titleText)

        // name 添加tag title
        name.append(title)

        let price = document.createElement('div')

        price.setAttribute('class', 'price')

        let span = document.createElement('span')

        span.setAttribute('style', 'text-align: left;')
        let unit = document.createElement('span')
        let unitText = document.createTextNode(i.unit);

        unit.setAttribute('class', 'unit')
        unit.append(unitText)

        // 分割价钱
        let priceArr = [...i.price.split('.')]
        let int = document.createElement('span')

        intText = document.createTextNode(priceArr[0] + '.')
        int.setAttribute('class', 'int')
        int.append(intText);

        let flo = document.createElement('span')

        floText = document.createTextNode(priceArr[1]);
        flo.setAttribute('class', 'flo');
        flo.append(floText);
        span.append(unit, int, flo);
        price.append(span)
        // info添加 name price 
        info.append(name, price)

        let hover = document.createElement('div')

        hover.setAttribute('class', 'hover')
        hover.setAttribute('hidden', 'hidden')

        let deleteIcon = document.createElement('i');

        deleteIcon.setAttribute('class', 'bi bi-x delete')

        let btnBox = document.createElement('div')

        btnBox.setAttribute('class', 'btnBox');

        let btn = document.createElement('span');
        let eyeIcon = document.createElement('i');
        let btnText = document.createTextNode('找相似')

        eyeIcon.setAttribute('class', 'bi bi-eye')
        btn.setAttribute('class', 'btn')

        btn.append(eyeIcon, btnText)
        btnBox.append(btn)
        hover.append(deleteIcon, btnBox)

        // item添加img info hover节点
        item.append(img, info, hover)

        feedsContainer.append(item)
    })

}

/**
 *  为你推荐-鼠标悬浮-找相似
 */

// 鼠标离开
const mouseleave = (e) => {
    let hoverItem = getElem('#' + e.target.id + ' .hover');
    hoverItem.setAttribute('hidden', 'hidden')
}
// 鼠标进入
const mouseenterHandler = (e) => {
    let hoverItem = getElem('#' + e.target.id + ' .hover');
    hoverItem.removeAttribute('hidden')
}
// 为元素添加事件
const hoverAction = (feedItem) => {
    // 添加鼠标移入移除操作
    feedItem.forEach((item) => {
        item.addEventListener('mouseenter', e => mouseenterHandler(e))
        item.addEventListener('mouseleave', e => mouseleave(e))
    })

}
