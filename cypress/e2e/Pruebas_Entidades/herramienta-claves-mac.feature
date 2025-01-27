Feature: Funcionalidades de Herramienta Claves MAC

  Como usuario del sistema
  Quiero comprobar la herramienta de claves MAC
  Para asegurarme de que puedo añadir claves MAC correctamente

  Scenario: Insertar una clave MAC
    Given que accedo al módulo Herramienta Claves MAC
    When inserto una clave MAC
    Then la clave debería añadirse correctamente y mostrarse en el listado correspondiente
