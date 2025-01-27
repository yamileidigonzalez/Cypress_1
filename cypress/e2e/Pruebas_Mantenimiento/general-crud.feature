Feature: Operaciones CRUD en el módulo General

  Como administrador del sistema bancario
  Quiero realizar operaciones CRUD en las entidades del módulo General
  Para asegurar que todo funcione correctamente

  Scenario Outline: Probar CRUD para <entidad>
    Given que estoy autenticado como administrador
    When accedo al módulo General y selecciono la entidad "<entidad>"
    Then debería poder crear un nuevo registro correctamente
    And debería poder visualizar los registros existentes
    And debería poder actualizar un registro correctamente
    And debería poder eliminar un registro correctamente

    Examples:
      | entidad             |
      | Configuración central |
      | Usuarios             |
      | Textos de ticket     |
