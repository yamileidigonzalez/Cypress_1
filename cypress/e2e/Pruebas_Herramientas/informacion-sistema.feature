Feature: Funcionalidades de Información del Sistema

  Como usuario del sistema
  Quiero consultar información del estado del sistema
  Para asegurarme de que el sistema está funcionando correctamente

  Scenario: Consultar el estado de la CPU
    Given que accedo al módulo Información del Sistema
    When consulto el estado de la CPU
    Then la consulta debe completarse correctamente y mostrar el uso actual de la CPU

  Scenario: Consultar el estado del disco
    Given que accedo al módulo Información del Sistema
    When consulto el estado del disco
    Then la consulta debe completarse correctamente y mostrar el uso actual del disco
