Feature: Funcionalidades de Transacciones Manuales

  Como usuario del sistema
  Quiero completar transacciones manuales correctamente
  Para asegurarme de que el sistema procesa las transacciones y genera los tickets correctamente

  Scenario: Completar una transacción manual en Virtual POS
    Given que accedo al módulo Transacciones Manuales
    When completo una transacción manual en Virtual POS
    Then la transacción debe completarse correctamente sin errores

  Scenario: Comprobar que el ticket corresponde a la transacción
    Given que completo una transacción manual en Virtual POS
    When imprimo el ticket de la transacción
    Then el ticket generado debe corresponder con los datos de la transacción realizada
