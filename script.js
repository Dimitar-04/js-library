let myLibrary=[];
let id=0;
function Book(title, author, pages, read){
    this.title=title;
    this.author=author;
    this.pages=pages;
    this.read=read;
    this.id=id++;
}

let title;
let author;
let pages;
let read;

const showbtn=document.querySelector('.open');
let dialog=document.getElementById("dialog");
const  submit=document.querySelector('.submit');
let close=document.querySelector('.close-btn');


showbtn.addEventListener("click", ()=>{
    dialog.value='';
    dialog.querySelector('#title').value='';
    dialog.querySelector('#author').value='';
    dialog.querySelector('#pages').value='';
    
    dialog.showModal();
});




let container=document.querySelector('.container');

let i=0;
let btn2;


function display(){
    
        container.innerHTML='';

        myLibrary.forEach((book,index)=>{
            let div=document.createElement('div');
            div.classList.add('books');
            div.setAttribute('data-index',index);
           

            let p1=document.createElement('p');
            let p2=document.createElement('p');
            let p3=document.createElement('p');
            let btn=document.createElement('button');
            btn2=document.createElement('button');
            p1.textContent=book.title;
            p2.textContent=book.author;
            p3.textContent=book.pages;

            btn2.textContent="Delete";
            btn2.classList.add('delete');
            btn.textContent="Not read";
            btn.classList.add('unread');

            btn.addEventListener("click",()=>{
                if(btn.textContent=='Read'){
                    btn.classList.remove('reading');
                    btn.textContent='Not read';
                    btn.classList.add('unread');
                }
                else{
                    btn.textContent='Read';
                    btn.classList.remove('unread');
                    btn.classList.add('reading');
                }
            })
            if(book.read==true){
                btn.textContent="Read";
                btn.classList.remove('unread');
                btn.classList.add('reading');
            }
            btn2.addEventListener('click',()=>{
                myLibrary.splice(index,1);
                display();
            })
            div.appendChild(p1);
            div.appendChild(p2);
            div.appendChild(p3);
            div.appendChild(btn);
            div.appendChild(btn2);
            container.appendChild(div);
        })
   
}



close.addEventListener("click",()=>{
    dialog.close();
})


submit.addEventListener("click",()=>{
    title=document.getElementById('title').value;
    author=document.getElementById('author').value;
    pages=document.getElementById('pages').value;
    
    if(document.getElementById('read').checked)
    {
        read=true;
    }
    else
    {
        read=false;
    }
    if(title!='' && author!='' && pages!=0)
    {
        let book=new Book(title, author,pages, read );
        myLibrary.push(book);
       

        display();
    }
    else{
        alert("MISSING INFO")
    }
    dialog.close();
})

let btnX=document.querySelector('.X');
btnX.addEventListener("click", ()=>{
    dialog.close();
})