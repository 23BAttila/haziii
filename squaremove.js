const square = document.querySelector('.square');
document.addEventListener('mousemove', function(x) {
  const mouseX = x.clientX;
  const mouseY = x.clientY;
  const squareRect = square.getBoundingClientRect();
  const squareLeft = squareRect.left;
  const squareTop = squareRect.top;
  const squareRight = squareRect.right;
  const squareBottom = squareRect.bottom;
  const threshold = 200;
  const isCloseHorizontally = mouseX > squareLeft - threshold/40 && mouseX < squareRight + threshold/40;
  const isCloseVertically = mouseY > squareTop - threshold/40 && mouseY < squareBottom + threshold/40;  
  if (isCloseHorizontally && isCloseVertically) {
    const moveAmount = 5;
    const moveDirectionX = mouseX > squareLeft + squareRect.width /2 ? -1 : 1;
    const moveDirectionY = mouseY > squareTop + squareRect.height /2 ? -1 : 1;
    square.style.left = `${squareLeft + moveDirectionX * moveAmount}px`;
    square.style.top = `${squareTop + moveDirectionY * moveAmount}px`;}});
