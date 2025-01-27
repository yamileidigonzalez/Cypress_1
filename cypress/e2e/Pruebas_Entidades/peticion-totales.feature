Feature: Funcionalidades de Petición de Totales

  Como usuario del sistema
  Quiero realizar una petición de totales
  Para asegurarme de que el sistema responde correctamente

  Scenario: Realizar una petición de Totales
    Given que accedo al módulo Petición de Totales
    When realizo una petición de totales
    Then la petición debería completarse correctamente y mostrar los resultados esperados
