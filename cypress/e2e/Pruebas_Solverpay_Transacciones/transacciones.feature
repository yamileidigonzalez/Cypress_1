Feature: Funcionalidades de Transacciones

  Como usuario del sistema
  Quiero comprobar las funcionalidades de transacciones
  Para asegurarme de que todo funciona correctamente

  Scenario: Comprobar los filtros en Transacciones
    Given que accedo al módulo Transacciones
    When aplico filtros en la lista de transacciones
    Then los resultados deberían coincidir con los criterios de filtro aplicados

  Scenario: Comprobar el listado de Transacciones
    Given que accedo al módulo Transacciones
    When visualizo el listado de transacciones
    Then debería mostrar todas las transacciones según los criterios aplicados

  Scenario: Comprobar la exportación a Excel del listado de operaciones
    Given que accedo al módulo Transacciones
    When exporto el listado de transacciones a Excel
    Then el archivo generado debería contener todos los datos visibles en el listado

  Scenario: Comprobar la visualización de detalle de operaciones
    Given que selecciono una transacción del listado
    When abro el detalle de la transacción
    Then debería mostrar toda la información relacionada con la operación seleccionada

