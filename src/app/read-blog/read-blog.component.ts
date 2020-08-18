import { Component, OnInit } from '@angular/core';
import {Blog} from '../blog';
import {BlogService} from '../blog.service';
import { HttpEvent, HttpResponse} from '@angular/common/http';
import { ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-read-blog',
  templateUrl: './read-blog.component.html',
  styleUrls: ['./read-blog.component.css']
})
export class ReadBlogComponent implements OnInit {

	constructor(private blogService : BlogService, private route: ActivatedRoute, private router: Router){
		let body = document.getElementsByTagName('body');	
		body[0].style.backgroundColor = "#fcfcfc";
		body[0].style.color = "#3a3a3a";
		this.scrollTop();
	}
	blog: Blog;
	isLoading: boolean = true;

  	ngOnInit(): void {
  		this.route.paramMap.subscribe(params => {
			this.blogService.getBlog(params.get('id')).subscribe(blogs=>{
				console.log(blogs);
				this.blog = blogs[0] //.slice().reverse();
				this.isLoading = false;
			});
		});

	}
	time(time_stamp){
		let dateObj = new Date(parseInt(time_stamp) + 330 * 60000); 
		let utcString = dateObj.toUTCString();
		return utcString.slice(0, -4)+" IST";
	}
	back(){
		this.router.navigate(['/blog']);
	}
  	scrollTop(){
			window.scrollTo(0, 0);
	}

}
