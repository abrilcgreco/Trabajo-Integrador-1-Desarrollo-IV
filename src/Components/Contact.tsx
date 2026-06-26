import React, { useRef } from "react"; //Hook para referenciar elementos del DOM

interface ContactProps {}

const Contact: React.FC<ContactProps> = (): React.ReactElement => {
  const inputRef = useRef<HTMLFormElement | null>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault(); //Evita que el formulario se recargue al enviar
    console.log(inputRef.current); //Muestra en consola el elemento del DOM referenciado por inputRef
    if (!inputRef.current) return;

    const data = new FormData(inputRef.current); //Crea un objeto iterator con los datos del formulario
    console.log(data);
    const usuario = Object.fromEntries(data); //Convierte el objeto iterator en un objeto simple {"nombre": "valor", "apellido": "valor", "email": "valor"}
    console.log(usuario);
  };

  return (
    <div className="">
      <h1 className="">Contacto</h1>
      <form action="" ref={inputRef} onSubmit={handleSubmit} className="">
        <label htmlFor="nombre">Nombre:</label>
        <input type="text" name="nombre" />
        <label htmlFor="apellido">Apellido:</label>
        <input type="text" name="apellido" />
        <label htmlFor="email">Email:</label>
        <input type="email" name="email" />
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default Contact;