import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  constructor() {
  	let body = document.getElementsByTagName('body');	
		body[0].style.backgroundColor = "#fcfcfc";
		body[0].style.color = "#3a3a3a";
		this.scrollTop();
  }

  ngOnInit(): void {
  }

  showMenuBar(nav){
		nav.classList.toggle("rotate");
		let menu = document.getElementById('menu');
		let header = document.getElementById('header');
		if (menu.style.display === "none")
			menu.style.display = "block";
		else
			menu.style.display = "none";
	}
	scrollTop(){
			window.scrollTo(0, 0);
	}

}
