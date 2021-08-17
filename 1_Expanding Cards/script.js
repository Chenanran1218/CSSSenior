//获取面板元素 用了选择器的表达式
const panelItems=document.querySelectorAll(".container>.panel");
panelItems.forEach(item=>{
    item.addEventListener('click',()=>{ //添加事件监听addEventListener 第一个参数是事件 第二个参数是事件处理函数
        //将数组的方法传给DOM中孩子节点伪数组 通过数组的过滤器选出 所有未被点击的元素 然后清除这些元素的active样式 再为点击的item添加classList active
        [].filter.call(item.parentElement.children,el=>el!==item).forEach(el=>el.classList.remove('active')); 
        item.classList.add('active')
    })
})