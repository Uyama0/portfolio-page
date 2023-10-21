const blob = document.getElementById("blob");

document.body.onpointermove = (event) => {
  const { clientX, clientY } = event;

  blob.style.left = `${clientX}`;
  blob.style.top = `${clientY}`;
};
