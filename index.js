const form = document.getElementById('user-form');
const submitButton = document.getElementById('submit-btn');


let timeout=null;

const numeros = /[0-9]/;
const mailformatREgex = /^[^@]+@\w+(\.\w+)+\w$/; 

let valnombre=0;
let valemail=0;
let valclave=0;
let valconfclave=0;
      

document.querySelectorAll('.form-box').forEach((box)=>{
	const boxInput = box.querySelector('input');
	
	boxInput.addEventListener('keydown',(event)=> {
		clearTimeout(timeout);
		timeout = setTimeout(()=>{
	
			validation(box, boxInput)
		},300);
	});
});



function validation (box, boxInput){
	
	if(boxInput.name == 'username'){
		if(boxInput.value.match(numeros)||boxInput.value==''){
		    showError(true, box);
			valnombre=1;
		}else{
			showError(false, box); 
			valnombre=0;
		 }
	}
	
	
	if(boxInput.name == 'email'){
		if(boxInput.value==''){	
           box.classList.remove('form-error-email');		
		   showError(true, box);
		   valemail=1;
		}else{
			if(!boxInput.value.match(mailformatREgex)){
			  box.classList.remove('form-success');
			  box.classList.remove('form-error');
			  box.classList.add('form-error-email');
			  valemail=1;
		}else{
			box.classList.remove('form-error-email');	
			showError(false, box); 
			valemail=0;
		 }
		}	
	}
	
	
	if(boxInput.name == 'clave'){
		if(boxInput.value==''){	
           box.classList.remove('form-error-clave');		
		   showError(true, box);
		   valclave=1;
		}else {
			 
			if(boxInput.value.length<=7){
			  box.classList.remove('form-success');
			  box.classList.remove('form-error');
			  box.classList.add('form-error-clave');
			  valclave=1;
		    }else{
			 box.classList.remove('form-error-clave');	
			  showError(false, box);
			  valclave=0;
			}
		 }
	}
		

	if(boxInput.name == 'confclave'){
	    const clave1 = document.getElementById('clave');
		if(boxInput.value ==''){
			 box.classList.remove('form-error-confclave');
			 showError(true, box);
			 valconfclave=1;
		     }else{
				 if (boxInput.value !== clave1.value){
					  box.classList.remove('form-success');
			          box.classList.remove('form-error');
					  box.classList.add('form-error-confclave');
					  valconfclave=1;
				 }else{
					 box.classList.remove('form-error-confclave');	
					 showError(false, box);	 
					 valconfclave=0;
			   }
		}}
	
};


 function singinClick() {
	  var nombre = document.getElementById("username").value;
            var email = document.getElementById("email").value;
            var pass = document.getElementById("clave").value;
            var pass1 = document.getElementById("confclave").value;
            if (nombre == "" ||  email == "" || pass == "" || pass1 == "" ||valemail=="1" || valnombre=="1"||valclave=="1"||valconfclave=="1") {
                alert("Debes completar todos los campos");
				
            }else{
		        alert("Inscripción creada correctamente")
	 }
 }

function showError (check,box){
	    if(check){
			box.classList.remove('form-success');
			box.classList.add('form-error');
			
		}else{
			box.classList.remove('form-error');
			box.classList.add('form-success');
			
		}
};

form.addEventListener('submit',(event)=> {
	event.preventDefault();
	const formData = new FormData (event.target);
	console.log([...formData]);
	
	for (let [key, value] of formData.entries()){
		console.log(`${key}:${value}`);
	}
});