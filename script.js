let url = "https://api.genderize.io?name=";
let wrapper = document.getElementById("wrapper");

let predictGender = () =>{
    let name = document.getElementById("name").value;
    let error = document.getElementById("error");
    let finalURL = url + name;

    wrapper.innerHTML = " ";
    if(name.length > 0 && /^[A-Za-z]+$/.test(name)){
        fetch(finalURL)
        .then((resp) => resp.json())
        .then((data) => {
            
            let div = document.createElement("div");
            div.setAttribute("id", "info");
            div.innerHTML = `<h2 id = "result-name">${data.name}</h2>
            <h1 id = "gender">${data.gender}</h1>
            <h4 id = "prob">Probability ${data.probability}</h4>`;

            wrapper.append(div);

            if(data.gender == "female"){
                div.classList.add("female");
            }
            else
            {
                div.classList.add("male");
            }
        });
    }
    else{
        error.innerHTML = "Enter a valid name with no spaces"
    }
};
 document.getElementById("submit").addEventListener("click", predictGender);
 window.addEventListener("load",predictGender);