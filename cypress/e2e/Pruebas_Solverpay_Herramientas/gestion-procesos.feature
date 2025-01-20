Feature: Funcionalidades de Gestión de Procesos

  Como usuario del sistema
  Quiero gestionar procesos correctamente
  Para asegurarme de que puedo relanzar y consultar procesos sin problemas

  Scenario: Relanzar procesos
    Given que accedo al módulo Gestión de Procesos
    When ejecuto el relanzado de procesos
    Then el relanzado debe completarse correctamente y mostrar los resultados esperados

  Scenario: Consultar el estado de procesos
    Given que accedo al módulo Gestión de Procesos
    When consulto el estado de procesos
    Then la consulta debe completarse correctamente y mostrar el estado actual de los procesos
