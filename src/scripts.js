async function GetRepo()
{
    let response = await fetch('https://api.github.com/users/LinusHNet21/repos');
    let data = await response.json();

    console.log(data[0].name);
    console.log(data[0].description);
    console.log(data[0].html_url)

    document.querySelector(".repo1Name").innerHTML = data[0].name;

    let a = document.querySelector(".repo1Name");
    a.setAttribute("href", data[0].html_url);
    
    document.querySelector(".repo1Desc").innerHTML = data[0].description;
}
GetRepo();