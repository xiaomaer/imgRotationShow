document.addEventListener("click", handle, false);

function handle(envet) {
	var e = event || window.event, //兼容事件
		target = e.target || e.srcElement, //事件目标
		currli = target.parentElement, //父元素
		preli = currli.previousElementSibling, //同级上一个元素
		j = 10,
		i = 1;
	while (currli) {
		currli.className = "li" + i;
		i++
		currli = currli.nextElementSibling;
	}
	while (preli) {
		preli.className = "li" + j;
		j--;
		preli = preli.previousElementSibling;
	}
}