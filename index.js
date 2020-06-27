const listItem = document.querySelectorAll(".list-item");
const lists = document.querySelectorAll(".lists");

let draggedItem = null;

for (let index = 0; index < listItem.length; index++) {
    const item = listItem[index];
    item.setAttribute("draggable",true);

    item.addEventListener("dragstart",function(e){
        draggedItem = this;

        setTimeout(function(){
            draggedItem.style.display='none';
        },0)
    });

    item.addEventListener("dragend",function(e){

        setTimeout(function(){
            draggedItem.style.display='block';
            draggedItem = null;
        },0);
    })

    for (let j= 0; j < lists.length; j++) {
        const list = lists[j];

        list.addEventListener("dragover",function(e){
            e.preventDefault();
        });

        list.addEventListener("dragenter",function(e){
            e.preventDefault();
        });

        list.addEventListener("drop",function(e){
            this.append(draggedItem);
        });
        
    }
}