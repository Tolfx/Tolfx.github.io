const URLGIT = "https://api.github.com/users/Tolfx";
const email = "matteus@tolfx.dev";
const twitterURL = "https://twitter.com/tolfx";
const flexbox_DOM = document.querySelector(".flexbox");

const fetchUser = async () => {
  const data = await fetch(URLGIT);
  const jsonData = data.json();
  return jsonData;
};

function printInformation() {
  fetchUser().then((data) => {
    const text = `
    About Me:
    <br/>
    Name: Matteus
    <br/>
    Age: 17
    <br/>
    Country: Sweden
    <br/>
    <br/>
    Github Information: 
    <br/>
    <a href="${data.html_url}">Link to github</a>
    <br/> 
    Repos: ${data.public_repos} 
    <br/> 
    Name: ${data.login} 
    <br/> 
    Location: ${data.location} 
    <br/> 
    <br/> 
    <a id="contacts">Contacts</a>:<br/>
    Email: ${email}
    <br/>
    Twitter: <a href="${twitterURL}">@Tolfx</a>
    <br/>
    <br/>
    Surveys: <br/>
    Coming soon...
    `;
    flexbox_DOM.innerHTML = text;
  });
}

printInformation();
