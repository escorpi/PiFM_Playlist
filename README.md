#  FM_Playlist!

El proyecto de transmitir por FM  usando **(Created by Oliver Mattos and Oskar Weigl. Code is GPL**, no contiene un modo amigable de interactuar con el usuario.
por ese motivo se hace un cliente al lado del servidor con nodejs, el cual ejecutara las funciones hechas en python. 
Se recuperara la lista de una carpeta en raspbian con node y lo muestra por la web, la cual escogemos la cancion o  audio que queremos transmitir por la FM.

## Confugiración de la libreria pifm

Sigue los pasos de **[http://icrobotics.co.uk/wiki/index.php/Turning_the_Raspberry_Pi_Into_an_FM_Transmitter](http://icrobotics.co.uk/wiki/index.php/Turning_the_Raspberry_Pi_Into_an_FM_Transmitter)** 

## Construir la antena

Esto dependerá del modelo, nosotras teníamos la Raspberry pi3 modelo B+. En un lado de la placa veremos un cienpies con muchos pines. Tenemos que conectar la antena (que no es más que un cable de cobre) en el cuarto pin interior (GPIO4), pin número **7**.
![Raspberry-Pi-FM-Radio-Transmitter-hardware](https://user-images.githubusercontent.com/4119658/91098658-e2bb5280-e62f-11ea-9a2c-f01884bd990e.jpg)


##  Instalar el software

Lo más fácil es instalar GIT en la Raspberry para clonar el repositorio. Para ello tenemos que entrar a la Raspberry desde nuestra computadora. Desde en nuestra computadora repetimos el paso 0.8. Cuando ya estamos adentro, instalamos GIT:

`sudo apt-get install git`

Ahora clonamos el repositorio de fm_transmitter

`git clone https://github.com/markondej/fm_transmitter.git`

Se nos decargará. Entramos a la carpeta fm_transmitter

`cd fm_transmitter`

Una vez allí tenemos que compilar el software

`make`

¡Listo!