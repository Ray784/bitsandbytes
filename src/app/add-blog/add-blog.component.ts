import { Component, OnInit } from '@angular/core';
import {Blog} from '../blog';
import {BlogService} from '../blog.service';
import { HttpClient } from '@angular/common/http';
import { FormControl, FormGroup } from '@angular/forms';
import {DomSanitizer} from '@angular/platform-browser';



@Component({
  selector: 'app-add-blog',
  templateUrl: './add-blog.component.html',
  styleUrls: ['./add-blog.component.css']
})
export class AddBlogComponent implements OnInit {

  constructor(private blogService : BlogService, private http: HttpClient, private domSanitizer: DomSanitizer) {
  		let body = document.getElementsByTagName('body');	
		body[0].style.backgroundColor = "#fcfcfc";
		body[0].style.color = "#3a3a3a";
		this.scrollTop();
   }
  blogs: Blog[];
  images;
  isLoading: boolean = true;
  edit_type: string = "Edit";
  editing: boolean = false;
  blogEditForm;
  file: File;
  private editUrl:string = "http://localhost:8080/setBlog";

  ngOnInit(): void {
  	this.blogService.getBlogs().subscribe(blogs=>{
  		this.blogs = blogs['blogs'].slice().reverse();
      this.images = blogs['images'].sort(function(a, b){
          if(a.data < b.data) { return -1; }
          if(a.data > b.data) { return 1; }
          return 0;
      });
  		this.isLoading = false;
  	});
  	this.blogEditForm = new FormGroup({
      _id: new FormControl('-1'),
      title: new FormControl(''),
      author: new FormControl(''),
      footer: new FormControl(''),
      body: new FormControl(''),
      time_stamp: new FormControl(''),
      image: new FormControl('')
    });
  }

  currBlog:Blog;

  edit(blog):void {
  		this.editing = true;
  		this.edit_type = "Edit";
      this.blogEditForm.get('_id').setValue(blog._id);
  		this.blogEditForm.get('title').setValue(blog.title);
  		this.blogEditForm.get('author').setValue(blog.author);
  		this.blogEditForm.get('footer').setValue(blog.footer);
      this.blogEditForm.get('body').setValue(blog.body);
  		this.blogEditForm.get('image').setValue(blog.image);
  		this.blogEditForm.get('time_stamp').setValue(blog.time_stamp);
      this.scrollTop();
  }

  delete(blog):void {
  	let confirmed = confirm('Are you sure you want to delete the selected blog?');
  	if(confirmed == true){
  		this.http.post(this.editUrl, {id: blog._id, blog: "-1"}).subscribe((responseData)=>{
	  		this.resetForm();
		  	this.blogService.getBlogs().subscribe(blogs=>{
		  		this.blogs = blogs['blogs'].slice().reverse();;
		  		this.isLoading = false;
		  	});
	  	});
	  	this.isLoading = true;
  		this.back();
  	}
  	else
  		console.log("not deleted");
    this.scrollTop();
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

  setup(blog){
  	this.currBlog = blog;
    console.log(this.currBlog);
    this.scrollTop();
  }

  resetForm(){
      this.blogEditForm.get('_id').setValue('-1');
  		this.blogEditForm.get('title').setValue('');
  		this.blogEditForm.get('author').setValue('');
  		this.blogEditForm.get('footer').setValue('');
  		this.blogEditForm.get('body').setValue('');
      this.blogEditForm.get('image').setValue('');
  		this.blogEditForm.get('time_stamp').setValue('-1');
  }

  newBlog(){
  	this.resetForm();
  	this.editing = true;
  }

  saveChanges(){
  	let blog = this.blogEditForm.value;
  	let time_stamp = blog.time_stamp;
  	let now = new Date();
  	blog['time_stamp'] = ''+now.getTime();
    this.isLoading = true;
  	this.http.post(this.editUrl, {blog: JSON.stringify(blog)}).subscribe((responseData)=>{
  		this.resetForm();
	  	this.blogService.getBlogs().subscribe(blogs=>{
	  		this.blogs = blogs['blogs'].slice().reverse();
	  		this.isLoading = false;
	  	});
  	});
  	this.back();
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
  back(){
      this.editing = false;
      this.currBlog = undefined;
  }

  otherImage: boolean = false;
  setupOthers(){
    if(this.blogEditForm.get('image').value == 'Others')
      this.otherImage = true;
    else
      this.otherImage = false;
  }
}
