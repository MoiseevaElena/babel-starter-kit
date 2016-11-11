import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());
app.get('/', (req, res) => {
  res.json({
    hello: 'JS World',
  });
});

app.get('/task2A', (req, res) => {
  const sum = (+req.query.a || 0) + (+req.query.b || 0);
  res.send(sum.toString());
});

app.get('/task2B', (req, res) => {
  let str = req.query.fullname;
  //str = str.replace(/\s/g,"");
  const arr =  str.trim().split(' ');

  arr.forEach(function(elem, item, array) {
    array[item] = elem[0] + elem.slice(1)
  });

  if(arr.length > 3 || str =="" || !(/^[^\d_\\\/]+$/.test(str))){
    res.end('Invalid fullname');
  };

  res.end([arr[arr.length-1]].concat(arr.slice(0, arr.length-1).map(el => el.slice(0,1) + ".")).join(" "));
});

app.listen(3000, () => {
  console.log('Your app listening on port 3000!');
});
