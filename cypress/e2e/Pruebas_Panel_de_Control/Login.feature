Feature: Login de usuario
  Como un usuario del sistema
  Quiero poder iniciar sesión con mis credenciales
  Para acceder a las funcionalidades de la aplicación

  Scenario: Login exitoso con credenciales válidas
    Given que el usuario está en la página de login
    When ingresa un nombre de usuario "solverpay" y una contraseña "r7auF23wA.A2l1tZ2Dp4"
    Then presiona el botón de login
