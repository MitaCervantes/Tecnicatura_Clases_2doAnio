const pintarCarrito = () => {
  modalContainer.innerHTML = "";
  modalContainer.style.display = "flex";
  const modalHeader = document.createElement("div");
  modalHeader.className = "modal-header";
  modalHeader.innerHTML = `
      <h1 class="modal-header-title">Tu carrito</h1>
    `;
  modalContainer.append(modalHeader);

  const modalbutton = document.createElement("h1");
  modalbutton.innerText = "x";
  modalbutton.className = "modal-header-button";

  modalbutton.addEventListener("click", () => {
    modalContainer.style.display = "none";
  });

  modalHeader.append(modalbutton);

if(carrito.length > 0){
  carrito.forEach((product) => {
    let carritoContent = document.createElement("div");
    carritoContent.className = "modal-content";
    carritoContent.innerHTML = `
        <img src="${product.img}">
        <h3>${product.nombre}</h3>
        <p>${product.precio} $</p>
        <span class="restar"> - </span>       
        <p>${product.cantidad}</p>
        <span class="sumar"> + </span>
        <p>Total: ${product.cantidad * product.precio} $</p>
        <span class="delete-product"> ❌ </span>
      `;

    modalContainer.append(carritoContent);

    let restar = carritoContent.querySelector(".restar");

    restar.addEventListener("click", () => {
      if (product.cantidad !== 1) {
        product.cantidad--;
      }
      saveLocal();
      pintarCarrito();
    });

    let sumar = carritoContent.querySelector(".sumar");
    sumar.addEventListener("click", () => {
      product.cantidad++;
      saveLocal();
      pintarCarrito();
    });

    let eliminar = carritoContent.querySelector(".delete-product");

    eliminar.addEventListener("click", () => {
      eliminarProducto(product.id);
    });

    // let eliminar = document.createElement("span");
    // eliminar.innerText = "❌";
    // eliminar.classList = "delete-product";
    // carritoContent.append(eliminar);

    // eliminar.addEventListener("click", eliminarProducto);
  })

  const total = carrito.reduce((acc, el) => acc + el.precio * el.cantidad, 0);

  const totalBuying = document.createElement("div");
  totalBuying.className = "total-content";
  totalBuying.innerHTML = `Total a pagar: $ ${total}`;
  modalContainer.append(totalBuying);

   //Modal Footer 

   const modalFooter= document.createElement('div');
   modalFooter.className = 'modal-footer';
   modalFooter.innerHTML = `  
   <button class= "btn-primary" id="checkout-btn">Ir a checkout</button>
   <div id="button-checkout"></div>
   `;
   modalContainer.append(modalFooter);  
   //mp
   const mercadopago = new MercadoPago ("public_key",{locale: "es-AR",}) 
   const checkoutButton = document.querySelector('#checkout-btn');

   checkoutButton.addEventListener("click",function(){
      checkoutButton.remove();

      const orderData = {
        quantity : 1,
        description : "compra de ecommerce",
        price: total,
      };

      fetch("http://localhost:8080/create_preference",{
        method : "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(orderData),
      })
      .then(function(response){
        return response.json;
      })
      .then(function(preference){
          createCheckoutButton(preference.id);
      })
      .catch(function(){
        alert("Unexpected error!")
      });
   });

   function createChecoutButton(preferenceId) {
     const bricksBuilder = mercadopago.bricks();
     
     const renderComponente = async(bricksBuilder) => {
       await bricksBuilder.create(
         "wallet",
         "button-checkout",
         {
           initialization: {
             preferenceId : preferenceId,
           },
           callbacks: {
             onError : (error) => console.error(error),
             onReady: () => {},
           },
         }
       )
     }
     window.checkoutButton = renderComponente(bricksBuilder);
   }

}else{
  const modalText = document.createElement("h2");
  modalText.className = "modal-body";
  modalText.innerText = "Tu carrito esta vacío!";
  modalContainer.append(modalText);
}



};

verCarrito.addEventListener("click", pintarCarrito);

const eliminarProducto = (id) => {
  const foundId = carrito.find((element) => element.id === id);

  console.log(foundId);

  carrito = carrito.filter((carritoId) => {
    return carritoId !== foundId;
  });

  carritoCounter();
  saveLocal();
  pintarCarrito();
};

const carritoCounter = () => {
  cantidadCarrito.style.display = "block";

  const carritoLength = carrito.length;

  localStorage.setItem("carritoLength", JSON.stringify(carritoLength));

  cantidadCarrito.innerText = JSON.parse(localStorage.getItem("carritoLength"));
};

carritoCounter();
