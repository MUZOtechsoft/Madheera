const scriptURL  ='https://script.google.com/macros/s/AKfycbw0Gc8WfyrU7MRCBzaVm45bmPLUPz5toQAniyC924p5el8fwnZ_UJsGqSrHeKd3wti6/exec'


const form = document.forms['Endroll-form']
 form.addEventListener('submit', e => {

e.preventDefault()

fetch(scriptURL, { method: 'POST', body: new FormData(form)})

.then(response => alert("Thank you! your form is submitted successfully." ))

.then(() => { window.location.reload(); })


.catch(error => console.error('Error!', error.message))

 })