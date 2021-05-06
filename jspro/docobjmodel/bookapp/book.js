function createBook(){
    let book_name=bookname.value;
    let author_name=author.value;
    let amount=price.value;
    let book={bookname:book_name,authorname:author_name,price:amount}

    localStorage.setItem(bookname,JSON.stringify(book))
    let obj=JSON.parse(localStorage.getItem(bookname));
    populate(obj);

}
function populate(book)
{   /*let len=localStorage.length;
    for(let i=1;i<=len;i++)
    {   let book=JSON.parse(localStorage.getItem(localStorage.key(i)));
        let html_val = `<td>${booke.bookname}</td>
        <td>${booke.authorname}</td>
        <td>${booke.price}</td> `
        document.querySelector("#result").innerHTML=html_val;*/
        const list = document.getElementById('result');
        const row = document.createElement('tr');
        row.innerHTML = `<td>${book.bookname}</td>
                    <td>${book.authorname}</td>
                    <td>${book.price}</td>`;
                
        list.appendChild(row);
    }
    /*let html_val=`<tr><td>${book.bookname}</td>
    <td>${book.authorname}</td>
    <td>${book.price}</td> </tr>`
    document.querySelector("#result").innerHTML=html_val;    
}*/