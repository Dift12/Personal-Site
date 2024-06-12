export default function Terminal(itemsArray){
    const list=document.createElement("ul");

    if(!itemsArray){
        return
    }
    
    itemsArray.forEach(item => {
        const li=document.createElement("li");
        li.textContent=item;
        li.classList.add("command");
        list.appendChild(li);
    });

    return list
}