const URLGIT = "https://api.github.com/users/Tolfx";
const GithubREPOS = "https://api.github.com/users/Tolfx/repos";
const email = "matteus@tolfx.dev";
const twitterURL = "https://twitter.com/tolfx";
const flexbox_repos = document.querySelector(".flexbox-repo");
const flexbox_DOM = document.querySelector(".flexbox");

const fetchUser = async () => {
  const data = await fetch(URLGIT);
  const jsonData = data.json();
  return jsonData;
};

const getREPOS = async () => {
  const data = await fetch(GithubREPOS);
  const jsonData = data.json();
  return jsonData;
};

function printInformation() {
  getREPOS().then((repos) => {
    repos.forEach(async (item) => {
      const URL = `https://api.github.com/repos/Tolfx/${item.name}/commits`;
      const commits = await fetch(URL);
      const commitJSON = await commits.json();
      const commitsLength = commitJSON.length;

      let text = `
      Repo: <a href="${item.html_url}" target="_blank">${item.name}</a>
      <br/>
      Language: ${item.language}
      <br/>
      Commits: ${commitsLength}
      <br/>
      Open Issues: ${item.open_issues}
      <br/>
      Forks: ${item.forks}
      <br/>
      Stars: ${item.stargazers_count}
      <br/>
      Default Branch: ${item.default_branch}
      `;
      let repos = document.createElement("div");

      repos.setAttribute("class", "flexbox1");

      repos.innerHTML = text;

      flexbox_repos.appendChild(repos);
    });
  });

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
    <hr/>
    <br/>
    Github Information: 
    <br/>
    <a href="${data.html_url}" target="_blank">Link to github</a>
    <br/> 
    Repos: ${data.public_repos} 
    <br/> 
    Name: ${data.login} 
    <br/> 
    Location: ${data.location} 
    <br/>
    <br/>
    <hr/>
    <br/>
    <a id="contacts">Contacts</a>:<br/>
    Email: ${email}
    <br/>
    Twitter: <a href="${twitterURL}" target="_blank">@Tolfx</a>
    <br/>
    <br/>
    <hr/>
    <br/>
    Surveys: <br/>
    Coming soon...
    `;
    flexbox_DOM.innerHTML = text;
  });
}

printInformation();
