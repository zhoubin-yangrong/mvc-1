import './app3.css'
import $ from 'jquery'
const $square = $('#app3 .square')
$square.on('click',()=>{
    // $square.addClass('active')
    // 有这类名就删除,没有就加上   二次点击事件
    $square.toggleClass('active')

})