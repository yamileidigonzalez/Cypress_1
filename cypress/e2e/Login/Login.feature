Feature: Login de usuario
  Como un usuario del sistema
  Quiero poder iniciar sesión con mis credenciales
  Para acceder a las funcionalidades de la aplicación

  Scenario: Login exitoso con credenciales válidas
    Given que el usuario está en la página de login
    When ingresa un nombre de usuario "solverpay" y una contraseña "r7auF23wA.A2l1tZ2Dp4"
    And presiona el botón de login
    Then el sistema debe mostrar un mensaje de bienvenida " Ventas última hora"

   Scenario: Login fallido con credenciales inválidas
    Given que el usuario está en la página de login
    When ingresa un nombre de usuario "solverpay" y una contraseña "contraseñaIncorrecta"
    And presiona el botón de login
    Then el sistema debe mostrar un mensaje de error "Usuario o contraseña incorrectos"

  Scenario: Intento de login con campos vacíos
    Given que el usuario está en la página de login
    When no ingresa un nombre de usuario ni contraseña
    And presiona el botón de login
    Then el sistema debe mostrar un mensaje de error "Por favor, complete todos los campos"

  Scenario: Logout exitoso
    Given que el usuario ya ha iniciado sesión
    When presiona el botón de logout
    Then el sistema debe redirigir a la página de login
    And el mensaje "Has cerrado sesión exitosamente" debe ser visible
