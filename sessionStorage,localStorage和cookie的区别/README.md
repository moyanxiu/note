|特性|cookie|localStorage|sessionStorage|
|---|---|---|---|
|数据生命周期|一般由服务器生成，可以设置过期时间除非被清理，否则一直存在|除非被清理，否则一直存在|页面关闭就清理除|
|数据存储大小|4K|5M|5M|
|与服务端通信|每次都会携带在header中，对于请求性能有一定影响|不参与|不参与|

> `sessionStorage`在多窗口之间能共享状态吗？

如果你在浏览器中打开了两个相同地址的页面A、B,虽然这两个页面的源完全相同，但是他们还是不能共享数据，因为他们是不同窗口中的。但是如果是一个窗口中，有两个同源的iframe元素的话，这两个iframe的 sessionStorage 是可以互通的。

此外，有种特殊情况，在当前页面通过`window.open("同源页面")`这种方式新开的页面会复制之前的sessionStorage，通过`a标签`新开的页面同样也会a标签_blank默认 rel="noopener" ，所以a标签需要加入rel=“opener” 而才能像window.open("同源页面")这种方式新开的页面会复制之前的sessionStorage。这里的数据仅仅是复制而已，打开页面之后再操作原页面的sessionStorage是不会影响新页面的值。
