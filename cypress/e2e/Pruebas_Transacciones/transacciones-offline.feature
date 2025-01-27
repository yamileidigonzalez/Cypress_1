Feature: Funcionalidades de Transacciones Offline

  Como usuario del sistema
  Quiero comprobar las funcionalidades de transacciones offline
  Para asegurarme de que todo funciona correctamente

  Scenario: Comprobar los filtros en Transacciones Offline
    Given que accedo al módulo Transacciones Offline
    When aplico filtros en la lista de transacciones offline
    Then los resultados deberían coincidir con los criterios de filtro aplicados

  Scenario: Comprobar el listado de Transacciones Offline
    Given que accedo al módulo Transacciones Offline
    When visualizo el listado de transacciones offline
    Then debería mostrar todas las transacciones según los criterios aplicados

  Scenario: Comprobar la exportación a Excel de Transacciones Offline
    Given que accedo al módulo Transacciones Offline
    When exporto el listado de transacciones offline a Excel
    Then el archivo generado debería contener todos los datos visibles en el listado
