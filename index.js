let div=document.createElement("div");
div.innerHTML="<p>this is a paragraph tag</p>";
document.body.appendChild(div);

// ***************************kon akta di create kor ***************************
// ***************************************************************
// let div=document.createElement("div");
// div.id="foysalID"
// div.innerHTML="<p>this is a paragraph tag</p>";
// document.body.appendChild(div);
// ************************ div ar bitore id create********************
// ***************************************************************-*****

// let div=document.createElement("div");
// div.className="foysal"
// div.innerHTML="<p>this is a paragraph tag</p>";
// document.body.appendChild(div);
// ********************************** div ar bitory class Name create***********
// *************************************************************************
// let div=document.createElement("div");
// div.id="foysalID"
// div.className="foysalClass"
// div.innerHTML="<p>this is a paragraph tag</p>";
// document.body.appendChild(div);
// ********************* class and id ak sathe set kora div a bitory*******************
/********************************************************************************* */
// let div=document.createElement("div");
// div.id="foysalID"
// div.className="foysalClass"
// let text = document.createTextNode("foysal vai er kotha akhane text hobe");
// div.appendChild(text);
// document.body.appendChild(div);
// ***************************** div = text lekha***********************
// *********************************************************************
// let div=document.createElement("div");
// div.id="foysalID"
// div.className="foysalClass"
// let h1 = document.createElement("h1");
// h1.textContent="foysal ahmed sorker sir koise tomi akhane h1 lekhe felo";
// div.appendChild(h1)
// document.body.appendChild(div);

// ********************************************* div= h1 tag*****************
// ****************************************************************

// let ul= document.createElement("ul");
// ul.id="menu";
// let li1= document.createElement("li");
// li1.textContent="home"
// ul.appendChild(li1);
// let li2 = document.createElement("li")
// li2.textContent="about"
// ul.appendChild(li2);
// let li12 = document.createElement("li")
// li12.textContent="foysal"
// ul.appendChild(li12);
//  li15 = document.createElement("ul")
// li15.textContent="simcity"
// ul.appendChild(li15);
// document.body.appendChild(ul);

// ******************************** ul li create kora***************************
// ******************************************************************************

// let script =document.createElement("script");
// script.src="foysal.js";
// document.body.appendChild(script);
// ********************************** Script tag use*****************
// ********************************************************************

// let div =document.createElement("div")
// div.id="foysalId"
// let p =document.createElement("p");
// p.innerHTML="p tag";
// div.appendChild(p);
// document.body.appendChild(div);

// ******************************* details***************************************
// ********************************************************************************

// let menu= document.querySelector("#menu");

// function CreateMenu(hello){
//     let li =document.createElement("li");
//     li.textContent=hello;
//     return li;

// }

// menu.appendChild(CreateMenu("ahmed"));
// menu.appendChild(CreateMenu("sorker"));
// menu.appendChild(CreateMenu("ahmed"));
// menu.appendChild(CreateMenu("bangla"));
// menu.appendChild(CreateMenu("english"));
// menu.appendChild(CreateMenu("simcity"));
// menu.appendChild(CreateMenu("bahrain"));
// menu.appendChild(CreateMenu("usa"));
// menu.appendChild(CreateMenu("ksa"));
// menu.appendChild(CreateMenu("chalak"));
// menu.appendChild(CreateMenu("fiverr"));
// menu.appendChild(CreateMenu("upwork"));
// menu.appendChild(CreateMenu("freelancer"));
// menu.appendChild(CreateMenu("peopleperhour"));
// ******************************** ul li create ak sathe onke gola******************
// *************************************************************************************
// let menu= document.getElementById("menu");
// console.log(menu.textContent);
// ******************************************** text content console .log   code="01" **********
// *******************************************************************************
// let menu =document.querySelector("#menu");
// console.log(menu.innerHTML);
// ************************************************* innerhtml console a sob dekha be  code="02"*************
// **************************************************************************************************
// let menu = document.querySelector("#menu") 
// let p=document.createElement("P");
// p.textContent="foysal ahmed sorker dom javascript tutorial"
// menu.appendChild(p)
// ********************************************************************** dispatchEvent={.o} code="03"
// ****************************************************************************************************
// let menu = document.querySelector("#menu")
// // menu.innerHTML="<p>foysal ahmed sorker in fifa world cup</p>";
// ***********************************************************************************************************
// ***********************************************************************************************************
// ***********************************************************************************************************
// let menu= document.querySelector("#menu");
// let lang=["javascript","php","java","python","hyper text markup language","foysal","ahmed","simcity"];
// // let fragment= new DocumentFragment()
// let fragment=document.createDocumentFragment();

// lang.forEach((Language)=> {
//     let li =document.createElement("li");
//     li.textContent = Language;
//     fragment.appendChild(li);
// })
// menu.appendChild(fragment)
// ************************************************** code no ="04"*******************
// let menu= document.querySelector("#menu");
// let li= document.createElement("li");
// li.textContent="foysal";
// menu.insertBefore(li,menu.firstElementChild)
// ***************************** code="05 "start and end ************************************
// let app =document.querySelector("#app");
// let names =["javascript", "html","css","bootstrap"];

// let DOMScript= names.map((names)=>{
//     let li= document.createElement("li");
//     li.textContent=names;
//     return li;
// })
// app.append(...DOMScript);
// // prepend

// let apps=document.querySelector("#apps");
// let lang=["bangladesh","india","pakistan","japan"];
// let details =lang.map((Languages)=>{
//     let li=document.createElement("li");
//     li.innerHTML =Languages;
//     return li;
// })
// apps.prepend(...details);


// ************************************* appned and prepend use korra **********
// ****************************************************************************
// let menu=document.querySelector("#menu");
// menu.insertAdjacentHTML("beforebegin","<h1>foysal ahmed before  sorker</h1>");
// menu.insertAdjacentHTML("afterbegin","<h4>foysal   after ahmed sorker</h4>");
// menu.insertAdjacentHTML("afterend","<h4>foysal ahmed bangladesh</h4>");
// menu.insertAdjacentHTML("beforeend","<h4>foysal before end kore kaj onek</h4>");

// ********************************** code="16" after before****************************
// *******************************************************************************************

// niher je kajta ase aita duita ake kaj babu
// let menu=document.querySelector("#menu");
// let li =document.createElement("li");
// li.textContent="home";
// menu.replaceChild(li,menu.lastElementChild)
// let menu=document.querySelector("#menu");
// // let li =document.createElement("li");
// // li.textContent="home";
// // menu.removeChild(menu.lastElementChild)
// let cloneNode=menu.cloneNode(true);
// cloneNode.id="foysalid"
// document.body.appendChild(cloneNode);


// let foysal=document.querySelector("div")
// foysal.id="menu";
// button ar uporer ogosos ss sos sos s os sos so/
// let btn=document.querySelector("#btn")
// if(btn){
//     btn.setAttribute('id','foysal');
// }
// let btn=document.querySelector("#btn");
// if(btn){
//     console.log(btn.getAttribute("target"));
// // }
// let btn=document.querySelector("#btn");

// console.log (btn.removeAttribute("target"));
// ****************************************** target code="18"*************
// let menu=document.querySelector("#menu");
// menu.style.color="green";
// menu.style.backgroundColor="yellow";
// ************************************* css use*/**** */
// let menu=document.querySelector("#menu");
// let style=getComputedStyle(menu);
// console.log(style.fontSize );


let p =document.querySelector("p");

p.className="simcity";
 console.log(p.className);

