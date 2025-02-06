var wallpapers_videos = [
    "https://img-baofun.zhhainiao.com/fs/scene/preview_video/a12b3e6a4b287b6a7f476b675b6265b1_preview.mp4",
    "https://img-baofun.zhhainiao.com/pcwallpaper_ugc/preview/80477e49df9bf049a79f0dcd07caa3f1_preview.mp4",
    "https://img-baofun.zhhainiao.com/fs/scene/preview_video/e08d7f125d2649c0d79db89c113b7bda_preview.mp4",
    "https://img-baofun.zhhainiao.com/fs/scene/preview_video/990f574e543e2c8adddc10e353f7302c_preview.mp4",
    "https://img-baofun.zhhainiao.com/fs/scene/preview_video/3dc9595f7d373c55cd62975a56326571_preview.mp4",
    "https://img-baofun.zhhainiao.com/pcwallpaper_ugc/preview/03017b3429a4067c83bcedadb3f3e33a_preview.mp4",
    "https://img-baofun.zhhainiao.com/pcwallpaper_ugc/scene/08b238fcf4b1365b453d44bb7d5063f1_preview.mp4",
    "https://img-baofun.zhhainiao.com/pcwallpaper_ugc/preview/d8b5378e14c6d65d5a5741dfe0778e9d_preview.mp4",
    "https://img-baofun.zhhainiao.com/pcwallpaper_ugc/scene/0e750a43cbad99045f3e749cc727e871_preview.mp4"
];
function changeWallpaper(url, isVideo) {
    let videoBGNode = document.getElementById('bg_video');
    let imgBGNode = document.getElementById('bg_img');
    videoBGNode.hidden = !isVideo;
    imgBGNode.hidden = isVideo;
    if (isVideo) {
        videoBGNode.setAttribute('src', url);
    }else{
        imgBGNode.src=url;
    }
}