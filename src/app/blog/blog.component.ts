import { Component, OnInit } from '@angular/core';
import {Blog} from '../blog';
import {BlogService} from '../blog.service';
import { HttpEvent, HttpResponse} from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  constructor(private blogService : BlogService, private route: ActivatedRoute, private router:Router){
  	let body = document.getElementsByTagName('body');	
		body[0].style.backgroundColor = "#fcfcfc";
		body[0].style.color = "#3a3a3a";
		this.scrollTop();
  }
  blogs: Blog[];
  isLoading: boolean = true;

  ngOnInit(): void {
  	this.blogService.getBlogs().subscribe(blogs=>{
  		this.blogs = blogs.slice().reverse();
  		this.isLoading = false;
  	});
  }
  time(time_stamp){
    let dateObj = new Date(parseInt(time_stamp) + 330 * 60000); 
    let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"];
    let date = dateObj.getDate() + ' ' + months[dateObj.getMonth()] + ' ' + dateObj.getUTCFullYear();
    let utcString = dateObj.toUTCString();
    return [date, utcString.slice(0, -4)+" IST"];
  }
  truncate(str, num) {
    let div = document.createElement('div');
    div.innerHTML = str;
  	return div.innerText.split(" ").splice(0, num).join(" ") + "...";
  }
  readTime(str){
    let div = document.createElement('div');
    div.innerHTML = str;
    return Math.round((div.innerText.split(' ').length * 400) / 60000) + 1;
  }
  setup(id){
    this.router.navigate(['/blog', id]);
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
