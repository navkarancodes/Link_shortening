 document
        .getElementById('fetchUserDataBtn')
        .addEventListener('click', fetchUserData);

        function fetchUserData(e) {
}

      function fetchUserData(e) {
        e.preventDefault();
  document.getElementById("message").style.display = "block";


        const n = document.querySelector('#myInput').value;
        console.log(n);
        fetch('https://api-ssl.bitly.com/v4/shorten', {
          method: 'POST',
          headers: {
            Authorization: 'Bearer cba2544a14b7ce7b98558967b7aaf935998c289c',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ long_url: n, domain: 'bit.ly' })
        })
          .then(res => res.json())
          .then(d => {
            console.log(d);
             let {id,link} = d;
             console.log('this is the value of',id);
             
            //  let myString = id.join(".");
            //  let bitlike=myString;
            //  console.log('this is he calioi',bitlike);
            //  const obj = JSON.parse(myString);
// console.log(obj.fruit, obj.fingers);


            let output = '';
            // d.forEach(function(post) {
            //   output += `<li>${post.link}</li>`;
            // });
            output += Object(id); //returnes the array ['no','my'];

            // let val = object.values(d);
            // output += `<h1>${val.id}</h1>`;

            // function iterate(d){
            //       output += `<li>${d.link}</li>`;

            // }
            // Array.prototype.forEach.call(d, iterate);

            document.getElementById('message').innerHTML = output;
          });
      }