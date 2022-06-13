const var_panels=document.querySelectorAll('.panel');
var_panels.forEach((panel)=>
{
    panel.addEventListener('click',()=>{
        removeActive();
        panel.classList.add('active')
        
    })
})
function removeActive(){
    var_panels.forEach(panel =>{
        panel.classList.remove('active')
    })
}
