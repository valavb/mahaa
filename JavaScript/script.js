// Left nav bar slide in function
const leftNavBar = document.querySelector('.navbar-brand');
const closeNavbar = document.querySelector('.close-nav');
const navBar = document.querySelector('.location');

leftNavBar.addEventListener('click',()=>{
	navBar.style.marginLeft = "-10px";
	navBar.style.transition = "all 0.6s";
});

closeNavbar.addEventListener('click',()=>{
	navBar.style.marginLeft = "-415px";
	navBar.style.transition = "all 0.6s";
});
              
// Change video and its details
const placeOne = document.querySelector('.place-1');
const placeTwo = document.querySelector('.place-2');
const placeThree= document.querySelector('.place-3');
const placeFour = document.querySelector('.place-4');
let timelapseVideo = document.querySelector('.timelapse-video');
const locationName = document.querySelector('#location-name');
const videoOne = document.querySelector('#video1');
const videoTwo = document.querySelector('#video2'); 
const videoThree = document.querySelector('#video3');
const arr1 = ["https://www.youtube.com/embed/opXq1qZIg0Q","https://www.youtube.com/embed/zrM1mcKmX_c","https://www.youtube.com/embed/40z9n1SgozU"];
const arr2 = ["https://www.youtube.com/embed/429WCrxZqe0","https://www.youtube.com/embed/a7vn3A6jl60","https://www.youtube.com/embed/M0bq3RvD_NQ"];
const arr3 = ["https://www.youtube.com/embed/9bqk6ZUsKyA","https://www.youtube.com/embed/TQHEJj68Jew","https://www.youtube.com/embed/fMfipiV_17o"];
const arr4 = ["https://www.youtube-nocookie.com/embed/hstPqTpa7I0","https://www.youtube.com/embed/Fzgf0ddV7HE","https://www.youtube.com/embed/ok5BGFOU2WY"];

changeVideo(placeOne,"https://www.youtube.com/embed/opXq1qZIg0Q","B I L L \u00a0\u00a0 G A T E",arr1);
changeVideo(placeTwo,"https://www.youtube.com/embed/429WCrxZqe0","P e w D i e P i e",arr2);
changeVideo(placeThree,"https://www.youtube.com/embed/9bqk6ZUsKyA","M r B e a s t",arr3);
changeVideo(placeFour,"https://www.youtube-nocookie.com/embed/hstPqTpa7I0","M a r s h m e l l o",arr4);  
changeVideoOnButton(videoOne,arr1[0]);
changeVideoOnButton(videoTwo,arr1[1]);
changeVideoOnButton(videoThree,arr1[2]);
// All function here 
function changeVideo(placeId,link,placeName,arr){
	placeId.addEventListener('click',()=>{

		(
			timelapseVideo.src != link ? 
			changeDetail(link,placeName) : 
			slideInNav() 
		)

		changeVideoOnButton(videoOne,arr[0]);
		changeVideoOnButton(videoTwo,arr[1]);
		changeVideoOnButton(videoThree,arr[2]);

	});
}

function changeDetail(src , name){
	timelapseVideo.src = src;
	locationName.innerText = name;
	navBar.style.marginLeft = "-415px";
	navBar.style.transition = "all 0.6s";
}

function slideInNav(){
	navBar.style.marginLeft = "-415px";
	navBar.style.transition = "all 0.6s";
}

function changeVideoOnButton(buttonId,link){

	buttonId.addEventListener('click',()=>{
		if (timelapseVideo.src != link) {
			timelapseVideo.src = link ;
		}
	})

}
