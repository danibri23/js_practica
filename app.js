document.addEventListener("DOMContentLoaded", () => {
  datosVenta();
});

const datosVenta = async () => {
  try {
    const res = await fetch("api.json");
    const data = await res.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};
