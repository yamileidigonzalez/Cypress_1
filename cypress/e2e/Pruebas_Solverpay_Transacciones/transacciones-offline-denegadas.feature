Feature: Funcionalidades de Transacciones Offline Denegadas

  Como usuario del sistema
  Quiero comprobar las funcionalidades de transacciones offline denegadas
  Para asegurarme de que todo funciona correctamente

  Scenario: Comprobar los filtros en Transacciones Offline Denegadas
    Given que accedo al módulo Transacciones Offline Denegadas
    When aplico filtros en la lista de transacciones offline denegadas
    Then los resultados deberían coincidir con los criterios de filtro aplicados

  Scenario: Comprobar el listado de Transacciones Offline Denegadas
    Given que accedo al módulo Transacciones Offline Denegadas
    When visualizo el listado de transacciones offline denegadas
    Then debería mostrar todas las transacciones según los criterios aplicados

  Scenario: Comprobar la exportación a Excel de Transacciones Offline Denegadas
    Given que accedo al módulo Transacciones Offline Denegadas
    When exporto el listado de transacciones offline denegadas a Excel
    Then el archivo generado debería contener todos los datos visibles en el listado

  Scenario: Volver a procesar las operaciones denegadas
    Given que accedo al módulo Transacciones Offline Denegadas
    When selecciono operaciones para volver a procesar
    Then las operaciones seleccionadas deberían ser procesadas nuevamente sin errores
