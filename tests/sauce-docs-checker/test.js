let axios = require('axios');

run()

async function run() {
  let url = 'https://wiki.jenkins-ci.org/display/JENKINS/JenkinsBehindProxy'
  let res
  try {
    res = await axios.get(url)
  }
  catch(err) {
    console.log('RESULT',res)
    console.log(err)
  }
}
