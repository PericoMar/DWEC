# Formulario Multipasos con Validación de Campos y Funcionalidades Adicionales

Este ejercicio consiste en desarrollar un formulario multipasos con validación de campos en el que se recolectan los siguientes datos: Nombre, Apellidos, Email, Contraseña (confirmación de contraseña), Teléfono y Dirección. Además, se incluyen funcionalidades adicionales como botones para mostrar/ocultar las contraseñas con una barra de seguridad para calcular la complejidad de la contraseña, integración con la API Places de Google Maps para autocompletar la dirección y cambio de divisas.

## Desarrollo de la Aplicación

El formulario se divide en varios pasos, cada uno con un conjunto específico de campos y validaciones. A medida que el usuario completa cada paso, se habilita el siguiente hasta que se completan todos los pasos y se muestra un mensaje de confirmación.

### Pasos del Formulario

## Pasos del Formulario

1. **Paso 1: Datos Personales**
    - Nombre
    - Apellidos

2. **Paso 2: Información de Contacto**
    - Email
    - Contraseña (con confirmación)
    - Teléfono

3. **Paso 3: Género y Fecha de Nacimiento**
    - Género
    - Fecha de Nacimiento

4. **Paso 4: Dirección**
    - País
    - Calle (con integración de la API Places de Google Maps)

5. **Paso 5: Cambio de Divisas**
    - Cantidad a convertir
    - Divisa base
    - Divisa de destino

### Funcionalidades Adicionales

- **Validación de Campos:** Se implementa una validación en tiempo real de los campos del formulario para garantizar que se introduzcan datos válidos.
- **Mostrar/Ocultar Contraseña:** Se incluyen botones para mostrar u ocultar la contraseña, junto con una barra de seguridad que muestra la complejidad de la contraseña.
- **Integración con API Places de Google Maps:** Para la dirección, se utiliza la API Places de Google Maps para autocompletar la dirección y mostrar sugerencias mientras el usuario escribe.
- **Cambio de Divisas:** Se incluye la funcionalidad de cambio de divisas, permitiendo al usuario seleccionar su país y calcular el cambio de moneda.

## Tecnologías Utilizadas

- HTML, CSS y JavaScript para la estructura, estilo y funcionalidad del formulario.
- API Places de Google Maps para autocompletar la dirección y proporcionar sugerencias de ubicación.
- Otras API para calcular el cambio de divisas.
- Bootstrap para el diseño y la responsividad del formulario.

Al completar todos los pasos del formulario, se muestra un modal de agradecimiento con un mensaje personalizado y la información del cambio de divisas. Esta aplicación proporciona una experiencia interactiva y completa para la recopilación de datos del usuario.
