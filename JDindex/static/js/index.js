const getElem = function (selector) {
    return document.querySelectorAll(selector);
}
/**
 * 轮播图自动播放-主图-自动播放+点击滚动
 */

let swiperIndex = 0;
const swiper = () => {
    let swiperImg = getElem('.img-slide');
    // 全部隐藏
    swiperImg.forEach((item) => item.style.display = 'none')
    // 当前显示
    swiperIndex = swiperIndex >= swiperImg.length ? 0 : swiperIndex
    swiperImg[swiperIndex++].style.display = 'block'

}
const swiperTimer = setInterval(swiper,2000)

/**
 * 轮播图自动播放-recommend-点击滚动
 */

let recommendIndex = 0;
const recommend = () => {
    let recommendItem = [getElem('.img-group1'),getElem('.img-group2'),getElem('.img-group3')];
    // 全部隐藏
    recommendItem.forEach((item) => {
        item.forEach(i => i.setAttribute('hidden','hidden'))
    })
    // 当前显示
    recommendIndex = recommendIndex >= recommendItem.length ? 0 : recommendIndex;
    recommendItem[recommendIndex++].forEach(item => {
        item.removeAttribute('hidden')
    })
}
const recommendTimer = setInterval(recommend, 3000)