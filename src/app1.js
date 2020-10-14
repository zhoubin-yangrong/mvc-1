import './app1.css'
import $ from 'jquery'
const $button1 = $('#add1')
const $button2 = $('#minus1')
const $button3 = $('#mul2')
const $button4 = $('#divide2')
let $number = $('#number')
//拿取缓存数据
let n = localStorage.getItem('n')
$number.text(n || 100)
$button1.on('click',()=>{
    let n = parseInt($number.text())
    n++
    // 设置缓存数据
    localStorage.setItem('n',n)
    $number.text(n)
})
$button2.on('click',()=>{
    let n = parseInt($number.text())
    n--
    localStorage.setItem('n',n)
    $number.text(n)
})
$button3.on('click',()=>{
    let n = parseFloat($number.text())
    n *=2
    localStorage.setItem('n',n)
    $number.text(n)
})
$button4.on('click',()=>{
    let n =  parseFloat($number.text())
    n = n/2
    localStorage.setItem('n',n)
    $number.text(n)
})