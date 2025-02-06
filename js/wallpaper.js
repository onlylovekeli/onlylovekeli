function changeWallpaper(wallpaper) {
    let videoBGNode = document.getElementById('bg_video');
    let imgBGNode = document.getElementById('bg_img');
    videoBGNode.hidden = !wallpaper['isVideo'];
    imgBGNode.hidden = wallpaper['isVideo'];
    if (wallpaper['isVideo']) {
        videoBGNode.setAttribute('src', wallpaper['url']);
    }else{
        imgBGNode.src=wallpaper['url'];
    }
    window.localStorage.setItem('wallpaper',JSON.stringify(wallpaper));
}
window.addEventListener('message',(e)=>{
    if (e.origin === window.location.origin) {
        let event=e.data['event'];
        switch(event)
        {
            case 'wallpaper':
                let wallpaper=e.data['data'];
                this.changeWallpaper(wallpaper);
                ;break;
        }     
    }
});