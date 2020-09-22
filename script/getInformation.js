const URLGIT = "https://api.github.com/users/Tolfx";
const flexbox_DOM = document.querySelector(".flexbox");

const fetchUser = async () => {
  const data = await fetch(URLGIT);
  const jsonData = data.json();
  return jsonData;
};

function printInformation() {
  fetchUser().then((data) => {
    flexbox_DOM.innerHTML =
      `URL: ${data.html_url} <br/> Repos: ${data.public_repos} <br/> Name: ${data.login} <br/> Location: ${data.location} <br/> <br/> This was automated by fetching from github`;
  });
}

printInformation();
