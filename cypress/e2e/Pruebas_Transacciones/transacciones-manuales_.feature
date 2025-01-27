Feature: Funcionalidades de Transacciones Manuales

  Como usuario del sistema
  Quiero comprobar las funcionalidades de transacciones manuales
  Para asegurarme de que todo funciona correctamente

  Scenario: Comprobar el formulario con una venta aceptada
    Given que accedo al módulo Transacciones Manuales
    When ingreso los datos de una venta aceptada
    Then el formulario debería validar y guardar los datos correctamente

  Scenario: Comprobar el formulario con una venta denegada
    Given que accedo al módulo Transacciones Manuales
    When ingreso los datos de una venta denegada
    Then el formulario debería validar y guardar los datos correctamente

  Scenario: Comprobar la visualización de detalle de operaciones
    Given que selecciono una operación manual del listado
    When abro el detalle de la operación
    Then debería mostrar toda la información relacionada con la operación seleccionada
