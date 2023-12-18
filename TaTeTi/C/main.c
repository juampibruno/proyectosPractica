#include <stdio.h>
#include <stdlib.h>
#include <time.h>
#include <string.h>

// Función para obtener un número aleatorio dentro de un rango [min, max]
int obtenerNumeroAleatorio(int min, int max) {
    // Inicializar la semilla del generador de números aleatorios con el tiempo actual
    srand((unsigned int)time(NULL));

    // Generar un número aleatorio en el rango [min, max]
    int numeroAleatorio = rand() % (max - min + 1) + min;

    return numeroAleatorio;
}

void mostrarTablero(char tablero[3][3]) {
    printf("  0 1 2\n");
    for (int fila = 0; fila < 3; ++fila) {
        printf("%d ", fila);
        for (int columna = 0; columna < 3; ++columna) {
            printf("%c", tablero[fila][columna]);
            if (columna < 2) {
                printf("|");
            }
        }
        printf("\n");
        if (fila < 2) {
            printf("  -----\n");
        }
    }
}

void solicitarJugada(char tablero[3][3],int* filaJugada,int* columnaJugada, char simboloJugador) {
    mostrarTablero(tablero);

    printf("\n[Jugador %c]: Ingrese su jugada (fila columna ej 0 2): ",simboloJugador);
    scanf("%d %d",filaJugada,columnaJugada);
}



void realizarJugada(char tablero[3][3],int fila, int columna, char simboloJugador){
    if (tablero[fila][columna] == ' ') {
        tablero[fila][columna] = simboloJugador;
    } else {
        printf("\n[ERROR]La casilla ya está ocupada. Elige otra posición.\n");
        solicitarJugada(tablero,&fila,&columna,simboloJugador);
        realizarJugada(tablero,fila,columna,simboloJugador);
    }
}

int chequearGanador(char tablero[3][3],char simboloJugador){
    //Chequeamos Horizontales y verticales

    for(int i = 0; i < 3; i++){
        if(tablero[i][0] == simboloJugador && tablero[i][1] == simboloJugador && tablero[i][2] == simboloJugador ||
           tablero[0][i] == simboloJugador && tablero[1][i] == simboloJugador && tablero[2][i] == simboloJugador){
            return 1;
        }
    }

    //Chequeamos Diagonales
    if(tablero[0][0] == simboloJugador && tablero[1][1] == simboloJugador && tablero[2][2] == simboloJugador ||
       tablero[0][2] == simboloJugador && tablero[1][1] == simboloJugador && tablero[2][0] == simboloJugador ){
        return 1;
    }
    return 0;

}

void taTeTi() {

    char tablero[3][3] = {
            {' ', ' ', ' '},
            {' ', ' ', ' '},
            {' ', ' ', ' '}
    };

    const int tamMaximoNombre = 50;

    char nombresJugadores[2][tamMaximoNombre];
    //Una posible modificacion es que acepte nombres de cualquier longitud.

    int turno = 0; // 0 para O y 1 para X
    char jugadorActual;
    int hayGanador = 0;
    int jugadasHechas = 0;

    int filaJugada = 0;
    int columnaJugada = 0;

    printf("Bienvenido al TaTeTi!\n");
    printf("Ingresa nombre Jugador 1 (Sos O): ");
    scanf("%s", nombresJugadores[0]);

    printf("\nIngresa nombre Jugador 2 (Sos X): ");
    scanf("%s", nombresJugadores[1]);

    printf("\nRealizamos el sorteo para ver quien comienza la partida\n");

    // Obtener un número aleatorio en el rango [minimo, maximo]
    turno = obtenerNumeroAleatorio(0, 1);
    jugadorActual = (turno == 0) ? 'O' : 'X';

    while(1) {
                solicitarJugada(tablero,&filaJugada,&columnaJugada,jugadorActual);
                realizarJugada(tablero,filaJugada,columnaJugada,jugadorActual);
                jugadasHechas++;
                hayGanador = chequearGanador(tablero,jugadorActual);
                if(hayGanador == 1){
                    mostrarTablero(tablero);
                    printf("\n¡¡Felicidades [%s] GANASTE LA PARTIDA!!", nombresJugadores[turno]);
                    break;
                }
                if(jugadasHechas == 9 ){
                    printf("\n¡¡EMPATE!!\n");
                    break;
                }
                // Cambiar al siguiente jugador
                turno = 1 - turno;
                jugadorActual = (turno == 0) ? 'O' : 'X';

        }
    }


int main() {
    taTeTi();
    return 0;
}
