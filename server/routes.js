const router = require('express').Router();
const fetch = require('node-fetch');
const User = require('./schemas');

const fetchGeo = () => fetch('https://sigma-studios.s3-us-west-2.amazonaws.com/test/colombia.json')
.then(res => res.json())
.then(parsedResponse => parsedResponse)
.catch(error => console.log(error.message));

const filterByDepartment = (departmentName, departmentsList) => {
  return departmentsList[departmentName]
}

router.get('/departments', (req, res) => {
  fetchGeo().then(parsedResponse => res.json(Object.keys(parsedResponse)).status(200));
});


router.get('/cities/:departmentName', (req, res) => {
  const { departmentName } = req.params;
  fetchGeo().then(parsedResponse => {
    const cities = filterByDepartment(departmentName, parsedResponse);
    res.json(cities).status(200);
  })
})



router.post('/user', (req, res) => {
  const { department, city, name, email } = req.body;
  const user = new User({department, city, name, email});
  user.save();
  res.send().status(200);
})

module.exports = router;