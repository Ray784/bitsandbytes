import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

	constructor() { 
		var lastScroll = 0;
		var opacity = 1;

		window.addEventListener("scroll", function() {
			let currentScroll = window.pageYOffset || document.documentElement.scrollTop;
			let head = document.getElementById('company-head');
			let scrollTop = document.getElementById('scrollTop');
			if(currentScroll > 500)
				scrollTop.style.display = 'block';
			else
				scrollTop.style.display = 'none';
			if(currentScroll > lastScroll)
				opacity -= 0.01;
			else
				opacity += 0.01;
			lastScroll = currentScroll > 0? currentScroll: 0;
		    if(lastScroll == 0)
				opacity = 1;
		    head.style.transform = "rotateY("+currentScroll/10+"deg) rotateX(-"+currentScroll/20+"deg)";
		    head.style.opacity = ''+opacity;
		});
		let body = document.getElementsByTagName('body');	
		body[0].style.backgroundColor = "#1b1b1b";
		body[0].style.color = "#fcfcfc";
		this.scrollTop();
	}

	ngOnInit(): void {
		let imgDivs = document.getElementsByClassName('image');
		for(let i=0; i< imgDivs.length; i++){
			let height = (imgDivs[i] as HTMLElement).offsetHeight;
			let img = (imgDivs[i] as HTMLElement).firstChild as HTMLElement;
			img.onload = function() {
			 	let imgHeight = img.clientHeight;
			 	console.log(height, imgHeight, img)
			 	if(imgHeight < height){
					let margintop = (height - imgHeight) / 2;
					img.style.marginTop = margintop+'px';
				}
			}
		}
	}


	scrollTop(){
		window.scrollTo(0, 0);
	}
	
	showMenuBar(nav){
		let sections = document.getElementsByClassName('section');
		nav.classList.toggle("rotate");
		let menu = document.getElementById('menu');
		let header = document.getElementById('header');
		if (menu.style.display === "none"){
			menu.style.display = "block";
			//this.setOpacity(sections, '0.3');
			menu.style.opacity = '1';
			nav.style.opacity = '1';
		}
		else{
			menu.style.display = "none";
			//this.setOpacity(sections, '1');
		}
	}
	
	setOpacity(sections, opacity){
		for(let section of sections)
			(section as HTMLElement).style.opacity = opacity;
	}

	makeRipple(x, y){
		var node = document.createElement("span");
		node.style.position = 'absolute';
		node.style.borderRadius ='50%';
		node.style.backgroundColor = 'rgba(0, 0, 0, 0.3)';
		node.style.width = '100px';
		node.style.height = '100px';
		node.style.marginTop = '-50px';
		node.style.marginLeft = '-50px';
		node.style.opacity = '0';
		node.style.left = x+'px';
		node.style.top = y+'px';
		node.style.animation = 'ripple';
		node.style.animationDuration = '1s';
		return node;
	}

	sectionButtonClick(event) {
		let btn = event.target;
		let x = event.pageX - btn.offsetLeft;
		let y = event.pageY - btn.offsetTop;
		let node = this.makeRipple(x, y);
		btn.appendChild(node);
		setTimeout(() => {node.remove();}, 300);
	}

}
