import { Component, OnInit } from '@angular/core';
import {Blog} from '../blog';
import {BlogService} from '../blog.service';
import { HttpEvent, HttpResponse} from '@angular/common/http';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  constructor(private blogService : BlogService){
  	let body = document.getElementsByTagName('body');	
		body[0].style.backgroundColor = "#fcfcfc";
		body[0].style.color = "#3a3a3a";
		this.scrollTop();
  }
  blogs: Blog[];
  currBlog: Blog;
  isLoading: boolean = true;

  ngOnInit(): void {
  	this.blogService.getBlog().subscribe(blogs=>{
  		this.blogs = blogs['blogs'].slice().reverse();
  		this.isLoading = false;
  	});
  	console.log(this.blogs)
  }
  time(time_stamp){
    let dateObj = new Date(parseInt(time_stamp) + 330 * 60000); 
    let utcString = dateObj.toUTCString();
    return utcString.slice(0, -4)+" IST";
  }
  truncate(str, num) {
  	return str.split(" ").splice(0, num).join(" ") + "...";
  }
  setup(blog){
  	this.currBlog = blog;
    this.scrollTop();
  }
  back(){
  	this.currBlog = undefined;
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
