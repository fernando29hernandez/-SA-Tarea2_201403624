# Tarea 5 - Software Avanzado - Primer Semestre 2020 

[![Netlify Status](https://api.netlify.com/api/v1/badges/b678cdf9-7485-4647-bf07-0a0d4faeaf82/deploy-status)](https://app.netlify.com/sites/youthful-leakey-5d4133/deploys)

Lenguajes Utilizados:
  - Javascript
  - Ajax
  - python(flask)
  - nodejs(express V.4.16)


# Los Servicios son los siguientes
- Solicitud de comida por parte del cliente(Javascript y Ajax).
- Recepción de órdenes en el restaurante(NodeJs).
- Servicio de entrega por el repartidor(Python con Flask).
- Orquestador de los Servicios

# Puertos en uso
- ESB(Puerto 3001)
- Restaurante(Puerto 3000)
- Repartidor(Puerto 5000)
- Cliente/Cosumidor no cuenta con uno ya que a este momento no lo necesita

# Constructor de Artefactos

- Gulp(NodeJS)

```sh 
gulp Nombretarea
```

- distutils(Python 3)

```sh 
python setup.py sdist
```

# Configuracion de netlify para el despligue de los artefactos
```sh 
Repository: github.com/fernando29hernandez/-SA-Tarea2_201403624
Base directory: /ESB
Build command: gulp defaultempaquetar
Publish directory: /ESB/dist
Deploy log visibility: Logs are public
```

# Para ver el deploy puede visitar 
- [Log de Deploy](https://app.netlify.com/sites/youthful-leakey-5d4133/deploys/5e5d7014f40135000845fe58)
- [Publicacion de los artefactos](https://youthful-leakey-5d4133.netlify.com/)


# Video Demo Tarea 3
   [![Ver en youtube](https://img.youtube.com/vi/fUz8jFMq-m4/0.jpg)](https://youtu.be/fUz8jFMq-m4)
