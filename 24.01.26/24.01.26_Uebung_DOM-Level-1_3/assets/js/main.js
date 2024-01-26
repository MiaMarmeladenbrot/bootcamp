// - Nun erstellst du mit der Methode .innerHTML drei <figure> tags für unsere Galerie. Nutze den vorgegebenen HTML-Code.

const gallery = document.querySelector("#gallery");

gallery.innerHTML =
  '<figure><img src="https://images.unsplash.com/photo-1671920090611-9a40303b52cb?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Orange in water" style="width: 100%"/> <figcaption>Fig.1 - Orange in water</figcaption></figure>' +
  '<figure><img src="https://images.unsplash.com/photo-1682686581218-82326951f4ad?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="woman diving" style="width: 100%"/> <figcaption>Fig.2 - diving woman</figcaption></figure>' +
  '<figure><img src="https://plus.unsplash.com/premium_photo-1673615875080-c4c0bd026a5a?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="leaf" style="width: 100%"/> <figcaption>Fig.3 - leaf</figcaption></figure>';
