function showVideo(event, videoId) {
    event.preventDefault();

    // create video container
    const videoContainer = document.createElement('div');
    videoContainer.style.position = 'fixed';
    videoContainer.style.top = '0';
    videoContainer.style.left = '0';
    videoContainer.style.width = '100%';
    videoContainer.style.height = '100%';
    videoContainer.style.backgroundColor =
        'rgba(0, 0, 0, 0.9)';
    videoContainer.style.zIndex = '9999';
    videoContainer.innerHTML = `
        <iframe width="100%" height="100%"
            src="https://www.youtube.com/embed/${videoId}?autoplay=1"
            frameborder="0" allow="autoplay; encrypted-media"
            allowfullscreen>

            </iframe>`;

    document.body.appendChild(videoContainer);
        window.location.href = event.target.href;
}

