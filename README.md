#  FM_Playlist!
Usa la raspberry como un medio de transmicion FM de tu musica para esos carros que no tienen entrada Aux o Bluetooth
![radio](https://user-images.githubusercontent.com/4119658/100904174-229a9d00-349d-11eb-84ff-9088b8f5c17d.jpg)

accede desde el celular a servidor 
![Screenshot2](https://user-images.githubusercontent.com/4119658/100902808-a2276c80-349b-11eb-8b26-f1ea8dca6260.png)

escoge el tema tan simple como  esto
![Screenshot1](https://user-images.githubusercontent.com/4119658/100902844-a94e7a80-349b-11eb-93f4-40af3b436b3d.png)

El proyecto de transmitir por FM  usando **(Created by Oliver Mattos and Oskar Weigl. Code is GPL**, no contiene un modo amigable de interactuar con el usuario.
por ese motivo se hace un cliente al lado del servidor con nodejs, el cual ejecutara las funciones hechas en python. 
Se recuperara la lista de una carpeta en raspbian con node y lo muestra por la web, la cual escogemos la cancion o  audio que queremos transmitir por la FM.

## Confugiración de la libreria pifm

Sigue los pasos de **[https://github.com/ChristopheJacquet/PiFmRds](https://github.com/ChristopheJacquet/PiFmRds)** 

## Construir la antena

Esto dependerá del modelo, nosotras teníamos la Raspberry pi3 modelo B+.  Tenemos que conectar la antena (que no es más que un cable de cobre) en el cuarto pin interior (GPIO4), pin número **7**.
![Raspberry-Pi-FM-Radio-Transmitter-hardware](https://user-images.githubusercontent.com/4119658/91098658-e2bb5280-e62f-11ea-9a2c-f01884bd990e.jpg)


##  Instalar el software

Lo más fácil es instalar GIT en la Raspberry para clonar el repositorio. Para ello tenemos que entrar a la Raspberry desde nuestra computadora. Desde en nuestra computadora repetimos el paso 0.8. Cuando ya estamos adentro, instalamos GIT:

`sudo apt-get install git`

Ahora clonamos el repositorio de fm_transmitter

`git clone https://github.com/escorpi/PiFM_Playlist.git`

...
..
.
¡Listo!
