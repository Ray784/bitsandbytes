import { Component, OnInit } from '@angular/core';
import {Resource} from '../resource';
import {Book} from '../book';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-interview',
  templateUrl: './interview.component.html',
  styleUrls: ['./interview.component.css']
})
export class InterviewComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router) { 
  }
  show: boolean = true;
  ngAfterViewInit(){
		var acc = document.getElementsByClassName("accordion");
		var i;
		for (i = 0; i < acc.length; i++) {
			acc[i].addEventListener("click", function() {
				this.classList.toggle("active");
				var panel = this.nextElementSibling;
				if (panel.style.maxHeight) {
					panel.style.maxHeight = null;
				} else {
					panel.style.maxHeight = panel.scrollHeight + "px";
				}
			});
		}
	}
  ngOnInit(): void {
  	if (window.screen.width < 720)
         this.show = false;
	}
  	private colors = {
	  	'hackerrank': '#22B356',
	  	'hackerearth': '#2C3454',
	  	'geeksforgeeks': '#098043',
	  	'leetcode': '#F89F1B',
	  	'codesignal': '#51ABF8',
	  	'firecode': '#EC6617',
	  	'interviewbit': '#61DDE1',
	  	'github': '#24282E',
	  	'educative': '#4951F2',
	  	'interviewcake': '#5BC0DE',
	  	'codechef': '#743E1D',
	  	'algodaily': '#4B515C',
	  	'codeforces': '#425E9C',
	  	'topcoder': '#575757',
	  	'backtobackswe': '#80D9DD',
	  	'youtube': '#CC0000',
	  	'mycodeschool': '#4F4F4F',
	  	'pramp': '#7F63A9'
	};


  panelOpenState = false;

  practice_links: Resource[] = [
  	{avatar: 'hackerrank.jpg',desp: 'Hackerrank Interview Preparation kit',link: 'https://www.hackerrank.com/interview/interview-preparation-kit',color: this.colors.hackerrank},
	{avatar: 'hackerearth.jpg',desp: 'Hackerearth Programming Tutorials',link: 'https://www.hackerearth.com/practice/',color: this.colors.hackerearth},
	{avatar: 'leetcode.jpg',desp: 'LeetCode Top Interviews Problem set',link: 'https://leetcode.com/problemset/top-interview-questions/',color: this.colors.leetcode},
	{avatar: 'geeksforgeeks.jpg',desp: 'Geeks For Geeks Company Interview Corner',link: 'https://www.geeksforgeeks.org/company-interview-corner/',color: this.colors.geeksforgeeks},
	{avatar: 'geeksforgeeks.jpg',desp: 'Geeks For Geeks company wise coding questions',link: 'https://www.geeksforgeeks.org/must-coding-questions-company-wise/',color: this.colors.geeksforgeeks},
	{avatar: 'codesignal.jpg',desp: 'CodeSignal interview practice',link: 'https://codesignal.com/developers/interview-practice/',color: this.colors.codesignal},
	{avatar: 'firecode.jpg',desp: 'Firecode interview preparation',link: 'https://www.firecode.io',color: this.colors.firecode},
	{avatar: 'interviewbit.jpg',desp: 'InterviewBit Practice Interview Questions',link: 'https://www.interviewbit.com/practice/',color: this.colors.interviewbit}]
  web_resources: Resource[] = [
	{avatar: 'hackerearth.jpg',desp: 'Hackerearth Data Structures Notes and Practice',link: 'https://www.hackerearth.com/practice/data-structures/',color: this.colors.hackerearth},
	{avatar: 'leetcode.jpg',desp: 'LeetCode Interview Experience',link: 'https://leetcode.com/discuss/interview-experience/',color: this.colors.leetcode},
	{avatar: 'geeksforgeeks.jpg',desp: 'Geeks For Geeks Data Structures Notes',link: 'https://www.geeksforgeeks.org/data-structures/',color: this.colors.geeksforgeeks},
	{avatar: 'github.png',desp: 'Full Interview Preparation Kit',link: 'https://github.com/jwasham/coding-interview-university',color: this.colors.github},
	{avatar: 'github.png',desp: 'CSE resources for Interview Preparation',link: 'https://github.com/rafi007akhtar/CSE-resources',color: this.colors.github},
	{avatar: 'educative.jpg',desp: 'Educative CodeRust ($) - available free via github student pack',link: 'https://www.educative.io/courses/coderust-hacking-the-coding-interview',color: this.colors.educative},
	{avatar: 'interviewcake.jpg',desp: 'Interview Cake Preparation kit ($) - available free via github student pack',link: 'https://www.interviewcake.com/table-of-contents',color: this.colors.interviewcake} ]
  compete_code_links: Resource[] = [
  	{avatar: 'hackerearth.jpg',desp: 'Hackerearth Programming Practice',link: 'https://www.hackerearth.com/',color: this.colors.hackerearth},
	{avatar: 'hackerrank.jpg',desp: 'Hackerrank Programming Practice',link: 'https://www.hackerrank.com/',color: this.colors.hackerrank},
	{avatar: 'codechef.jpg',desp: 'Codechef Programming Practice',link: 'https://www.codechef.com/',color: this.colors.codechef},
	{avatar: 'codeforces.jpg',desp: 'CodeForces Practice',link: 'https://www.codeforces.com/',color: this.colors.codeforces},
	{avatar: 'topcoder.jpg',desp: 'TopCoder Practice',link: 'https://www.topcoder.com/',color: this.colors.topcoder},
	{avatar: 'algodaily.jpg',desp: 'AlgoDaily Algorithms and DataStructure Practice',link: 'https://www.algodaily.com/',color: this.colors.algodaily}]
  youtube_links: Resource[] = [
  	{avatar: 'backtobackswe.jpg',desp: 'Back To Back SWE',link: 'https://www.youtube.com/channel/UCmJz2DV1a3yfgrR7GqRtUUA',color: this.colors.backtobackswe},
  	{avatar: 'leetcode.jpg',desp: 'LeetCode Solutions',link: 'https://www.youtube.com/playlist?list=PLU_sdQYzUj2keVENTP0a5rdykRSgg9Wp-',color: this.colors.leetcode},
  	{avatar: 'youtube.jpg',desp: 'Coding Made Simple - Tushar Roy',link: 'https://www.youtube.com/user/tusharroy2525/playlists',color: this.colors.youtube},
  	{avatar: 'youtube.jpg',desp: 'Programming Foundations - mycodeschool',link: 'https://www.youtube.com/user/mycodeschool/playlists',color: this.colors.mycodeschool},
  	{avatar: 'youtube.jpg',desp: 'Tech Dummies',link: 'https://www.youtube.com/channel/UCn1XnDWhsLS5URXTi5wtFTA/playlists',color: this.colors.youtube},
  	{avatar: 'csdojo.jpg',desp: 'CS Dojo',link: 'https://www.youtube.com/channel/UCxX9wt5FWQUAAz4UrysqK9A/playlists',color: this.colors.hackerearth}]
  interview_links: Resource[] = [
  	{avatar: 'interviewbit.jpg',desp: 'InterviewBit Mock Interview',link: 'https://www.interviewbit.com/mock-interview/',color: this.colors.interviewbit},
  	{avatar: 'pramp.jpg',desp: 'Pramp practice Interviews',link: 'https://www.pramp.com/',color: this.colors.pramp}]
   book_links: Book[] = [
    {prev: 'i-1', desp: 'Compute Science Distilled',link: 'https://www.amazon.com/Computer-Science-Distilled-Computational-Problems/dp/0997316020', },
  	{prev: 'i-2', desp: 'Cracking the Coding Interview',link: 'https://www.amazon.com/Cracking-Coding-Interview-Programming-Questions/dp/0984782850/'},
  	{prev: 'i-3', desp: 'Programming Interviews Exposed',link: 'https://www.amazon.in/Programming-Interviews-Exposed-Secrets-Professional/dp/1118261364'},
  	{prev: 'i-4', desp: 'Elements of Programming Interviews',link: 'https://www.amazon.com/Elements-Programming-Interviews-Insiders-Guide/dp/1479274836'},
  	{prev: 'i-5', desp: 'The Google Resume',link: 'https://www.amazon.in/Google-Resume-Gayle-Laakmann-Mcdowell/dp/8126538058/'}]
   
   resources = [{title: 'Web Resources',subtitle: 'Websites to help you learn.', resource: this.web_resources},
   {title: 'Online Practice',subtitle: 'Websites to practice coding', resource: this.practice_links},
   {title: 'Competitive Programming',subtitle: 'Websites for competitive programming', resource: this.compete_code_links},
   {title: 'Youtube',subtitle: 'Useful youtube channels', resource: this.youtube_links},
   {title: 'Mock interviews',subtitle: '', resource: this.interview_links},
   ]
}