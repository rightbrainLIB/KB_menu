const back = () => {
	const backBtn = document.querySelector(".back-btn");
	const menuBtn = document.querySelector(".menu-btn");
	
	backBtn.addEventListener("click", () => {
		if(document.referrer.includes('typeC_loan.html')) {
			window.history.go(-2) 
		} else {
			window.history.go(-1) 
		}
	})
	menuBtn.addEventListener("click", () => {
		if(document.referrer.includes('typeC_loan.html')) {
			window.history.go(-2) 
		} else {
			window.history.go(-1) 
		}
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
	const sheet01 = document.querySelector(".bottom-sheet.sheet01");
	const sheet02 = document.querySelector(".bottom-sheet.sheet02");
	const moreBtn = document.querySelectorAll(".more-btn");
	const closeBtn = document.querySelectorAll(".close-btn");
	const body = document.querySelector("body");
	
	moreBtn.forEach((item) => {
		item.addEventListener("click", (e) => {
			if (item.classList.contains("sheet01")) {
				sheet01.classList.add("open")
			}if (item.classList.contains("sheet02")) {
				sheet02.classList.add("open")
			}
			dim.classList.add("open")
			body.classList.add("scroll-block")
		})
	})
	closeBtn.forEach((item) => {
		item.addEventListener("click", (e) => {
			item.closest(".bottom-sheet").classList.remove("open")
			dim.classList.remove("open")
			body.classList.remove("scroll-block")
		})
	})
	dim.addEventListener("click", () => {
		dim.classList.remove("open")
		sheet01.classList.remove("open")
		sheet02.classList.remove("open")
		body.classList.remove("scroll-block")
	})
}

const detailView = () => {
	const detailViewBtn = document.querySelector(".detail-view-btn");
	const detail = document.querySelector(".detail-view");

	detailViewBtn.addEventListener("click", (e) => {
		detailViewBtn.classList.toggle("active");
		if (e.target.classList.contains("active")) {
			detail.style.maxHeight = detail.scrollHeight + "px";
		} else {
			detail.style.maxHeight = 0;
		}
	})
}

document.addEventListener("DOMContentLoaded", () => {
  back();
	tab();
	sheetOpen();
	detailView();
});
