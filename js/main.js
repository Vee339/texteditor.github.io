var bold = document.querySelector('.bold');
var italic = document.querySelector('.italic');
var underline = document.querySelector('.underline');
var textarea = document.querySelector('textarea');
var fontsize = document.querySelector('#font-size input');


bold.addEventListener('click',function(){
	if(textarea.style.fontWeight != 'bold'){
		textarea.style.fontWeight = 'bold';
		bold.classList.add('dark');
	}else{
		textarea.style.fontWeight = 'normal';
		bold.classList.remove('dark');
	}
	
});

italic.addEventListener('click',function(){
	if(textarea.style.fontStyle != 'italic'){
		textarea.style.fontStyle = 'italic';
		italic.classList.add('dark');
	}else{
		textarea.style.fontStyle = 'normal';
		italic.classList.remove('dark');
	}
	
});

underline.addEventListener('click',function(){
	if(textarea.style.textDecoration != 'underline'){
		textarea.style.textDecoration = 'underline';
		underline.classList.add('dark');
	}else{
		textarea.style.textDecoration = 'none';
		underline.classList.remove('dark');
	}
	
});

fontsize.addEventListener('change',function(){
	 var fontsizeValue = fontsize.value;
     textarea.style.fontSize = fontsizeValue + "px";
     var newvalue = textarea.style.fontSize;
    
});


