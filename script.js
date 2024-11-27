//your JS code here. If required.

const form = document.getElementById("form");

form.addEventListener("submit",()=> {
	if(!form.name.value || !form.age.value ) return;
	return new Promise((res,rej)=> {
		setTimeout(()=> {
			if(form.age.value < 18) rej(`Oh sorry ${form.name.value}. You aren't old enough.`);
		    res(`Welcome, ${form.name.value}. You can vote`);
		},4000)
	})
	
})
