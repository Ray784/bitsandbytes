import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'bnb';
  constructor(){
  	window.addEventListener("scroll", function() {
			let currentScroll = window.pageYOffset || document.documentElement.scrollTop;
			let scrollTop = document.getElementById('scrollTop');
			if(currentScroll > 500)
				scrollTop.style.display = 'block';
			else
				scrollTop.style.display = 'none';

		});
  }
  scrollTop(){
		window.scrollTo(0, 0);
	}
	
}
