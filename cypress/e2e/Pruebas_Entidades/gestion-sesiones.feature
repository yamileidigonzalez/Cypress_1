Feature: Funcionalidades de Gestión de Sesiones

  Como usuario del sistema
  Quiero comprobar las funcionalidades de gestión de sesiones
  Para asegurarme de que todo funciona correctamente

  Scenario: Listado de las sesiones abiertas
    Given que accedo al módulo Gestión de Sesiones
    When visualizo el listado de sesiones abiertas
    Then debería mostrar todas las sesiones abiertas y su estado correctamente

  Scenario: Realizar una petición de Totales desde Gestión de Sesiones
    Given que accedo al módulo Gestión de Sesiones
    When realizo una petición de totales desde una sesión
    Then la petición debería completarse correctamente y mostrar los resultados esperados
