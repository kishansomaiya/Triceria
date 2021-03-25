const left = document.querySelector('.left')
const right = document.querySelector('.right')
const container = document.querySelector('.container')

left.addEventListener('mouseenter', () => container.classList.add('hover-left'))
left.addEventListener('mouseleave', () => container.classList.remove('hover-left'))

right.addEventListener('mouseenter', () => container.classList.add('hover-right'))
right.addEventListener('mouseleave', () => container.classList.remove('hover-right'))

//chennai - https://www.google.com/search?sxsrf=ALeKk03T5xYERAC9EBy-Yvq17haa6Y4DQw:1615973664261&q=chennai+super+kings&tbm=isch&source=iu&ictx=1&tbs=simg:CAESoQIJNnLrd4EAUYsalQILEKjU2AQaAghCDAsQsIynCBo5CjcIBBITrCxrwS_1KLbY60RKNKr0G6giyHhoaLx19nPxdPh42f1EsaUIrscVcbgQ1D3KjKsEgBTAEDAsQjq7-CBoKCggIARIENZ_15zgwLEJ3twQkaqwEKHgoLZm9yIGNyaWNrZXTapYj2AwsKCS9hLzhjMmMzbgocCglncmFzc2xhbmTapYj2AwsKCS9tLzAxYzdjcQoiCg5zb2NjZXIgdW5pZm9ybdqliPYDDAoKL20vMGhncDQ1ZAodCgpmb3Igc29jY2Vy2qWI9gMLCgkvYS9kdGJ0eHkKKAoVb25lIGRheSBpbnRlcm5hdGlvbmFs2qWI9gMLCgkvbS8wMjFuNjMM&fir=UAU-aHYyV3tOJM%252CorHJorHTfpOlUM%252C_&vet=1&usg=AI4_-kTkwCkmNpPgTx7xZ2KX1zUKlOpzeA&sa=X&ved=2ahUKEwiHs-WBg7fvAhWX73MBHfeVDbcQ9QF6BAgmEAE#imgrc=UAU-aHYyV3tOJM
//mumbai - https://www.google.com/search?sxsrf=ALeKk03YEhgDQv00PKlV6a0_9oxVswMzqQ:1615973720846&q=mumbai+indians+tag&tbm=isch&source=iu&ictx=1&tbs=simg:CAEShwIJzmXaeKbf0_1ka-wELELCMpwgaOAo2CAQSE8Evyi3iPbQ4iBDREsEm5RG7C2saGb0pguTqUPtvi3LaTQF4X_1xCtsYpESjyoOIgBTAEDAsQjq7-CBoKCggIARIEskwcWgwLEJ3twQkanQEKHAoJY3JpY2tldGVy2qWI9gMLCgkvbS8wMjNmdnMKIwoPY3JpY2tldCB1bmlmb3Jt2qWI9gMMCgovbS8waDhta185Ch4KC2ZvciBjcmlja2V02qWI9gMLCgkvYS84YzJjM24KGgoHZm9yIG1lbtqliPYDCwoJL2EvNTZ6ZmNyChwKCWZvciBhZHVsdNqliPYDCwoJL2EvOTNjd195DA&fir=XXdB7k1GZU01kM%252CuZRwTR14TGWZxM%252C_&vet=1&usg=AI4_-kTjmrJZN2S_WVKW5mF5ssl7LCFoPQ&sa=X&ved=2ahUKEwioh-Ocg7fvAhUr8XMBHedFC7wQ9QF6BAgjEAE#imgrc=XXdB7k1GZU01kM