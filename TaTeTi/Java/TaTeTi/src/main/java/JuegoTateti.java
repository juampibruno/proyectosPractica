import java.util.Scanner;

public class JuegoTateti {

  private char[][] tablero = new char[3][3];
  private char jugadorActual = 'O';
  private String[] nombresJugadores;

  public JuegoTateti(String nombreJugador1, String nombreJugador2 ) {
    // Inicializar el tablero con espacios en blanco
    nombresJugadores = new String[]{nombreJugador1, nombreJugador2};

    for (int i = 0; i < 3; i++) {
      for (int j = 0; j < 3; j++) {
        tablero[i][j] = ' ';
      }
    }
  }

  public void imprimirTablero() {
    System.out.println("-------------");
    for (int i = 0; i < 3; i++) {
      System.out.print("| ");
      for (int j = 0; j < 3; j++) {
        System.out.print(tablero[i][j] + " | ");
      }
      System.out.println("\n-------------");
    }
  }

  public boolean hacerMovimiento(int fila, int columna) {
    if (fila >= 0 && fila < 3 && columna >= 0 && columna < 3 && tablero[fila][columna] == ' ') {
      tablero[fila][columna] = jugadorActual;
      return true;
    } else {
      System.out.println("Movimiento inválido. Inténtalo de nuevo.");
      return false;
    }
  }

  public boolean verificarGanador() {
    // Verificar filas y columnas
    for (int i = 0; i < 3; i++) {
      if (tablero[i][0] == jugadorActual && tablero[i][1] == jugadorActual && tablero[i][2] == jugadorActual ||
          tablero[0][i] == jugadorActual && tablero[1][i] == jugadorActual && tablero[2][i] == jugadorActual) {
        return true;
      }
    }

    // Verificar diagonales
    if (tablero[0][0] == jugadorActual && tablero[1][1] == jugadorActual && tablero[2][2] == jugadorActual ||
        tablero[0][2] == jugadorActual && tablero[1][1] == jugadorActual && tablero[2][0] == jugadorActual) {
      return true;
    }

    return false;
  }

  public boolean tableroLleno() {
    for (int i = 0; i < 3; i++) {
      for (int j = 0; j < 3; j++) {
        if (tablero[i][j] == ' ') {
          return false;
        }
      }
    }
    return true;
  }

  public static void main(String[] args) {
    Scanner scanner = new Scanner(System.in);
    String nombreJugador1,nombreJugador2;
    int turno = 0;

    System.out.println("¡¡Bienvenido al TeTiTi!!");
    System.out.println("Ingresa nombre Jugador 1 (Sos O): ");
    nombreJugador1 = scanner.next();
    System.out.println("Ingresa nombre Jugador 2: (Sos X): ");
    nombreJugador2 = scanner.next();


    JuegoTateti juego = new JuegoTateti(nombreJugador1,nombreJugador2);

    while (true) {
      juego.imprimirTablero();
      System.out.println("Turno del jugador " + juego.jugadorActual);
      System.out.print("Ingresa la fila (0-2): ");
      int fila = scanner.nextInt();
      System.out.print("Ingresa la columna (0-2): ");
      int columna = scanner.nextInt();

      if (juego.hacerMovimiento(fila, columna)) {
        if (juego.verificarGanador()) {
          juego.imprimirTablero();
          System.out.println("¡Jugador " + juego.jugadorActual + " ha ganado!");
          System.out.println("¡¡¡Felicitaciones "+ juego.nombresJugadores[turno] +"!!!");
          break;
        } else if (juego.tableroLleno()) {
          juego.imprimirTablero();
          System.out.println("El juego ha terminado en empate.");
          break;
        }

        // Cambiar al siguiente jugador
        turno = 1 - turno;
        juego.jugadorActual = (juego.jugadorActual == 'X') ? 'O' : 'X';
      }
    }

    scanner.close();
  }
}


