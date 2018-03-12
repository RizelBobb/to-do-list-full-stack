var thumbUp = document.getElementsByClassName("fa-thumbs-up");
var trash = document.getElementsByClassName("fa-trash");



Array.from(thumbUp).forEach(function(element) {
      element.addEventListener('click', function(){
        //it goes by odd numbers in the DOM
        //inner Text would mean getting the text that is inside the li
        //how to bind an event listener to an element
        const quote = this.parentNode.parentNode.childNodes[1].innerText
        const thumbUp = parseFloat(this.parentNode.parentNode.childNodes[5].innerText)
        fetch('change', {
          method: 'put',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({
            'quote': quote,
            'thumbUp':thumbUp

          })
        })
        .then(response => {
          if (response.ok) return response.json()
        })
        .then(data => {
          console.log(data)
          window.location.reload(true)
        })
      });
});


//appending a event listener to every single trash can
Array.from(trash).forEach(function(element) {
      element.addEventListener('click', function(){
        const quote = this.parentNode.parentNode.childNodes[1].innerText

        fetch('quotes', {
          method: 'delete',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            'quote': quote

          })
        }).then(function (response) {
          window.location.reload()
        })
      });
});
