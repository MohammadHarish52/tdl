window.addEventListener("load" , ()=>{
    const form = document.querySelector("#new-task-form");
    const input = document.querySelector("#new-task-input");
    const list_el = document.querySelector("#tasks");

    const currentDate = new Date();
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const weekName = daysOfWeek[currentDate.getUTCDay()]; // Get the day of the week as a string
    const datee = currentDate.getDate();
    const month = currentDate.getMonth();
    const year = currentDate.getFullYear();
    const weLiveInMoments = document.getElementById("welive");
    weLiveInMoments.innerHTML = `Todo list ${weekName} ${datee} / ${month} / ${year}` 


   form.addEventListener("submit" , (e)=>{


          
       e.preventDefault();

       const task = input.value;
       //chehcking for the value if it resides

       if(!task) alert("fill the task");

       //if yes creating the given html pattern we created earlier

       const task_el = document.createElement("div");
       task_el.classList.add("task");



       const task_content_el = document.createElement("div");
       task_content_el.classList.add("content");
    



    //   



       task_el.appendChild(task_content_el);

       const task_input_el = document.createElement("input");
          task_input_el.setAttribute('type' ,'text');
          task_input_el.classList.add("text");
          task_input_el.value = task;
          task_input_el.setAttribute("readonly" , "readonly");

          task_content_el.appendChild(task_input_el);

          
       const action_bt = document.createElement("div");
       action_bt.classList.add("actions");

       const edit = document.createElement("button");

       edit.classList.add("edit");
       edit.innerHTML = "Edit";

       const delet = document.createElement("button");

       delet.classList.add("delete");
       delet.innerHTML = "Delete";

       action_bt.appendChild(edit);
       action_bt.appendChild(delet);
       task_el.appendChild(action_bt);



       list_el.appendChild(task_el);

       input.value = "";

       //edit the saved text and make changes whenever required

       edit.addEventListener("click" , (e)=>{
        if(edit.innerText.toLowerCase() == "edit"){
        task_input_el.removeAttribute("readonly");
        task_input_el.focus();
        edit.innerText = "Save";
        }else{
            task_input_el.setAttribute("readonly" , "readonly");
            edit.innerText = "Edit";
          
        }
       })
       delet.addEventListener("click" , (e)=>{
        list_el.removeChild(task_el);
       })

   })

})