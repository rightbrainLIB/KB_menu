const back = () => {
	const backBtn = document.querySelector(".back-btn");
	
	backBtn.addEventListener("click", () => {
		console.log("sss")
		window.history.go(-1) 
	})
}

const tab = () => {
	const tabBtn = document.querySelectorAll(".tab");
	const tabArea = document.querySelectorAll(".tab-contents");
	tabBtn.forEach((e, index)=> {
		e.addEventListener("click", (item) => {
			const btn = item.target
			tabBtn.forEach((tab) => {
				tab.classList.remove("active")
			})
			btn.classList.add("active")
			tabArea.forEach((area) => {
				area.classList.remove("active")
			})
			tabArea[index].classList.add("active")
		})
	})
}

const sheetOpen = () => {
	const dim = document.querySelector(".dim");
	const sheet = document.querySelector(".bottom-sheet");
	const moreBtn = document.querySelector(".more-btn.sheet");
	const closeBtn = document.querySelector(".close-btn");
	const body = document.querySelector("body");
	moreBtn.addEventListener("click", () => {
		dim.classList.add("open")
		sheet.classList.add("open")
		body.classList.add("scroll-block")
	})
	closeBtn.addEventListener("click", () => {
		dim.classList.remove("open")
		sheet.classList.remove("open")
		body.classList.remove("scroll-block")
	})
	dim.addEventListener("click", () => {
		dim.classList.remove("open")
		sheet.classList.remove("open")
		body.classList.remove("scroll-block")
	})
}

document.addEventListener("DOMContentLoaded", () => {
  back();
	tab();
	sheetOpen()
});
