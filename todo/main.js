window.onload = () => {
    const input = document.getElementById("place");
    const submit = document.getElementById("btn");
    const todos = document.getElementById("todos");
    let item = null;
    // document.getElementById("text").style.bottom="2rem"

    submit.addEventListener("click", (e) => {
        e.preventDefault();
        if (submit.value != "Submit") {
            item.innerHTML = document.getElementById("place").value;
            document.getElementById("place").value = "";
            submit.value = "Submit"
            document.getElementById("text").innerHTML = `Successfully Edited!!`;
            setTimeout(() => {
                    document.getElementById("text").innerHTML = "";
                },[3000])
            return;
        }
        if (document.getElementById("place").value == "" || document.getElementById("place").value.trim("") == "") {
            document.getElementById("place").value = "";
            return;
        }
        
        const li = document.createElement("div");
        const h2 = document.createElement("h2");
        const btn = document.createElement("div");
        const dlt = document.createElement("button");
        const edit = document.createElement("button");

        li.className = "todo";
        btn.className = "btn1";
        dlt.className = "editbtn";
        edit.className = "editbtn";

        dlt.value = "delete";
        edit.value = "edit";

        dlt.appendChild(document.createTextNode("Delete"))
        edit.appendChild(document.createTextNode("Edit"))
        btn.appendChild(dlt);
        btn.appendChild(edit);
        h2.appendChild(document.createTextNode(document.getElementById("place").value));

        li.appendChild(h2);
        li.appendChild(btn);
        todos.appendChild(li);
        document.getElementById("place").value = "";

        edit.addEventListener("click", (e) => {
            input.value = e.target.parentNode.parentNode.childNodes[0].innerHTML;
            submit.value = "Edit"
            item = e.target.parentNode.parentNode.childNodes[0];
            
        })

        dlt.addEventListener("click", (e) => {
            if (confirm("Are you sure?")) {
                const remove = e.target.parentNode.parentNode;
                console.log(remove.childNodes[0])
                todos.removeChild(remove);
                document.getElementById("place").value = "";
                document.getElementById("text").innerHTML = `${remove.childNodes[0].innerHTML} is Successfully Deleted!!`;
                submit.value = "Submit"
                setTimeout(() => {
                    document.getElementById("text").innerHTML = "";
                },[3000])
            }
        })
    })
}

function toggleButton(ref, btnID) {
    document.getElementById(btnID).disabled = false;
}