Feature: Funcionalidades de Totales

  Como usuario del sistema
  Quiero comprobar las funcionalidades de totales
  Para asegurarme de que todo funciona correctamente

  Scenario: Comprobar los filtros en Totales
    Given que accedo al módulo Totales
    When aplico filtros en la lista de totales
    Then los resultados deberían coincidir con los criterios de filtro aplicados

  Scenario: Comprobar el listado de Totales
    Given que accedo al módulo Totales
    When visualizo el listado de totales
    Then debería mostrar todos los totales correctamente

  Scenario: Comprobar la exportación a Excel del listado de Totales
    Given que accedo al módulo Totales
    When exporto el listado de totales a Excel
    Then el archivo generado debería contener todos los datos visibles en el listado

  Scenario: Comprobar la pantalla de visualización de detalle de Totales
    Given que selecciono un total del listado
    When abro el detalle del total
    Then debería mostrar toda la información relacionada con el total seleccionado
