var imgs = document.querySelectorAll(".img-thumbnail");
	

	for(i = 0; i < imgs.length; i++){
	imgs[i].addEventListener("mouseover", function(){
		for(i = 0; i < imgs.length; i++){
			imgs[i].classList.add("greyscale");
			this.classList.remove("greyscale");
		}
		
})
}


	for(i = 0; i < imgs.length; i++){
		imgs[i].addEventListener("mouseleave", function(){
			for(i = 0; i < imgs.length; i++){
				imgs[i].classList.remove("greyscale");
		}
	}) 
}

