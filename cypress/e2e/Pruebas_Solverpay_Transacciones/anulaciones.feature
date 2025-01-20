Feature: Funcionalidades de Anulaciones

  Como usuario del sistema
  Quiero comprobar las funcionalidades de anulaciones
  Para asegurarme de que todo funciona correctamente

  Scenario: Comprobar los filtros en Anulaciones
    Given que accedo al módulo Anulaciones
    When aplico filtros en la lista de anulaciones
    Then los resultados deberían coincidir con los criterios de filtro aplicados

  Scenario: Comprobar el listado de Anulaciones
    Given que accedo al módulo Anulaciones
    When visualizo el listado de anulaciones
    Then debería mostrar todas las anulaciones según los criterios aplicados

  Scenario: Comprobar la exportación a Excel del listado de anulaciones
    Given que accedo al módulo Anulaciones
    When exporto el listado de anulaciones a Excel
    Then el archivo generado debería contener todos los datos visibles en el listado
