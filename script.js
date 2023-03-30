ham_icon=document.getElementsByClassName('ham-icon')[0];

ham_icon.addEventListener('click', (event)=>{
    console.log("ham clicked");
    ham_line_1=document.getElementById('line1');
    ham_line_2=document.getElementById('line2');
    ham_line_3=document.getElementById('line3');
    ham_menu=document.getElementsByClassName('ham-menu')[0];
    console.log(ham_line_1,ham_line_2,ham_line_3);
    ham_line_1.classList.toggle('line1-rotate');
    ham_line_2.classList.toggle('line2-remove');
    ham_line_3.classList.toggle('line3-rotate');
    ham_menu.classList.toggle('ham-menu-display');
})