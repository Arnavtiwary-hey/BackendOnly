require('dotenv').config()
const express = require('express')
const app = express()
const port = 5000
const githubData = {
  "login": "Arnavtiwary-hey",
  "id": 109584609,
  "node_id": "U_kgDOBogg4Q",
  "avatar_url": "https://avatars.githubusercontent.com/u/109584609?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/Arnavtiwary-hey",
  "html_url": "https://github.com/Arnavtiwary-hey",
  "followers_url": "https://api.github.com/users/Arnavtiwary-hey/followers",
  "following_url": "https://api.github.com/users/Arnavtiwary-hey/following{/other_user}",
  "gists_url": "https://api.github.com/users/Arnavtiwary-hey/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/Arnavtiwary-hey/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/Arnavtiwary-hey/subscriptions",
  "organizations_url": "https://api.github.com/users/Arnavtiwary-hey/orgs",
  "repos_url": "https://api.github.com/users/Arnavtiwary-hey/repos",
  "events_url": "https://api.github.com/users/Arnavtiwary-hey/events{/privacy}",
  "received_events_url": "https://api.github.com/users/Arnavtiwary-hey/received_events",
  "type": "User",
  "user_view_type": "public",
  "site_admin": false,
  "name": "Arnav tiwary",
  "company": null,
  "blog": "",
  "location": null,
  "email": null,
  "hireable": null,
  "bio": null,
  "twitter_username": null,
  "public_repos": 9,
  "public_gists": 0,
  "followers": 0,
  "following": 0,
  "created_at": "2022-07-19T08:25:51Z",
  "updated_at": "2026-04-15T16:14:25Z"
}

app.get('/github',(req,res) =>{
res.json(githubData)
})
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter',(req,res)=> {
    res.send('arnav.com')
})
app.get('/login',(req,res) =>{
     res.send('<h1>please login at arnav tiwary</h1>')
})
app.get('/youtube', (req,res) =>{
  res.send('<h2>parasar yrs</h2>')
})
app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})



