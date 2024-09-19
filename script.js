// Change thumbnail based on selected gift card type
document.getElementById('gift-card-type').addEventListener('change', function() {
    const giftCardType = this.value;
    const thumbnailImage = document.getElementById('thumbnail-image');
    
    if (giftCardType === 'itunes') {
        thumbnailImage.src = 'itunes.png';
    } else if (giftCardType === 'google-play') {
        thumbnailImage.src = 'googleplay.png';
    } else if (giftCardType === 'online-shopping') {
        thumbnailImage.src = 'onlineshopping.png';
    } else if (giftCardType === 'amazon') {
        thumbnailImage.src = 'amazon.png';
    }
});

// Generate redeem code on "Get Free" button click
document.getElementById('get-free-btn').addEventListener('click', function() {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let code = '';
    for (let i = 0; i < 16; i++) {
        code += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    document.getElementById('redeem-code').value = code;
});

