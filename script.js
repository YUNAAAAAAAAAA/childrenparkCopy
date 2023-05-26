let mainnav = document.querySelectorAll("#mainnav > li");
let navcontainer = document.querySelectorAll("#navcontainer > ul");

mainnav.forEach((element,index)=>{
    element.addEventListener("mouseover",()=>{
        navcontainer.forEach((element,navIndex)=>{
            navcontainer[navIndex].style.display="none";
        });
        
        navcontainer[index].style.display="flex";
        navcontainer[index].style.justifyContent = "center";
    })
})



/**
 * 1. 마우스오버했을 경우
 * 2. 열어두었던 nav아이템들을 모두 닫아주어라
 * 3. 내가 마우스오버한 요소의 nav아이템을 열어라
 * 
 * */


/** title : 방법2 (style을 넣는 코드가 많아져서 css에 class를 한개 만들고 classList로 보완한 코드 )
mainnav.forEach((element,index)=>{
    element.addEventListener("mouseover",()=>{
        navcontainer.forEach((element,navIndex)=>{
            navcontainer[navIndex].classList.remove("activemenu");
        });
        
        navcontainer[index].classList.add("activemenu");
    })
})
 */



/** 조건문으로 하면 이렇게 길어짐
 *
if(mainnav[0].addEventListener('mouseover',()=>{
    navcontainer[3].style.display = 'none';
    navcontainer[0].style.display = 'flex';
    navcontainer[0].style.justifyContent = "center";
})){
}else if(mainnav[1].addEventListener('mouseover',()=>{
    navcontainer[0].style.display = 'none';
    navcontainer[1].style.display = 'flex';
    navcontainer[1].style.justifyContent = "center";
}));   
else if(mainnav[2].addEventListener('mouseover',()=>{
    navcontainer[1].style.display = 'none';
    navcontainer[2].style.display = 'flex';
    navcontainer[2].style.justifyContent = "center";
}));    
else if(mainnav[3].addEventListener('mouseover',()=>{
    navcontainer[2].style.display = 'none';
    navcontainer[3].style.display = 'flex';
    navcontainer[3].style.justifyContent = "center";
}));
 * 
 */

    
    /*
    mainnav.forEach((element,index)=>{
    element.addEventListener("mouseover",()=>{
        navcontainer[index].style.display = "flex";
        navcontainer[index].style.justifyContent = "center";
    })
})*/

