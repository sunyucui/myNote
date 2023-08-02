/**
 * 轮播图自动播放
 */
let index = 0;
const swiper = () => {
    let a = document.querySelectorAll('.img-slide');
    console.log(a)
    index = index >= a.length? 0 : ++index; 
    a[index].removeAttribute('hidden')
    a.forEach((item) => item.setAttribute('hidden','hidden'))
    
}
setInterval(swiper,3000)