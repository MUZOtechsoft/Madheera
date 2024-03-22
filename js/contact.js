const scriptURL  ='https://script.google.com/macros/s/AKfycbx5FBRSyn3spRzqaN_w1Avos-tah7VNYmHbBuLATvJukB9t6dmCg5HqOwY0Aj8Ab46yYg/exec'


const form = document.forms['contact-form']
 form.addEventListener('submit', e => {

e.preventDefault()

fetch(scriptURL, { method: 'POST', body: new FormData(form)})

.then(response => alert("Thank you! your form is submitted successfully." ))

.then(() => { window.location.reload(); })


.catch(error => console.error('Error!', error.message))

 })
