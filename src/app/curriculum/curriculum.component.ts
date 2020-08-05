import { Component, OnInit, AfterViewInit } from '@angular/core';
import {Book} from '../book';
import {Semester} from '../semester';

@Component({
  selector: 'app-curriculum',
  templateUrl: './curriculum.component.html',
  styleUrls: ['./curriculum.component.css']
})
export class CurriculumComponent implements OnInit {

	constructor() { 
		let body = document.getElementsByTagName('body');	
		body[0].style.backgroundColor = "#fcfcfc";
		body[0].style.color = "#3a3a3a";
		this.scrollTop();

	}
	prev_main = 0;
	scrollTop(){
		window.scrollTo(0, 0);
	}

	ngOnInit(): void {
	}
	showData(nav_event, idx){
		let nav = nav_event.target;
		let active_nav = document.getElementsByClassName('active')[0] as HTMLElement;
		let ink_bar = document.getElementById('ink-bar');
		active_nav.classList.remove('active');
		nav.classList.add('active');
		ink_bar.style.top = idx*50 + 'px';

		let active_main = document.getElementsByClassName('main')[this.prev_main] as HTMLElement;
		active_main.classList.add('hide'); 
		this.prev_main = idx;

		active_main = document.getElementsByClassName('main')[this.prev_main] as HTMLElement;
		active_main.classList.remove('hide'); 
	}

	ngAfterViewInit(){
		let active_nav = document.getElementById('nav-bar').firstChild as HTMLElement;
		active_nav.classList.add('active');

		let active_main = document.getElementsByClassName('main')[0] as HTMLElement;
		active_main.classList.remove('hide');
	}

	first_year_1_books: Book[] =
	[{
		prev: '11-11', 
		desp: 'Higher engineering mathematics, Grewal B S', 
		pdf: 'https://b-ok.cc/book/2352263/9368cb/', 
		link:'https://amzn.to/2WqSCRl'
	},{
		prev: '11-12', 
		desp: 'Advanced engineering mathematics, Erwin Kreyszig', 
		pdf: 'https://b-ok.cc/book/511313/dd7f35/',
		link:'https://amzn.to/3b0zBun'
	},{
		prev: '11-13', 
		desp: 'Higher Engineering Mathematics, H K Dass', 
		pdf: 'https://b-ok.cc/book/3384944/dc7a13/', 
		link:'https://amzn.to/2VWTNsW'
	},{
		prev: '11-21', 
		desp: 'Basic Electrical Engineering, D P Kothari, I J Nagrath', 
		pdf: 'https://b-ok.cc/book/5471759/33b0e2/', 
		link: 'https://amzn.to/2zO9cD8'
	},{
		prev: '11-22', 
		desp: 'Basic Electrical Engineering, Kulshreshtha D C', 
		pdf: 'https://b-ok.cc/book/3215110/449ed7/',
		link: 'https://amzn.to/35tsVnn'
	},
	{
		prev: '11-23', 
		desp: 'Basic Electrical Engineering, Technical Publications', 
		pdf: 'https://b-ok.cc/book/1144604/6251f7', 
		link: 'https://amzn.to/3b0ZQR'
	},{
		prev: 'unavailable', 
		desp: 'Engineering Chemistry, P C Jain', 
		pdf: '/#/unavailable', 
		link: 'https://amzn.to/2YwERUc'
	},{
		prev: 'unavailable', 
		desp: 'A Text Book of Engineering Chemistry, Shashi Chawla', 
		pdf: '/#/unavailable',
		link:'https://amzn.to/3deKQB6'
	},{
		prev: '11-41', 
		desp: 'Practical English usage, Michael Swan, David Baker', 
		pdf: 'https://b-ok.cc/book/638349/398ee3/', 
		link: 'https://amzn.to/2WlHllz'
	}]
	first_year_2_books: Book[] = 
	[{
		prev: '11-11', 
		desp: 'Higher engineering mathematics, Grewal B S', 
		pdf: 'https://b-ok.cc/book/2352263/9368cb', 
		link:'https://amzn.to/2WqSCRl'
	},{
		prev: '11-12', 
		desp: 'Advanced engineering mathematics, Erwin Kreyszig', 
		pdf: 'https://b-ok.cc/book/511313/dd7f35',
		link:'https://amzn.to/3b0zBun'
	},{
		prev: '11-13', 
		desp: 'Higher Engineering Mathematics, H K Dass', 
		pdf: 'https://b-ok.cc/book/3384944/dc7a13', 
		link:'https://amzn.to/2VWTNsW'
	},{
		prev: '12-21', 
		desp: 'Halliday & Resnick - Fundamentals of Physics', 
		pdf: 'https://b-ok.cc/book/5274073/863ccb', 
		link:'https://amzn.to/2YHrIb1'
	},{
		prev: '12-22', 
		desp: 'Engineering Physics, B.K. Pandey, S. Chaturvedi ', 
		pdf: 'unavailable', 
		link:'https://amzn.to/2SxBrwF'
	},{
		prev: '12-31', 
		desp: 'C Programming & Data Structures, B.A.Forouzan and R.F. Gilberg', 
		pdf: 'https://b-ok.cc/book/5226530/b79c68', 
		link:'https://amzn.to/3fgaHKx'
	},{
		prev: '12-32', 
		desp: 'Problem Solving and Program Design in C, Jeri R. Hanly', 
		pdf: 'https://b-ok.cc/book/2951542/2a7f2e', 
		link:'https://amzn.to/2KVLoQ9'
	},{
		prev: '12-33', 
		desp: 'The C Programming Language, B.W. Kernighan and Dennis M.Ritchie,', 
		pdf: 'https://b-ok.cc/book/946607/9ac59d', 
		link:'https://amzn.to/2WmCC34'
	},{
		prev: '12-34', 
		desp: 'Programming in ANSI C, Balagurusamy', 
		pdf: 'https://b-ok.cc/book/5483089/ae055b', 
		link:'https://amzn.to/2yoB6Fx'
	},{
		prev: '12-41', 
		desp: 'Engineering Drawing by N D Bhatt', 
		pdf: 'https://b-ok.cc/book/5421141/2fdc19', 
		link:'https://amzn.to/3fl4jSC'
	}]
	second_year_1_books: Book[] = 
	[{
		prev: '21-11', 
		desp: ' Integrated Electronics: Analog and Digital Circuits and Systems, Jacob Millman, Christos C. Halkias', 
		pdf: './assets/books/21-11.pdf', 
		link: 'https://amzn.to/2zg3cmk'
	},{
		prev: '21-12', 
		desp: 'Digital Design, M. Morris Mano, Michael D. Ciletti', 
		pdf: 'https://b-ok.cc/book/890404/0e379f', 
		link: 'https://amzn.to/2L2TFBR'
	},{
		prev: '21-13', 
		desp: 'Analog And Digital Electronics, U.A.Bakshi, A.P.Godse, Technical Publications', 
		pdf: 'https://b-ok.cc/book/2761690/748165', 
		link: 'https://amz.run/3ChD'
	},{
		prev: '21-21', 
		desp: 'Fundamentals of Data Structures, Ellis Horowitz, Sartaj Sahni', 
		pdf: 'https://b-ok.cc/book/5433791/e0a9ef', 
		link: 'https://amz.run/3ChO'
	},{
		prev: '21-22', 
		desp: 'Data structures using C, A.S.Tanenbaum', 
		pdf: 'https://b-ok.cc/book/773984/91a78f', 
		link: 'https://amz.run/3ChS'
	},{
		prev: '21-23', 
		desp: 'Data Structures: A Pseudocode Approach with C, Richard F. Gilberg, Behrouz A. Forouzan', 
		pdf: 'https://b-ok.cc/book/2817042/c1bb05', 
		link: 'https://amz.run/3ChV'
	},{
		prev: '21-31', 
		desp: 'Discrete Mathematics and Its Applications, Kenneth Rosen', 
		pdf: 'assets/book/21-31.pdf', 
		link: 'https://amz.run/3ChX'
	},
	{
		prev: '21-32', 
		desp: 'Discrete Mathematical Structures With Applications To Computer Science Jean-Paul Tremblay, R Manohar', 
		pdf: '/#/unavailable', 
		link: 'https://amz.run/3HQS'
	},
	{
		prev: '21-41', 
		desp: 'Computer System Architecture, Morris Mano', 
		pdf: 'https://b-ok.asia/book/5434241/fd3b0e', 
		link: 'https://amz.run/3HQP'
	},
	{
		prev: '21-42', 
		desp: 'Computer Organization and Architecture, William Stallings', 
		pdf: 'https://b-ok.asia/book/3710986/989b01', 
		link: 'https://amz.run/3HQV'
	},{
		prev: '21-51', 
		desp: 'C++: The Complete Reference, Herbert Schildt', 
		pdf: 'https://b-ok.asia/book/643302/cda4cc', 
		link: 'https://amz.run/3HQZ'
	},
	{
		prev: '21-52', 
		desp: 'Problem Solving with C++: The Object of Programming, Walter J. Savitch', 
		pdf: 'https://b-ok.asia/book/3689357/06a56c', 
		link: 'https://amz.run/3HQa'
	}]
	second_year_2_books: Book[] =
	[{
		prev: '22-11', 
		desp: 'Probability and Statistics for Engineers and Scientists, Ronald E. Walpole, Raymond H. Myers, Sharon L. Myers, Keying E. Ye', 
		pdf: 'https://b-ok.asia/book/1162914/a0ba4f', 
		link: 'https://amz.run/3HQr'
	},
	{
		prev: '22-12', 
		desp: 'Fundamentals of Mathematical Statistics, S.C. Gupta, V.K. Kapoor', 
		pdf: 'https://b-ok.asia/book/1196320/1672bf', 
		link: 'https://amz.run/3HQs'
	},{
		prev: '22-31', 
		desp: 'Operating System Concepts, Abraham Silberschatz, Greg Gagne, Peter B. Galvin', 
		pdf: 'https://b-ok.asia/book/3509014/456f35', 
		link: 'https://amz.run/3HQw'
	},{
		prev: '22-32', 
		desp: 'Operating systems: internals and design principles, William Stallings', 
		pdf: 'https://b-ok.asia/book/1186949/aa3469', 
		link: 'https://amz.run/3HR0'
	},{
		prev: '22-33', 
		desp: 'Advanced Programming in the UNIX Environment, Stephen A., Stevens, W. Richard', 
		pdf: 'https://b-ok.asia/book/2714429/9df329', 
		link: 'https://amz.run/3HR2'
	},{
		prev: '22-34', 
		desp: 'Modern Operating Systems, Andrew S. Tanenbaum, Herbert Bos', 
		pdf: 'https://b-ok.asia/book/5156445/092b7c', 
		link: 'https://amz.run/3HR4'
	},{
		prev: '22-41', 
		desp: 'Database Management Systems, Raghu Ramakrishnan, Johannes Gehrke', 
		pdf: 'https://b-ok.asia/book/901367/9ceb43', 
		link: 'https://amz.run/3HR5'
	},{
		prev: '22-42', 
		desp: 'Database System Concepts, Abraham Silberschatz, Henry F. Korth, S. Sudarshan', 
		pdf: 'assets/book/22-42.pdf', 
		link: 'https://amz.run/3HR6'
	},{
		prev: '22-43', 
		desp: 'Database Systems Using Oracle: A Simplified Guide to SQL and PL/SQL, Nilesh Shah', 
		pdf: 'https://b-ok.asia/book/5440610/6e7e53', 
		link: 'https://amz.run/3HR9'
	},{
		prev: '22-51', 
		desp: 'Fundamentals of Computer Algorithms, Ellis Horowitz, Sartaj Sahni', 
		pdf: 'https://b-ok.asia/book/2221892/a9e730', 
		link: 'https://amz.run/3HRB'
	},{
		prev: '22-52', 
		desp: 'The Design and Analysis of Computer Algorithms, Alfred V. Aho, John E. Hopcroft, Jeffrey D. Ullman', 
		pdf: 'https://b-ok.asia/book/5258569/1962b9', 
		link: 'https://amz.run/3HRC'
	},{
		prev: '22-53', 
		desp: 'Introduction to algorithms, Thomas H. Cormen, Charles E. Leiserson, Ronald L. Rivest, Clifford Stein', 
		pdf: 'https://b-ok.asia/book/986690/1e31b0', 
		link: 'https://amz.run/3HRG'
	}];
	third_year_1_books: Book[]=
	[{
		prev: '31-11', 
		desp: 'Introduction to Automata Theory, Languages, and Computations, John E. Hopcroft, Rajeev Motwani, Jeffrey D. Ullman', 
		pdf: 'https://b-ok.asia/book/2481927/4ae4ec', 
		link: 'https://amz.run/3HRH'
	},{
		prev: '31-12', 
		desp: 'Theory of Computer Science: Automata, Languages and Computation, K. L. P. Mishra, N. Chandrasekaran', 
		pdf: 'https://b-ok.asia/book/3405512/abe1c2', 
		link: 'https://amz.run/3HRI'
	},{
		prev: '31-21', 
		desp: ' Software engineering : a practitioner’s approach, Maxim, Bruce R., Pressman, Roger S.', 
		pdf: 'assets/book/31-21.pdf', 
		link: 'https://amz.run/3HRL'
	},{
		prev: '31-22', 
		desp: ' Software Engineering, Ian Sommerville', 
		pdf: 'https://b-ok.asia/book/3703896/29204d', 
		link: 'https://amz.run/3HRQ'
	},{
		prev: '31-23', 
		desp: 'The Unified Modeling Language User Guide, Grady Booch, James Rumbaugh, Ivar Jacobson', 
		pdf: 'https://b-ok.asia/book/703954/af3150', 
		link: 'https://amz.run/3HRR'
	},{
		prev: '31-31', 
		desp: 'Computer Networks, 5th Edition, ANDREW S.TANENBAUM, DAVID J.WETHERALL', 
		pdf: 'https://b-ok.asia/book/2027145/ab22a4', 
		link: 'https://amz.run/3HRS'
	},{
		prev: '31-41', 
		desp: 'Artificial Intelligence: A Modern Approach, 3rd Edition, Stuart J. Russell, Peter Norvig', 
		pdf: 'https://b-ok.asia/book/3704484/55dad1', 
		link: 'https://amz.run/3HRU'
	},{
		prev: '31-42', 
		desp: 'Artificial Intelligence, Kevin Knight, Elaine Rich, B. Nair', 
		pdf: 'assets/book/31-42.pdf', 
		link: 'https://amz.run/3HRV'
	}]
	third_year_2_books: Book[] = 
	[{
		prev: '32-11', 
		desp: 'Machine learning, Thomas Mitchell', 
		pdf: 'assets/book/32-11.pdf', 
		link: 'https://amz.run/3HRX'
	},{
		prev: '32-12', 
		desp: 'Machine Learning: An Algorithmic Perspective, Second Edition, Stephen Marsland', 
		pdf: 'https://b-ok.asia/book/2543746/ef80cb', 
		link: 'https://amz.run/3HRY'
	},{
		prev: '32-21', 
		desp: 'Compilers Principles, Techniques, and Tools, Alfred V. Aho, Monica S. Lam, Ravi Sethi, Jeffrey D. Ullman', 
		pdf: 'https://b-ok.asia/book/5502197/383e5b', 
		link: 'https://amz.run/3HRZ'
	},{
		prev: '32-22', 
		desp: 'lex & yacc, Doug Brown, John Levine, Tony Mason', 
		pdf: 'https://b-ok.asia/book/2831899/28bbb4', 
		link: 'https://amz.run/3HRa'
	}]
	fourth_year_1_books: Book[] = [
	{
		prev: '41-11', 
		desp: 'Cryptography and Network Security, William Stallings', 
		pdf: 'https://b-ok.asia/book/637151/1b22e7', 
		link: 'https://amz.run/3Ify'
	},{
		prev: '41-21', 
		desp: 'Big Data and Analytics, Subhashini Chellappan, Seema Acharya', 
		pdf: '/#/unavailable', 
		link: 'https://amz.run/3Ig3'
	},{
		prev: '41-22', 
		desp: "Big Data, Big Analytics: Emerging Business Intelligence and Analytic Trends for Today's Businesses Michael Minelli, Michele Chambers, Ambiga Dhiraj", 
		pdf: 'https://b-ok.asia/book/2271586/0cc121', 
		link: 'https://amz.run/3Ig4'
	},{
		prev: '41-23', 
		desp: 'Hadoop: The Definitive Guide, Tom White', 
		pdf: 'https://b-ok.asia/book/2720393/bfbf0b', 
		link: 'https://amz.run/3Ig5'
	},{
		prev: '41-24', 
		desp: 'Big Data Analytics: Disruptive Technologies for Changing the Game, Arvind Sathi', 
		pdf: 'https://b-ok.asia/book/2072853/3015a1', 
		link: 'https://amz.run/3Ig6'
	}]

	fourth_year_2_books: Book[] = [ ]

	sems: Semester[] = [
			{year: 'Year I-', sem:'Sem I', books: this.first_year_1_books}, 
			{year: 'Year I-', sem:'Sem II', books: this.first_year_2_books},
			{year: 'Year II-', sem:'Sem I', books: this.second_year_1_books},
			{year: 'Year II-', sem:'Sem II', books: this.second_year_2_books},
			{year: 'Year III-', sem:'Sem I', books: this.third_year_1_books},
			{year: 'Year III-', sem:'Sem II', books: this.third_year_2_books},
			{year: 'Year IV-', sem:'Sem I', books: this.fourth_year_1_books},
			{year: 'Year IV-', sem:'Sem II', books: this.fourth_year_2_books},
			{year: 'Elective-', sem:'I',  books: this.fourth_year_2_books},
			{year: 'Elective-', sem:'II', books: this.fourth_year_2_books},
			{year: 'Elective-', sem:'III', books: this.fourth_year_2_books},
			{year: 'Elective-', sem:'IV', books: this.fourth_year_2_books},
			{year: 'Elective-', sem:'V', books: this.fourth_year_2_books},
			{year: 'Elective-', sem:'VI', books: this.fourth_year_2_books},]; 

	showMenuBar(nav){
		nav.classList.toggle("rotate");
		let menu = document.getElementById('menu');
		let header = document.getElementById('header');
		if (menu.style.display === "none")
			menu.style.display = "block";
		else
			menu.style.display = "none";
	}
	scrollDiv(direction){
		let scroll = (document.getElementById('nav-bar').firstChild as HTMLElement).offsetWidth;
		document.getElementById('nav-bar').scrollLeft += (scroll*direction*2 + 40);
	}
}
