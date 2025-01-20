Feature: Funcionalidades del Histórico de Totales

  Como usuario del sistema
  Quiero comprobar las funcionalidades del histórico de totales
  Para asegurarme de que todo funciona correctamente

  Scenario: Comprobar los filtros en el Histórico de Totales
    Given que accedo al módulo Histórico de Totales
    When aplico filtros en la lista del histórico
    Then los resultados deberían coincidir con los criterios de filtro aplicados

  Scenario: Comprobar el listado del Histórico de Totales
    Given que accedo al módulo Histórico de Totales
    When visualizo el listado del histórico
    Then debería mostrar todos los totales históricos correctamente

  Scenario: Comprobar la exportación a Excel del Histórico de Totales
    Given que accedo al módulo Histórico de Totales
    When exporto el listado del histórico a Excel
    Then el archivo generado debería contener todos los datos visibles en el listado

  Scenario: Comprobar la pantalla de visualización de detalle del Histórico de Totales
    Given que selecciono un total del histórico
    When abro el detalle del total
    Then debería mostrar toda la información relacionada con el total seleccionado
